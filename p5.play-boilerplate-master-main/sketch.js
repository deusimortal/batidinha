var retFixo, retMovendo;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  retMovendo.velocityX = 3;
  retMovendo.velocityY = 4;
  retFixo.velocityX = -4;
  retFixo.velocityY = -3;
}
function draw() {
  background(0, 0, 0);
  //retMovendo.x = World.mouseX;
  //retMovendo.y = World.mouseY;
  if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2 
    && retFixo.x - retMovendo.x < retFixo.width / 2 + retMovendo.width / 2
    && retMovendo.y - retFixo.y < retFixo.height / 2 + retMovendo.height / 2
    && retFixo.y - retMovendo.y < retFixo.height / 2 + retMovendo.height / 2) {
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
    retMovendo.velocityX = retMovendo.velocityX * -1;
    retMovendo.velocityY = retMovendo.velocityY * -1;
    retFixo.velocityX = retFixo.velocityX * -1;
    retFixo.velocityY = retFixo.velocityY * -1;
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  
  drawSprites();
}
