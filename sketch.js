var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness =random(22,83);
  speed=random(223,321);
  weight=random(30,52)

  wall = createSprite(1200,200,thickness,height/2); 
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "rgb(80,80,80)";
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
console.log(hasCollided(bullet,wall))
  
  if(hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed* speed/(thickness * thickness * thickness);

if(damage>10)
{
  wall.shapeColor = "rgb(255,0,0)";
}

if(damage<10)
{
  wall.shapeColor = "rgb(0,255,0)";
}

}  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{bulletRightEdge=lbullet.x +lbullet.width;
 wallLeftEdge=lwall.x; 
 if(bulletRightEdge>=wallLeftEdge)
 {
  return true
 } 
return false;





}

