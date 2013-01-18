var i = 0;

function processForm() {

    i++;
    var listItem = document.priority.priority1.value;
	
	var listed = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;
	i++;
	//addition of priority2
    var listItem2 = document.priority.priority2.value;
    var listed2 = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem2 + '</div>';
    document.getElementById("checkList").innerHTML += listed2;
    i++;
    //addition of priority3
    var listItem3 = document.priority.priority3.value;
    var listed3 = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem3 + '</div>';
    document.getElementById("checkList").innerHTML += listed3;
}

//for the easy wins portion
var z = 0;

function processForm2() {

    z++;
    var listItem = document.today.newWin.newWin.value;
    
    var listed = '<div id="item' + z + '"><input type="checkbox" onclick="crossedOut(\'item'+ i + '\')" />' + listItem + '</div>';

    document.getElementById("more").innerHTML += listed;
}

//this seems to only work if the item input is numeric
function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
}

//show/hide a div section
function toggleText() {
    var ele = document.getElementById("how_toggleText");
    var text = document.getElementById("how_displayText");
    if(text.style.display !== "none") {
        text.style.display = "none";
    }
    else{
        text.style.display = "block";
    }
}

function displayAdvice(){
    var adviceToDisplay = getAdvice();
    document.getElementById('advice').innerHTML = adviceToDisplay;

}

//a list of advice that I will want to display randomly
var advice = [
    ["Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.", '-Steve Jobs'],
    ['Excellence is not an act, but a habit', '-Aristotle'],
    ["Don't be a cog: Don't ignore your dreams, don't work too much, say what you think, cultivate friendships, and be happy.", "-Paul Graham"],
    ["Bold knaves thrive without one grain of sense, but good men starve for want of impudence.","-John Dryden"],
    ["I want to take my rightful share of life by force, I want to give lavishly, I want love to flow from my heart, to ripen and bear fruit. There are many horizons that must be visited, fruit that must be plucked, books read, and white pages in the scrolls of life to be inscribed with vivid sentences in a bold hand.","Tayeb Salih (A Season of Migration to the North)"],
    ["Begin, be bold, and venture to be wise","-Horace"],
    ["Make your own luck",""],
    ["Fail fast and frequently. Your failure to success ratio is constant over time. The only way to have more success is to fail more often."," "],
    ["What’s the smallest, fastest way you could test this?",""],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it",""],
    ["You are the average of the 5 people you spend the most time with",""],
    ["To get good at a new thing, copy something you admire.  Want to paint? Copy picasso. Want to code? Recreate google calendar.  Want to learn web design? Copy a cool site’s layout.  Want to learn piano? Play Mozart. ",""],
    ["There is a limit to testing.  It won’t get you to revolutionary change, but it can get you to emulative change.",""],
    ["What is the work you can’t not do?",""],
    ["",""],
    //["",""],
];


//retrieves a random bit of advise from the array of arrays 'advise'
//returns an array with two elements
function getAdvice(){
    var random = Math.random() * advice.length;
    random = Math.floor(random);
    //alert(advice[random]);
    formattedAdvice = advice[random][0] + '<br>' + advice[random][1];
    return formattedAdvice;
}