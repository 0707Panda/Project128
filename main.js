music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    net = ml5.poseNet(video, modelLoaded);
    net.on("poses", gotPoses);
}

function draw(){
    Image(video, 0, 0, 600, 500);
}



function modelLoaded(){
    console.log("Model loaded!")
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("Lrft Wrist X: " + leftWristX + "Left Wrist Y" + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        console.log("Right Wrist X: " + rightWristX + "Right Wrist Y" + rightWristY);
    }
}