var dog,dogImg,happyDog,database,foodS,foodStock;
var database,firebase;

function preload(){
dogImg=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
   dog= createSprite(250,250,10,10);
   dog.addImage(dogImg);
   dog.scale=0.5;


    foodStock= database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

dog.display();

}



