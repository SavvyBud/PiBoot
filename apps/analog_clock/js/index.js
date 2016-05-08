

$(document).ready( function() {
    
    //This code will run after your page loads
    var elem = document.getElementById('panchang');
    var two = new Two({fullscreen: true}).appendTo(elem);
    
    var position = new Two.Vector(two.width/2, two.height/2);
    
    var dot = two.makeCircle(position.x, position.y, 100);
    dot.fill = '#52C5DC';
    dot.stroke = '#1C75BC';
    dot.linewidth = 20;

    var center = two.makeCircle(0, 0, 5);
    center.fill ='#000000';
    center.noStroke();
    
    var sec = new Two.Vector(0,-85);
    var secHand = two.makeLine(0,15,sec.x,sec.y);
    var groupS = two.makeGroup(center, secHand);
    
    var hr = new Two.Vector(0,-65);
    var hrHand = two.makeLine(0,8,hr.x,hr.y);
    hrHand.linewidth = 5;
    var groupH = two.makeGroup(center, hrHand);
    
    var min = new Two.Vector(0,-75);
    var minHand = two.makeLine(0,8,min.x,min.y);
    minHand.linewidth = 3;
    var groupM = two.makeGroup(center, minHand);
    
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds(); 
        groupS.translation.set(two.width / 2, two.height / 2);
        groupH.translation.set(two.width / 2, two.height / 2);
        groupM.translation.set(two.width / 2, two.height / 2);
        groupS.rotation = 2*Math.PI/60*seconds;
        groupH.rotation = 2*Math.PI/12*hours + 2*Math.PI/3600*minutes;
        groupM.rotation = 2*Math.PI/60*minutes;
    }
    
    two.bind('update', function(frameCount) {
      // This code is called everytime two.update() is called.
      // Effectively 60 times per second.
      displayTime();
    }).play();    
});