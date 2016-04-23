
var numWindows = 9;

var projectWidth = 1024;
var projectHeight = 768;

var screenWidth = screen.width;
var screenHeight = screen.height;

var xoffset = (screenWidth / 2) - (projectWidth / 2);
var yoffset = (screenHeight / 2) - (projectHeight / 2);

var windows = new Array();

var winVars = new Array();

// X, Y, WIDTH, HEIGHT
winVars[0] = new Array( 15,  65, 102, 102);  // Title	 
winVars[1] = new Array( 15, 215, 102, 128);	 // Grid 
winVars[2] = new Array(126, 215, 102, 384);  // Belt
winVars[3] = new Array(237, 471, 102, 128);  // Grass
winVars[4] = new Array(348,  65, 102, 655);  // Cannon
winVars[5] = new Array(459, 165, 102, 384);  // Pyramid
winVars[6] = new Array(570, 165, 102, 384);  // Traffic
winVars[7] = new Array(681,  65, 102, 384);  // Gears
winVars[8] = new Array(792, 321, 102, 128);  // BattleFront
winVars[9] = new Array(903, 165, 102, 558);  // Labryinth

var timerOffset = 0;

var totallyFinished = 0;

function resetTimer() {
	var dte = new Date();
	var sec = dte.getMilliseconds();
	timerOffset=sec;
	
}
		
function popUp(winNum) {
	
	var windowFeatures = "toolbar=no,location=no,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,left="+(winVars[winNum][0]+xoffset)+",top="+(winVars[winNum][1]+yoffset)+",width="+winVars[winNum][2]+",height="+winVars[winNum][3];
 	windows[winNum] = window.open( "window"+winNum+".html", "myWindow"+winNum, windowFeatures);
	
	resetTimer();
	
	//windows[winNum].moveTo(winVars[winNum][0],winVars[winNum][1]);
	//set focus
	//alert("x: "+ windows.length+", "+"y: "+windows[2].length);
}


function closeWindows(closeThem){

  var leave = confirm("Are you sure you want to leave?");
  if (!leave) {
    location = self.location;
	return false;
  } else {		
	// cannot get for loop to do this correctly for some reason??
	windows[1].close();
	windows[2].close();
	windows[3].close();
	windows[4].close();
	windows[5].close();	
	windows[6].close();	
	windows[7].close();	
	windows[8].close();	
    windows[9].close();		
	windows[0].close();
  }
  return true;
}