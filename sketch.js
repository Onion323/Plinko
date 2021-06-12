const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine;
var ground, platform;

function setup() {
  var canvas = createCanvas(480, 800);
  //createSprite(500,500,200,480);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  platform = new Ground(500, 505, 1000, 1000);

}

var particles = [];
var plinkos = [];
var divisons = [];
var divisionHeight = 300;


function draw() {
  //setTimeout(function(){alert()},10000);
  background(255, 255, 255);
  drawSprites();
  platform.display();
  ground.display();
  
  for (var k = 0; k <= width; k += 80) {
    var div = new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    divisons.push(div);
    div.display();
  }
  for (var j = 40; j <= width; j = j + 50) {
    var plink = new Plinko(j, 75);
    plinkos.push(plink);
    plink.display()
  }
  for (var j = 15; j < width - 10; j = j + 50) {
    var plink = new Plinko(j, 175);
    plinkos.push(plink);
    plink.display();
  }
}

