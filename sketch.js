var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;

function preload(){
  sunImg = loadImage('sun.png');
  mercuryImg = loadImage('mercury.png');
  venusImg = loadImage('venus.png');
  earthImg = loadImage('earth.png');
  marsImg = loadImage('mars.png');
  jupiterImg = loadImage('jupiter.png');
  saturnImg = loadImage('saturn.png');
  uranusImg = loadImage('uranus.png');
  neptuneImg = loadImage('neptune.png');
}

function setup() {
  createCanvas(1800,700);

  //The sun
  sun = createSprite(50, 350, 30, 30);
  sun.addImage("sun", sunImg);
  sun.scale = 1.2;

  //Mercury
  mercury = createSprite(250, 350, 30, 30);
  mercury.addImage("mercury", mercuryImg);
  mercury.scale = 0.2;

  //Venus
  venus = createSprite(350, 350, 30, 30);
  venus.addImage("venus", venusImg);
  venus.scale = 0.2;

  //Earth
  earth = createSprite(500, 350, 30, 30);
  earth.addImage("earth", earthImg);
  earth.scale = 0.3

  //Mars
  mars = createSprite(650, 350, 30, 30);
  mars.addImage("mars", marsImg);
  mars.scale = 0.5;

  //Jupiter
  jupiter = createSprite(850, 350, 30, 30);
  jupiter.addImage("jupiter", jupiterImg);
  jupiter.scale = 1;

  //Saturn
  saturn = createSprite(1100, 350, 30, 30);
  saturn.addImage("saturn", saturnImg);
  saturn.scale = 1;;

  //Uranus
  uranus = createSprite(1300, 350, 30, 30);
  uranus.addImage("uranus", uranusImg);
  uranus.scale = 0.3;

  //Neptune
  neptune = createSprite(1500, 350, 30, 30);
  neptune.addImage("neptune", neptuneImg);
  neptune.scale = 0.5;
}

function draw() {
  background(0,0,0); 

  drawSprites();
  fill("white");
  textSize(20);
  text("<-Use Arrows to Move in Space->", 600, 200);
  text("sun", 50, 550);
  text("mercury", 200, 550);
  text("venus", 350, 550);
  text("earth", 500, 550);
  text("mars", 650, 550);
  text("jupiter", 850, 550);
  text("saturn", 1100, 550);
  text("uranus", 1300, 550)
  text("neptune", 1500, 550)
}