nX=0;
nY=0;
var filter_name;

function preload()
{
    unicorns = loadImage("Unicorn_img.png");
    specss= loadImage("Specs_filter.png");
    lipss = loadImage("Lips_filter.png");
    mustaches = loadImage("Mustache_img.png");
    dogs= loadImage("Dog_Filter.png");
}
function setup(){
    canvas= createCanvas(450,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        nX=results[0].pose.nose.x;
        nY=results[0].pose.nose.y;
        console.log("nose=" + nX);
        console.log("nose=" + nY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function unicorn(){
    filter_name= "unicorn";
    image(unicorns, nX-120,nY-270, 230,230);
}

function mustache(){
    filter_name= "mustache";
    image(mustaches, nX-100,nY+20,200,70);
}

function lips(){
    filter_name= "lips";
    image(lipss, nX-35,nY+50,80,50);
}

function specs(){
    filter_name= "specs";
    image(specss, nX-100,nY-40,200,70);
}

function dog(){
    filter_name= "dog";
    image(dogs, nX-55,nY,100,70);
}

function draw(){
    image(video,0,0,450,450);
    if (filter_name== "unicorn"){
        unicorn();
    }
    else if(filter_name== "mustache"){
        mustache();
    }
    else if(filter_name== "lips"){
        lips();
    }
    else if(filter_name== "specs"){
        specs();
    }
    else if(filter_name== "dog"){
        dog();
    }
}

function take_snapshot(){
    save('My Filtered Image.png');
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '76')
		{
			lips();
			console.log("Lips- Filter");
		}
	
		if(keyPressed == '77')
		{
			mustache();
			console.log("Mustache- Filter");
		}
		
		if(keyPressed == '83')
		{
			specs();
			console.log("Specs- Filter");
		}
	
		if(keyPressed == '85')
		{
			unicorn();
			console.log("Unicorn- Filter");
		}

        if(keyPressed == '68')
		{
			dog();
			console.log("Dog- Filter");
		}
		
		
}