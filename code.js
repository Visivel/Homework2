var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var limite1 = createSprite(190,120,420,3);
var limite2 = createSprite(190,260,420,3);

var sam = createSprite(20,190,12,12);
sam.shapeColor = "green";

var trofeu = createSprite(370,185,20,20);

var morte = 0;
var vitoria = 0;


var car1 = createSprite(100,130,10,10);
var car2 = createSprite(215,130,10,10);
var car3 = createSprite(165,250,10,10);
var car4 = createSprite(270,250,10,10);
var group = createGroup();
group.add(car1);
group.add(car2);
group.add(car3);
group.add(car4);

car1.velocityY = 8;
car2.velocityY = -8;
car3.velocityY = 8;
car4.velocityY = -8;

function draw() {
  background("white");
  strokeWeight(0); 
    fill("lightblue"); 
    rect(0,120,52,140);
    fill("yellow"); 
    rect(345,120,52,140);
  group.bounceOff(limite1);
  group.bounceOff(limite2);
  
  if(keyDown("right")){
    sam.x=sam.x+2
  }
    if(keyDown("left")){
    sam.x=sam.x-2
  }
    if(keyDown("up")){
    sam.y=sam.y-2
  }
    if(keyDown("down")){
    sam.y=sam.y+2
  }
  if(sam.isTouching(group)){
    sam.x = 20;
    sam.y = 190;
    morte+=1;
  }
  if(sam.isTouching(trofeu)){
    sam.x = 20;
    sam.y = 190;
    vitoria+=1;
  }
  
  drawSprites();
    textFont("Georgia");
  fill("red");
  stroke("black");
  textSize("22");
  text("Mortes: "+morte,150,69);
  textFont("Georgia");
  fill("green");
  stroke("black");
  textSize("22");
  text("Vitorias: "+vitoria,150,40);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
