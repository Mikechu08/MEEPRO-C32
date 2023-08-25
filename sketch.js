var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;
function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color("aqua");

  squariad.velocity.y = 0.5;
  squariad.velocity.x =4;


  pin1=createSprite(200,300, 20, 20);  
  pin1.shapeColor = color("yellow");

  pin1.velocity.x =4;
  pin1.velocity.y =1;

  pin2=createSprite(100,400,20, 20);  
  pin2.shapeColor = color("black");

  pin2.velocity.x =4;
  pin2.velocity.y =2;

  pin3=createSprite(300,600, 20, 20);  
  pin3.shapeColor = color("dark blue");

  pin3.velocity.x =4;
  pin3.velocity.y =1;

  pin4=createSprite(110,70, 20, 20);  
  pin4.shapeColor = color("blue");

  pin4.velocity.x =4;
  pin4.velocity.y =3;

  pin5=createSprite(160,100, 20, 20);  
  pin5.shapeColor = color("red");

  pin5.velocity.x =4;
  pin5.velocity.y =2;

  pin6=createSprite(400, 200, 20, 20);  
  pin6.shapeColor = color("brown");

  pin6.velocity.x =4;
  pin6.velocity.y =8;
}
   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  squariad.bounceOff(pin1);
  squariad.bounceOff(pin2);
  squariad.bounceOff(pin3);
  squariad.bounceOff(pin4);
  squariad.bounceOff(pin5);
  squariad.bounceOff(pin6);

  pin1.bounceOff(edges);
  pin1.bounceOff(squariad);
  pin1.bounceOff(pin2);
  pin1.bounceOff(pin3);
  pin1.bounceOff(pin4);
  pin1.bounceOff(pin5);
  pin1.bounceOff(pin6);

  pin2.bounceOff(edges);
  pin2.bounceOff(squariad);
  pin2.bounceOff(pin1);
  pin2.bounceOff(pin3);
  pin2.bounceOff(pin4);
  pin2.bounceOff(pin5);
  pin2.bounceOff(pin6);

  pin3.bounceOff(edges);
  pin3.bounceOff(squariad);
  pin3.bounceOff(pin1);
  pin3.bounceOff(pin2);
  pin3.bounceOff(pin4);
  pin3.bounceOff(pin5);
  pin3.bounceOff(pin6);

  pin4.bounceOff(edges);
  pin4.bounceOff(squariad);
  pin4.bounceOff(pin1);
  pin4.bounceOff(pin3);
  pin4.bounceOff(pin2);
  pin4.bounceOff(pin5);
  pin4.bounceOff(pin6);

  pin5.bounceOff(edges);
  pin5.bounceOff(squariad);
  pin5.bounceOff(pin1);
  pin5.bounceOff(pin3);
  pin5.bounceOff(pin4);
  pin5.bounceOff(pin2);
  pin5.bounceOff(pin6);

  pin6.bounceOff(edges);
  pin6.bounceOff(squariad);
  pin6.bounceOff(pin1);
  pin6.bounceOff(pin4);
  pin6.bounceOff(pin2);
  pin6.bounceOff(pin5);
  pin6.bounceOff(pin2);

  drawSprites();
}