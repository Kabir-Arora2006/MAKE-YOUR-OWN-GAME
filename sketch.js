var player 
var bullet, bulletGroup;
var zombie, zombieGroup; 
function preload(){

}

function setup(){
createCanvas (windowWidth, windowHeight);

player = createSprite(50,100,50, 50)

bulletGroup = new Group();
zombieGroup = new Group();
}

function draw(){
	background(0);
	
	if (keyDown("UP_ARROW") && player.y > 20){
	 player.y = player.y-30 
	}
	if (keyDown("DOWN_ARROW") && player.y < height-20){
		player.y=player.y+30
	}
	if(keyWentDown("space")){
		bullet = createSprite(displayWidth-1150, player.y-30, 20, 10);
		bullet.velocityX = 20

		bulletGroup.add(bullet)
	}
	
	enemy();
	drawSprites();
}

function enemy(){
if(frameCount%50===0){
zombie = createSprite(random(1200,1400), random(100,500), 40, 40)
	zombie.velocityX = -3
	zombie.setCollider("rectangle",0,0,400,400)

	zombie.lifetime = 400
	zombieGroup.add(zombie)
}
}

