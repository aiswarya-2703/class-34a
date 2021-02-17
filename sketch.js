const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,bgselect;

var gameState = "onSling";

function preload() {
   backgroundImg = loadImage("sprites/bg.png");
   //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //getBackgroundImg();

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   

  

    box5 = new Box(810,160,70,70);
   

    bird = new Bird(200,200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:10});
}

function draw(){
    //if(backgroundImg){
    background(backgroundImg);
   // }
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
   
   

    box5.display();
   

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
 //async function getBackgroundImg(){
   // //Api call using fetch()
   // var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata');
    // extracting information that we need from the response
 //   var responseJson = await response.json();
   // //extracting datetime 
  //  var time1 = responseJson.datetime;
    //var hr =time1.slice(11,13);
 //   console.log(hr);
   // if(hr>=1000 && hr<=1900){
        // mrng
     // bgselect="sprites/bg.png"
   // }
   // else{
   //     bgselect="sprites/bg2.jpg"
    //}
    //backgroundImg = loadImage(bgselect);


 //}