
$(document).ready( function() {

    var g = 9.8 ;
    var radius = 40;
    var t = 0;
    var theta_max = Math.HALF_PI/3;

    var elem = document.getElementById('pendulum');
    var two = new Two({fullscreen: true}).appendTo(elem);
    
    var p = new Two.Vector(two.width/2, two.height/10*2);
    
    var ground = two.makeLine(two.width/10*2,two.height/10*8+radius+10,two.width/10*8,two.height/10*8+radius+10);
    ground.linewidth = 5;
    
    var cable = two.makeLine(0,0,0,two.height/10*6);    
    cable.linewidth = 2;
    
    var ball = two.makeCircle(0,two.height/10*6, radius);
    ball.fill = "#CCCCCC";
    
    var anchor = two.makeCircle(0,0,3);
    anchor.fill = "yellow";
    anchor.linewidth=1;
    
    var group = two.makeGroup(cable, ball, anchor);
    group.center = p;
    
    function swing(){
        group.translation.set(p.x,p.y);
        group.rotation = Math.sin(t);
        t = t+0.01;
        if(t>100)
            t=0;
    }
    
    two.bind('update', function(frameCount) {
      // This code is called everytime two.update() is called.
      // Effectively 60 times per second.
      swing();
    }).play();    
});