var hr, mn, se;
var hrAngle, mnAngle, seAngle;

function setup() {

  createCanvas(400,400);
  //to use angle in degrees 
  angleMode(DEGREES);

}

function draw() {
  background(0);
  //translation and notation
  translate(200,200);
  rotate(-90);

  //calculating time using pre defined functions from p5.js
  hr = hour();
  mn = minute();
  se = second();

  // to create iterative rotation
  seAngle = map(se,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12, 0,12,0,360);

  //drawing the second's hand
  push();
  rotate(seAngle);
  stroke(255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //awwing minutes had
  push();
  rotate(mnAngle);
  stroke(255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke(255);
  point(0,0);

  //drawing the arc
  strokeWeight(10);
  noFill();

  //seconds
  stroke(255,0,127);
  arc(0,0,300,300,0,seAngle);

  //minutes
  stroke(254,0,254);
  arc(0,0,280,280,0,mnAngle);

  //hour
  stroke(128,0,255);
  arc(0,0,260,260,0,hrAngle);  

  drawSprites();
}