let slider;

let r = 203;
let g = 197;
let b = 26;



function setup() {
  fill(0);
  var canvas = createCanvas(1020, 800);
  canvas.parent('sketch-holder');
  

}

function draw()
{
	
	
	if(mouseX >= 0 && mouseX <=1020 && mouseY >= 0 && mouseY <= 600)
	{
		if(mouseIsPressed == true)
		{
			fill(207, 164, 23);
			stroke(r,g,b);
			strokeWeight(10);
			line(mouseX, mouseY, pmouseX, pmouseY);
		}
	}
	
	stroke(0);
	strokeWeight(1);
	fill(60,245,67);
	if(mouseX >= 20 && mouseX <=120 && mouseY >= 610 && mouseY <= 660)
	{
		fill(150,25,67);
		if(mouseIsPressed == true)
		{
			
			setup();
			fill(255,0,0);
		}
	}
	rect(20, 610 ,100, 50);
	textSize(30);
	fill(255);
	text("Clear", 30,645);
	
	cChoice();

	
}

function cChoice()
{
	if(mouseX >= 200 && mouseX <= 250 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=204;
			g=0;
			b=0;
		}
	}
	fill(204,0,0);
	rect(200,610,50,50);
	
	if(mouseX >= 300 && mouseX <= 350 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=48;
			g=185;
			b=33;
		}
	}
	fill(43,185,33);
	rect(300,610,50,50);
	
	if(mouseX >= 400 && mouseX <= 450 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=0;
			g=0;
			b=153;
		}
	}
	fill(0,0,153);
	rect(400,610,50,50);
	
	if(mouseX >= 500 && mouseX <= 550 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=129;
			g=0;
			b=242;
		}
	}
	fill(129,0,242);
	rect(500,610,50,50);
	
	if(mouseX >= 600 && mouseX <= 650 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=255;
			g=255;
			b=51;
		}
	}
	fill(255,255,51);
	rect(600,610,50,50);
	
	if(mouseX >= 700 && mouseX <= 750 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=203;
			g=197;
			b=26;
		}
	}
	fill(203,197,26);
	rect(700,610,50,50);
	
	if(mouseX >= 800 && mouseX <= 850 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=0;
			g=0;
			b=0;
		}
	}
	fill(0);
	rect(800,610,50,50);
	
	if(mouseX >= 900 && mouseX <= 950 && mouseY >=610 && mouseY <= 660)
	{
		if(mouseIsPressed == true)
		{
			r=255;
			g=255;
			b=255;
		}
	}
	fill(255);
	rect(900,610,50,50);
}


