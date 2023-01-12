var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cfe850bc-cd4f-48ed-8229-812a6f4bc035","9eb2c808-869b-408a-bdd5-987a1e2bf038","5a6b76f6-5043-4f1a-8af3-ace1cdc89539"],"propsByKey":{"cfe850bc-cd4f-48ed-8229-812a6f4bc035":{"name":"trophy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png","frameSize":{"x":381,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"7x2COokMDKpyqrZGY9g1FYvMdliu6wtd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png"},"9eb2c808-869b-408a-bdd5-987a1e2bf038":{"name":"spider","sourceUrl":null,"frameSize":{"x":263,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"6HuuzWB7SWeq9.gtqf3k5ml4rnDL9Veh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":263,"y":397},"rootRelativePath":"assets/9eb2c808-869b-408a-bdd5-987a1e2bf038.png"},"5a6b76f6-5043-4f1a-8af3-ace1cdc89539":{"name":"cave","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
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
