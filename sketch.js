var drops = [];

function setup() {
  createCanvas(800,400);

  for(var i = 0 ; i < 1000 ; i++){
    drops[i] = new Raindrop();
  }
}

function draw() {
  background(255,255,255);  
  for(var i = 0 ; i < drops.length ; i++){
    drops[i].fall();
    drops[i].display();
  }
  drawSprites();
}