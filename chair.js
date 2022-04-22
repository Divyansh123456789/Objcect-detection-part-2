Status = "";
chair_image = "";

function preload(){
    chair_image = loadImage("chair.jpeg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Object: Detecting Objects";

}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detector.detect(chair_image,gotResults);
}
function gotResults(results,error){
if(error){
    console.log(error);

}
console.log(results);

}
function draw(){
    image(chair_image,0,0,640,350);

}