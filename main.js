mustachex=0;
mustachey=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotposes);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, mustachex, mustachey, 80, 40);
}
function take_snapshot(){
    save("myimage.png");
}
function modelloaded(){
    console.log("PoseNet has started");
}
function gotposes(results){
    if (results.length > 0){
        console.log(results);
      
        mustachex=results[0].pose.nose.x-40;
        mustachey=results[0].pose.nose.y;
      
        console.log("x postition of nose is "+ mustachex);
        console.log("Y posittion of nose is "+ mustachey);
    }
}
