var song="";
var song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristScore=0;
song_status="";
song2_status="";
function preload()
{
song = loadSound("music.mp3");
song2 = loadSound("music1.mp3")
}


function setup()
{
    canvas = createCanvas(600, 570);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
        }     
        function modelLoaded()
        { 
            console.log("poseNet is initialized");
         }



function draw()
{

    console.log("leftWristX = " + song + "leftWristY = " + song)
    song_status= song.isPlaying()


    image(video, 0, 0, 600, 500);
    fill("#CF0404");
    stroke("#CF0404");
    if(leftWristScore >0.2)
    {
        circle(leftWristX, leftWristY, 20)

        song2.stop();

        if(song_status==false)
        {
            song.play();

            document.getElementById("song").innerHTML = "in the hall of the mountain king"
        }
    }


}
   
function play()
{
 song.play();
 song.setVolume(1);
 song.rate(1);
}
function gotPoses(results)
{
    if(results.length > 0)
   {
       console.log(results);
       leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
leftWristScore = results[0].pose.keypoints[9].score;

   } 
}