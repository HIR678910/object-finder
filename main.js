status = " ";

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status_1").innerHTML = "Status: Detecting Objects"
    name = document.getElementById("input").value;
}

function modelloaded()
{
    console.log("Model Loaded!");
    status = true;

}

function draw()
{
    image(video, 0, 0, 480, 380);
}