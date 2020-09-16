var rectangle1,rectangle2


function setup() {
  createCanvas(800,400);
rectangle1=createSprite(100,100,90,45)
rectangle2=createSprite(200,200,55,110)
}

function draw() {
  background(60,120,235); 
  drawSprites();
  rectangle1.x=mouseX
  rectangle1.y=mouseY
  if (keyDown("up")) {
    rectangle2.velocityY=-2
  }
  if (keyDown("down")) {
    rectangle2.velocityY=2
  }
  if (keyDown("left")) {
    rectangle2.velocityX=-2
  }
  if (keyDown("right")) {
    rectangle2.velocityX=2
  }

  rectangle1.shapeColor="red"
  rectangle2.shapeColor="blue"
  if (rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2 && rectangle2.x - rectangle1.x < rectangle2.width/2 + rectangle1.width/2 && rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2 && rectangle2.y - rectangle1.y < rectangle2.height/2 + rectangle1.height/2   ) {
    rectangle2.shapeColor="pink"
    rectangle1.shapeColor="lightgreen"
    
  }
}