Status = "";
Iron_image = "";

function preload(){
    Iron_image = loadImage("Iron.jpeg");
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
object_detector.detect(Iron_image,gotResults);
}
function gotResults(results,error){
if(error){
    console.log(error);

}
console.log(results);

}
function draw(){
    image(Iron_image,0,0,640,350);

}