
var  bullet, bullet1, wall;
var speed, weight;

var deformation;
var delay;


function setup() {
  createCanvas(1600,1600);
  speed=random(55,90);
  weight=random(400,1500);
 bullet= createSprite(50, 200, 50, 50);
 bullet1= createSprite(50, 350, 50, 50);

 wall= createSprite(1000,200, 60, height);
 wall.shapeColor=(80,80,80);
 bullet.velocityX= speed;
 bullet1.velocityX= speed;
 delay=0;
}
 
function draw() {
  background(0,0,0); 
  
  if ((bullet.x -wall.x < bullet.width/2 + wall.width/2) 
  && ( wall.x-bullet.x < bullet.width/2 + wall.width/2)) {
    deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation <100){
      bullet.shapeColor="green";
    }
    else if( deformation >=100 && deformation<=180){
      bullet.shapeColor="yellow";
     }
    else {
             bullet.shapeColor="red"
     }

     if ((bullet1.x -wall.x < bullet1.width/2 + wall.width/2) 
     && ( wall.x-bullet1.x < bullet1.width/2 + wall.width/2)) {
       deformation = 0.5 * weight * speed * speed / 22500;
       if (deformation <100){
         bullet1.shapeColor="green";
       }
       else if( deformation >=100 && deformation<=180){
         bullet1.shapeColor="yellow";
        }
       else {
                bullet1.shapeColor="red"
       }
      }

if (bullet.x=1200 ){
  bullet.velocityX=0;
 }

 if (bullet1.x=1200 ){
  bullet1.velocityX=0;
 }
}

  
  drawSprites();
}