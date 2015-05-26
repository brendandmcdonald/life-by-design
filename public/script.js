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
    ["Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.", 'Steve Jobs'],
    ['Excellence is not an act, but a habit', 'Aristotle'],
    ["Don't be a cog: Don't ignore your dreams, don't work too much, say what you think, cultivate friendships, and be happy.", "Paul Graham"],
    ["Bold knaves thrive without one grain of sense, but good men starve for want of impudence.","John Dryden"],
    ["I want to take my rightful share of life by force, I want to give lavishly, I want love to flow from my heart, to ripen and bear fruit. There are many horizons that must be visited, fruit that must be plucked, books read, and white pages in the scrolls of life to be inscribed with vivid sentences in a bold hand.","Tayeb Salih (A Season of Migration to the North)"],
    ["Begin, be bold, and venture to be wise.","Horace"],
    ["Make your own luck.",""],
    ["Fail fast and frequently. Your failure to success ratio is constant over time. The only way to have more success is to fail more often.",""],
    ["What’s the smallest, fastest way you could test this?",""],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it.",""],
    ["You are the average of the 5 people with whom you spend the most time.",""],
    ["To get good at a new thing, copy something you admire.  Want to paint? Copy picasso. Want to code? Recreate google calendar. Want to learn web design? Copy a well designed web layout.  Want to learn piano? Play Mozart.",""],
    ["What is the work you can’t not do?",""],
    ["You will become as small as your controlling desire, as great as you dominant aspiration.","Jack Allen"],
    ["Compound effort moves mountains.",""],
    ["If you are not failing, you are not trying hard enough.",""],
    ["Seize the moment.",""],
    ["The future will be built by opinionated technicians, not by theorists and generalists looking for a problem to solve.",""],
    ["zest: have great enthusiasm and energy","grit: keep resolve when faced with unpleasant duty or task","self-control: mastering one’s impulses","social intelligence: get along well with others, and have them coordinate with you","gratitude: express thanks to those who have benefited you","optimism: expect good things","curiosity: explore the unknown with relish."],
    ["Stick to your plan. It works.",""],
    ["Never let your persistence and passion turn into stubbornness and ignorance.","Anthony J. D'Angelo"],
    ["Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful people with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated failures. Persistence and determination alone are omnipotent.","Calvin Coolidge"],
    ["Keep away from people who belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.","Mark Twain"],
    ["Nobody is a natural. You work hard to get good and then work to get better. It's hard to stay on top.","Paul Coffey, NHL Star"],
    ["Thankfully, perseverance is a good substitute for talent.","Steve Martin"],
    ["The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of determination.","Vince Lombardi"],
    ["Adhere to your purpose and you will soon feel as well as you ever did. On the contrary, if you falter, and give up, you will lose the power of keeping any resolution, and will regret it all your life.","Abraham Lincoln"],
    ["Test fast, fail fast, adjust fast.","Tom Peters"],
    ["I don’t think change can be planned. I think it’s only something that can be recognized, after the fact.","Jad Abumrad, Founder of RadioLab"],
    ["Are you placing enough interesting, freakish, long shot, weirdo bets?","Tom Peters"],
    ["Only those who risk going too far can possibly find out how far they can go.","T.S. Eliot"],
    ["The secret to my success is that I bit off more than I could chew and chewed as fast as I could.","Paul Hogan"],
    ["Life is being on the wire, everything else is just waiting.","Karl Wallenda"],
    ["People will rise to meet seemingly insurmountable obstacles and challenges if they understand the worthiness of the personal sacrifices and effort. Supporting that understanding must be mentors who provide leadership; without both ingredients, a cause will go unrealized and a mission is likely to fail.","Glenn R. Jones"],
    ["Focus. If you chase two rabbits, both will escape.",""],
    ["Here is the prime condition of success: Concentrate your energy, thought and capital exclusively upon the business in which you are engaged. Having begun on one line, resolve to fight it out on that line, to lead in it, adopt every improvement, have the best machinery, and know the most about it.","Andrew Carnegie"],
    ["You are the average of the 5 people with whom you spend the most time.",""],
    ["On choices: what is most likely to change your life in a good way?","~"],
    ["DEGAF. Break social norms often, cultivate discomfort, stretch yourself. What you fear to do is what you must do.",""],
    ["If today was the last day of your life, how would you be spending it?",""],
    ["Smile. Rigt now smile. Seriously. Isn't that better?",""],
    ["We consistently get the order wrong when attriuting cause and effect. To learn, first teach. To change the way you think, first change the way you act. The stories we tell ourselves about cause and effect are often postrationalizations to ascribe rationality to a subconscious process. Faking a smile makes you happier. In other words, don't try to think your way into a new way of acting, just act your way into a new way of thinking.",""],
    ["You've come a long way, baby.",""],
    ["MAXIMIZE YOUR 20s: 1. Don’t have an identity crisis: get identity capital. Do something that supports where you might want to go. 2. Use your weak ties. Get outside your inner circle—get to your weak ties. 3. Choose who and what you want.","TED Talk on your 20s"],
    ["Be bold, be brief, be gone.",""],
    ["USABILITY", "Learnability: How easy is it for users to accomplish basic tasks the first time they encounter the interface?", "Efficiency: How quickly can users accomplish their tasks after they learn how to use the interface?", "Memorability: After a period of non-use, how long does it take users to reestablish proficiency?", "Errors: How many errors do users make, how severe are these errors, and how easy is it for users to recover from these errors?", "Satisfaction: How pleasant or satisfying is it to use the interface?",""],
    ["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.","Rumi"],
    ["Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about","Rumi"],
    ["Don't ask yourself what the world needs. Ask yourself what makes you come alive and then go do that. Because what the world needs is people who have come alive.","Dr. Howard Thurman"],
    ["All our dreams can come true if we have the courage to pursue them.","Walt Disney"],
    ["Champions keep playing until they get it right.","Billie Jean King"],
    ["I will go anywhere as long as it is forward.","David Livingston"],
    ["The best way out is always through.","Robert Frost"],
    ["Every strike brings me closer to the next home run.","Babe Ruth"],
    ["Are you doing something that will advance your goals?","What's the most fun way you could advance your goals right now?"],
    ["What's the best use of your next 3 minutes? Do it, now."],
    ["Don’t wait. The time will never be just right.","Napoleon Hill"],
    ["Everything you’ve ever wanted is on the other side of fear.","George Addair"],
    ["It is never too late to be what you might have been.","George Eliot"],
    ["There are no traffic jams along the extra mile.","Roger Staubach"],
    ["Do what you can, where you are, with what you have.","Teddy Roosevelt"],
    ["If there is no struggle, there is no progress.","Frederick Douglass"],
    ["Your imagination is your preview of life’s coming attractions.","Albert Einstein"],
    ["Even if you fall on your face, you’re still moving forward.","Victor Kiam"],
    ["There are no short cuts to any place worth going.","Beverly Sills"],
    ["Very often a change of self is needed more than a change of scene.","Arthur Christopher Benson"],
    ["Action is the foundational key to all success","Pablo Picasso"],
    ["I’m a slow walker, but I never walk back.","Abraham Lincoln"],
    ["Life is like riding a bicycle. To keep your balance you must keep moving.","Albert Einstein"],
    ["Change your thoughts and you change your world.","Norman Vincent Peale"],
    ["Just keep going. Everybody gets better if they keep at it.","Ted Williams"],
    ["Choosing a goal and sticking to it changes everything.","Scott Reed"],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it:","Surround yourself with passionate people doing what you want to do.
"],
	["If you’re not making progress, narrow your focus. How small can you make an increment of progress?"],
    ["The creation of a thousand forests is in one acorn.","Ralph Waldo Emerson"],
    ["Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.","Oprah Winfrey"],
    ["The most valuable thing you can make is a mistake – you can’t learn anything from being perfect.","Adam Osborne"],
    ["My best friend is the one who brings out the best in me.","Henry Ford"],
    ["Tough times never last, but tough people do.","Dr. Robert Schuller"],
    ["There is only one success: to be able to spend your life in your own way.","Christopher Morley"],
    ["The best time to plant a tree is twenty years ago. The second best time is now.","Chinese Proverb"],
    ["The best dreams happen when you’re awake.","Cherie Gilderbloom"],
    ["Once you choose hope, anything’s possible.","Christopher Reeve"],
    ["Believe and act as if it were impossible to fail.","Charles Kettering"],
    ["Don’t count the days, make the days count.","Muhammad Ali"],
    ["It wasn’t raining when Noah built the ark.","Howard Ruff"],
    ["The man who moves a mountain begins by carrying away small stones.","Confuscious"],
    ["The difference between ordinary and extraordinary is that little extra.","Jimmy Johnson"],
    ["Make each day your masterpiece.","John Wooden"],
    ["Keep your face to the sunshine and you can never see the shadow.","Helen Keller"],
    ["Dream big and dare to fail.","Narman Vaughan"],
    ["Be yourself. Everyone else is taken.","Oscar Wilde"],
    ["We have more control over our actions than we do on our thoughts and feelings.","Expect to act one way and feel another all the time. The disconnect between how you act and feel may diminish over time.", "Focus on your actions, not your emotions, feelings or thoughts. You may acknowledge those things but it is action repeated that will advance your mission and purpose. 
"],
    ["Art is a lie that helps us see the truth.","Picasso"],
    ["No goals for more than 90 days.",""],
    ["Do not become a seeker of success. Become a person of value.", "Albert Einstein"],
    ["Seize the day.","Horace"],
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
    ["Whatever you are, be a good one.","Abraham Lincoln"],
    ["You yourself, as much as anybody in the entire universe, deserve your love and affection.","Buddha"],
    ["Time you enjoy wasting is not wasted time.","Marthe Troly-Curtin"],
    ["If you are going to eat shit, don’t nibble.","Ben Horowitz"],
];

//display advice onload
$(document).ready(function() {
    getAdvice();
});
