//functionality:    hide/show sections of the site
//                  hide/show directions
//                  show one of a list of quotes to live by
//                  save changes to database so I can access updated list anywhere 

$(document).ready(function(){

    //hides or shows focus directions if header is clicked
    $('#focus-header').click(function(){
        $('#focus-directions').fadeToggle('fast'); //o('fast', .5);
    });

    //hides or shows process directions (on index.html) if clicked
    $('#process-header').click(function(){
        $('#process-directions').fadeToggle('fast');
    });
});

function displayAdvice(){
    var adviceToDisplay = getAdvice();
    document.getElementById('advice').innerHTML = adviceToDisplay;
}

var adviceIndex = 0;

function getAdvice(){
    var random = Math.random() * advice.length;
    random = Math.floor(random);
    var formattedAdvice = '';
    for (var i=0;i<advice[random].length;i++){ 
        formattedAdvice = formattedAdvice + advice[random][i] + '<br>';
    }
    adviceIndex = random;
    document.getElementById('advice').innerHTML = formattedAdvice;
}

//return the next element from the advice array
function nextAdvice(){
    if(adviceIndex < advice.length){
        adviceIndex = adviceIndex + 1;
    }
    else{
        adviceIndex = 0;
    }
    var formattedAdvice = '';
    for (var i=0;i<advice[adviceIndex].length;i++){ 
        formattedAdvice = formattedAdvice + advice[adviceIndex][i] + '<br>';
    }
    document.getElementById('advice').innerHTML = formattedAdvice;
}

//return the previous element from the advice array
function previousAdvice(){
    if(adviceIndex === 0){
        adviceIndex = advice.length - 1;
    }
    else{
        adviceIndex = adviceIndex - 1;
    }
    var formattedAdvice = '';
    for (var i=0;i<advice[adviceIndex].length;i++){ 
        formattedAdvice = formattedAdvice + advice[adviceIndex][i] + '<br>';
    }
    document.getElementById('advice').innerHTML = formattedAdvice;
}


//a list of quotes and advice I want to display randomly or deliberately 
var advice = [
    ["Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.", '-Steve Jobs'],
    ['Excellence is not an act, but a habit', '-Aristotle'],
    ["Don't be a cog: Don't ignore your dreams, don't work too much, say what you think, cultivate friendships, and be happy.", "-Paul Graham"],
    ["Bold knaves thrive without one grain of sense, but good men starve for want of impudence.","-John Dryden"],
    ["I want to take my rightful share of life by force, I want to give lavishly, I want love to flow from my heart, to ripen and bear fruit. There are many horizons that must be visited, fruit that must be plucked, books read, and white pages in the scrolls of life to be inscribed with vivid sentences in a bold hand.","Tayeb Salih (A Season of Migration to the North)"],
    ["Begin, be bold, and venture to be wise.","-Horace"],
    ["Make your own luck.",""],
    ["Fail fast and frequently. Your failure to success ratio is constant over time. The only way to have more success is to fail more often."," "],
    ["What’s the smallest, fastest way you could test this?",""],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it.",""],
    ["You are the average of the 5 people with whom you spend the most time.",""],
    ["To get good at a new thing, copy something you admire.  Want to paint? Copy picasso. Want to code? Recreate google calendar. Want to learn web design? Copy a well designed web layout.  Want to learn piano? Play Mozart.",""],
    ["What is the work you can’t not do?",""],
    ["Compound effort moves mountains.",""],
    ["If you are not failing, you are not trying hard enough.",""],
    ["Seize the moment.",""],
    ["zest: have great enthusiasm and energy","grit: keep resolve when faced with unpleasant duty or task","self-control: mastering one’s impulses","social intelligence: get along well with others, and have them coordinate with you","gratitude: express thanks to those who have benefited you","optimism: expect good things","curiosity: explore the unknown with relish."],
    ["Stick to your plan. It works.",""],
    ["Never let your persistence and passion turn into stubbornness and ignorance.","-Anthony J. D'Angelo"],
    ["Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful people with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated failures. Persistence and determination alone are omnipotent.","-Calvin Coolidge"],
    ["Keep away from people who belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.","-Mark Twain"],
    ["Nobody is a natural. You work hard to get good and then work to get better. It's hard to stay on top.","-Paul Coffey, NHL Star"],
    ["Thankfully, perseverance is a good substitute for talent.","-Steve Martin"],
    ["The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of determination.","-Vince Lombardi"],
    ["Adhere to your purpose and you will soon feel as well as you ever did. On the contrary, if you falter, and give up, you will lose the power of keeping any resolution, and will regret it all your life.","-Abraham Lincoln"],
    ["Test fast, fail fast, adjust fast.","-Tom Peters"],
    ["Are you placing enough interesting, freakish, long shot, weirdo bets?","-Tom Peters"],
    ["Only those who risk going too far can possibly find out how far they can go.","-T.S. Eliot"],
    ["The secret to my success is that I bit off more than I could chew and chewed as fast as I could.","-Paul Hogan"],
    ["Life is being on the wire, everything else is just waiting.","-Karl Wallenda"],
    ["People will rise to meet seemingly insurmountable obstacles and challenges if they understand the worthiness of the personal sacrifices and effort. Supporting that understanding must be mentors who provide leadership; without both ingredients, a cause will go unrealized and a mission is likely to fail.","-Glenn R. Jones"],
    ["Focus. If you chase two rabbits, both will escape.",""],
    ["Here is the prime condition of success: Concentrate your energy, thought and capital exclusively upon the business in which you are engaged. Having begun on one line, resolve to fight it out on that line, to lead in it, adopt every improvement, have the best machinery, and know the most about it.","-Andrew Carnegie"],
    ["You are the average of the 5 people you spend the most time with.",""],
    ["On choices: what is most likely to change your life in a good way?","~"],
    ["DEGAF. Break social norms often, cultivate discomfort, stretch yourself. What you fear to do is what you must do.",""],
    ["If today was the last day of your life, how would you be spending it?",""],
    ["Smile. Rigt now--smile. Seriously. Isn't that better?",""],
    ["You've come a long way, baby.",""],
    ["Be bold, be brief, leave.",""],
    ["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.","-Rumi"],
    ["Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about","-Rumi"],
    //["",""],
];