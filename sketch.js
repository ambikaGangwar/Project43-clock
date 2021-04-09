var hr, min, sec;
var hrAngle, minAngle, secAngle; 
 
function setup(){
    createCanvas(800,800); 
     
    image(bg,0,0,700,700);
    tint(0, 200, 204); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function preload(){
      bg=loadImage("clock.jpg");
     
}

function draw(){
    background(bg);

    //Translation and rotation 
    translate(400,400)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    min = minute();
    sec = second();

    //To create   iterative rotation
    // using map() to place them repetively
    // 
    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360);
    hrAngle = map(hr%12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(secAngle); //rotate the hand based on angle calculated
    stroke (127,255,212);
    strokeWeight(7);
    line(0,0,200,0);
    pop()

    //drawing mins hand
    push();
    rotate(minAngle);
    stroke(64,224,208);
    strokeWeight(7);
    line(0,0,140,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,128,128);
    strokeWeight(7);
    line(0,0,90,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();

    //Seconds
    stroke (127,255,212);
    // x,y,width,height,start,end 
    arc(0,1,750,750,0,secAngle);

    //Minutes
    stroke(64,224,208);
   arc(0,0, 730,730,0,minAngle);

    //Hour
    stroke (0,128,128);
    arc(0,0, 710,710,0,hrAngle);
    drawSprites();
}