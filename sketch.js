var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(400,200,50,50);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if (istouching(movingRect,Rect1)){
    movingRect.shapeColor = "red"
    Rect1.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    Rect1.shapeColor = "green"
  }
  drawSprites();
}

