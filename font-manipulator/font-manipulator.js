leftwristx=0;
rightwristy=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet model is loaded');
}

function draw()
{
    background('#2a6fa3');
    textSize(difference);
    text('AASHU', 11, 279);
    fill(0, 199, 220);
    document.getElementById("font_size").innerHTML="The size of the Font is " + difference + "px";
}

function gotPoses(result)
{
    if(result.length>0){
        console.log(result);

        rightwristx=result[0].pose.rightWrist.x;
        leftwristx=result[0].pose.leftWrist.x;
        console.log('right wristx ='+ rightwristx + "leftwristx =" + leftwristx);
        difference=floor(leftwristx-rightwristx);
        console.log("Difference is " + difference);
    }
}