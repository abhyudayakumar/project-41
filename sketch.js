const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backroundIMG;
var boy;
var platform;

function preload(){
    backgroundImg = loadImage("");
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
var ground = createSprite(500,20,500,20);
var drop = createSprite(250,250,20,20);
var boy = createSrite(250,20,20,20);

for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,500), random(0,500));
}

}   


