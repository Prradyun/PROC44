var playerShip,attackerShip;
var playerShipImg,attackerShipImg;
var rocket;

function preload(){
   playerShipImg = loadImage("images/PlayerShip.png");
   attackerShipImg = loadImage("images/AttackerShip.png");
}
function setup() {
  createCanvas(1000, 400);
   playerShip = createSprite(100,200,10,10);
   playerShip.addImage("PlayerShip",playerShipImg);
   attackerShip = createSprite(900,200,10,10);
   attackerShip.addImage("AttackerShip",attackerShipImg);

}

function draw() {
  background("black");

  if(keyDown("UP_ARROW")){
    playerShip.y = playerShip.y-10;
  }

  
  if(keyDown("DOWN_ARROW")){
    playerShip.y = playerShip.y+10;
  }

  playerShip.display();
  attackerShip.display();
}

