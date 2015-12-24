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
    ["Anyone can make progress when the going is easy. Therefore, it is the bad days, where progress is hard, motivation is low, and energy is scarce that separate the doer from the dreamer and the forceful from the frustrated", "Notes from Chiang Mai"],
    ["I want to take my rightful share of life by force, I want to give lavishly, I want love to flow from my heart, to ripen and bear fruit. There are many horizons that must be visited, fruit that must be plucked, books read, and white pages in the scrolls of life to be inscribed with vivid sentences in a bold hand.","Tayeb Salih (A Season of Migration to the North)"],
    ["Begin, be bold, and venture to be wise.","Horace"],
    ["Make your own luck.",""],
    ["Fail fast and frequently. Your failure to success ratio is constant over time. The only way to have more success is to fail more often.",""],
    ["What’s the smallest, fastest way you could test this?",""],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it.",""],
    ["You are the average of the 5 people with whom you spend the most time.",""],
    ["To master a new skill, copy the masters. Want to paint? Copy Degas. Want to code? Clone Facebook. Want to learn product design? Clone Tinder.","Notes from California"],
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
    ["Be useful.","Scott Adams"],
    ["The secret to all problems? Be useful.","Scott Adams"],
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
    ["DEGAF. Break social norms often, cultivate discomfort, stretch yourself. What you fear most is what you must do immediately.",""],
    ["If today was the last day of your life, how would you be spending it?",""],
    ["Smile. Rigt now smile. Seriously. Isn't that better?",""],
    ["We consistently get the order wrong when attriuting cause and effect. To learn, first teach. To change the way you think, first change the way you act. The stories we tell ourselves about cause and effect are often postrationalizations to ascribe rationality to a subconscious process. Faking a smile makes you happier. In other words, don't try to think your way into a new way of acting, just act your way into a new way of thinking.",""],
    ["You've come a long way, baby.",""],
    ["MAXIMIZE YOUR 20s:","1. Don’t have an identity crisis: get identity capital. Do something that supports where you might want to go.","2. Use your weak ties. Get outside your inner circle—get to your weak ties.","3. Choose who and what you want.","TED Talk on your 20s"],
    ["Be bold, be brief, be gone.",""],
    ["The miracle is this: the more we share the more we have.","Leonard Nimoy"],
    ["Make your peace with the fact that saying 'no' often requires trading popularity for respect.","Greg McKeown, Essentialism"],
    ["The first principle is that you must not fool yourself and you are the easiest person to fool.","Richard P. Feynman"],
    ["Life favors the specific ask and punishes the vague wish.","Tim Ferriss"],
    ["USABILITY", "Learnability: How easy is it for users to accomplish basic tasks the first time they encounter the interface?", "Efficiency: How quickly can users accomplish their tasks after they learn how to use the interface?", "Memorability: After a period of non-use, how long does it take users to reestablish proficiency?", "Errors: How many errors do users make, how severe are these errors, and how easy is it for users to recover from these errors?", "Satisfaction: How pleasant or satisfying is it to use the interface?",""],
    ["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.","Rumi"],
    ["If you want to find the perfect partner, make a list of all the characteristics he or she will have. Rank them. And then become them yourself.",""],
    ["Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about","Rumi"],
    ["Don't ask yourself what the world needs. Ask yourself what makes you come alive and then go do that. Because what the world needs is people who have come alive.","Dr. Howard Thurman"],
    ["All our dreams can come true if we have the courage to pursue them.","Walt Disney"],
    ["Champions keep playing until they get it right.","Billie Jean King"],
    ["I will go anywhere as long as it is forward.","David Livingston"],
    ["The best way out is always through.","Robert Frost"],
    ["Keep looking forward.","TJ Rohlf"],
    ["Every strike brings me closer to the next home run.","Babe Ruth"],
    ["Is this the most important thing you could be doing?",""],
    ["What's the best use of your next 3 minutes? Do it, now."],
    ["Don’t wait. The time will never be just right.","Napoleon Hill"],
    ["Everything you’ve ever wanted is on the other side of fear.","George Addair"],
    ["It is never too late to be what you might have been.","George Eliot"],
    ["There are no traffic jams along the extra mile.","Roger Staubach"],
    ["Do what you can, where you are, with what you have.","Teddy Roosevelt"],
    ["If there is no struggle, there is no progress.","Frederick Douglass"],
    ["Your imagination is your preview of life’s coming attractions.","Albert Einstein"],
    ["Even if you fall on your face, you’re still moving forward.","Victor Kiam"],
    ["Very often a change of self is needed more than a change of scene.","Arthur Christopher Benson"],
    ["Action is the foundational key to all success","Pablo Picasso"],
    ["I’m a slow walker, but I never walk back.","Abraham Lincoln"],
    ["Life is like riding a bicycle. To keep your balance you must keep moving.","Albert Einstein"],
    ["Change your thoughts and you change your world.","Norman Vincent Peale"],
    ["Just keep going. Everybody gets better if they keep at it.","Ted Williams"],
    ["Nothing diminishes anxiety faster than action.","Walter Anderson"],
    ["Choosing a goal and sticking to it changes everything.","Scott Reed"],
    ["Who or what are you resisting in life right now?","Headspace Meditation Prompt"],
    ["The fastest way to do what you think can’t be done is to hang out with those who are already doing it:","Surround yourself with passionate people doing what you want to do."],
	["If you’re not making progress, narrow your focus. How small can you make an increment of progress?"],
    ["The creation of a thousand forests is in one acorn.","Ralph Waldo Emerson"],
    ["Say 10 things that you are thankful for",""],
    ["How could you use the next 10 minutes to help someone else? Great, go do it.","Notes from Chiang Mai"]
    ["Be in love with yr life","Jack Kerouac"],
    ["Something that you feel will find its own form","Jack Kerouac"],
    ["Remove literary, grammatical and syntactical inhibition","Jack Kerouac"],
    ["Accept loss forever","Jack Kerouac"],
    ["Struggle to sketch the flow that already exists intact in mind","Jack Kerouac"],
    ["Composing wild, undisciplined, pure, coming in from under, crazier the better","Jack Kerouac"],
    ["Write what you want bottomless from bottom of the mind","Jack Kerouac"],
    ["I've got more energy now than when I was younger because I know exactly what I want to do.","George Balanchine"],
    ["If you hear a voice saying, 'I am not a painter,' then, by all means, paint... and that voice will be silenced.","Vincent Van Gogh"],
    ["TODAY GIVE ALL THAT YOU HAVE, FOR WHAT YOU KEEP INSIDE YOU LOSE FOREVER","Owen Marecic"],
    ["The only reason they come to see me is that I know that life is great--and the know that I know it.","Clark Gable"],
    ["There is something better than heaven, and it is not hell. It is the eternal, meaningless, creative mind. It cannot stop for time or space or even joy. It is so brilliant it will shake what's left of you into the depths of all-consuming ecstasy.","Byron Katie"],
    ["Use short words, short sentences and short paragraphs.","David Ogilvy"],
    ["Before you send your letter or your memo, make sure it is crystal clear what you want the recipient to do.","David Ogilvy"],
    ["Never send a letter or a memo on the day you write it. Read it aloud the next morning — and then edit it.","David Ogilvy"],
    ["Never write more than two pages on any subject.","David Ogilvy"],
    ["Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.","Oprah Winfrey"],
    ["My best friend is the one who brings out the best in me.","Henry Ford"],
    ["Tough times never last, but tough people do.","Dr. Robert Schuller"],
    ["There is only one success: to be able to spend your life in your own way.","Christopher Morley"],
    ["The best time to plant a tree is twenty years ago. The second best time is now.","Chinese Proverb"],
    ["The best dreams happen when you’re awake.","Cherie Gilderbloom"],
    ["Once you choose hope, anything’s possible.","Christopher Reeve"],
    ["Believe and act as if it were impossible to fail.","Charles Kettering"],
    ["Don’t count the days; make the days count.","Muhammad Ali"],
    ["It wasn’t raining when Noah built the ark.","Howard Ruff"],
    ["The man who moves a mountain begins by carrying away small stones.","Confuscious"],
    ["The difference between ordinary and extraordinary is that little extra.","Jimmy Johnson"],
    ["Make each day your masterpiece.","John Wooden"],
    ["Keep your face to the sunshine and you can never see the shadow.","Helen Keller"],
    ["Dream big and dare to fail.","Narman Vaughan"],
    ["Be yourself. Everyone else is taken.","Oscar Wilde"],
    ["We have more control over our actions than we do on our thoughts and feelings.","Expect to act one way and feel another all the time. The disconnect between how you act and feel may diminish over time.", "Focus on your actions, not your emotions, feelings or thoughts. You may acknowledge those things but it is action repeated that will advance your mission and purpose."],
    ["Art is a lie that helps us see the truth.","Picasso"],
    ["No goals for more than 90 days.","Notes from London"],
    ["Do not become a seeker of success. Become a person of value.", "Albert Einstein"],
    ["Seize the day.","Horace"],
    ["I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near.","Margaret Thatcher"],
	["You can't get there by bus, only by hard work and risk and by not quite knowing what you're doing. What you'll discover will be wonderful. What you'll discover will be yourself.","Alan Alda"],
	["I know you've heard it a thousand times before. But it's true, hard work pays off. If you want to be good, you have to practice, practice, practice. If you don't love something, then don't do it.","Ray Bradbury"],
	["Plans are only good intentions unless they immediately degenerate into hard work.","Peter Drucker"],
	["Let me tell you the secret that has led me to my goals: my strength lies solely in my tenacity."," Louis Pasteur"],
	["We live in the kind of society where, in almost all cases, hard work is rewarded.","Neil deGrasse Tyson"],
	["I can say the willingness to get dirty has always defined us as an nation, and it's a hallmark of hard work and a hallmark of fun, and dirt is not the enemy.","Mike Rowe"],
	["If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted, or Beethoven played music, or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, here lived a great street sweeper who did his job well."," Martin Luther King, Jr"],
	["Education, actual learning, it is hard work. It's very personal. Your parents don't teach you anything. Your teachers don't teach you anything. The government doesn't teach you anything. You read it. You don't understand it; you read it again. You break a pencil and read it again.","Dean Kamen"],
	["It's hard work making movies. It's like being a doctor: you work long hours, very hard hours, and it's emotional, tense work. If you don't really love it, then it ain't worth it.","George Lucas"],
	["Perseverance is the hard work you do after you get tired of doing the hard work you already did.","Newt Gingrich"],
	["If people knew how hard I worked to achieve my mastery, it wouldn't seem so wonderful after all."," Michelangelo"],
	["Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it'll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.","Kevin Hart"],
	["I think the thing about that was I was always willing to work; I was not the fastest or biggest player but I was determined to be the best football player I could be on the football field and I think I was able to accomplish that through hard work.","Jerry Rice"],
	["There are no secrets to success. It is the result of preparation, hard work, and learning from failure.","Colin Powell"],
	["I'm a designer, and I work very hard at that. People sometimes want to put down fashion by saying it's frivolous or superficial, but it's not that way at all. It's actually very hard work.","Donatella Versace"],
	["I am a greater believer in luck, and I find the harder I work the more I have of it"," Thomas Jefferson"],
	["Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.","Stephen King"],
	["Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work and realizing what is opportunity and what isn't.","Lucille Ball"],
	["The fight is won or lost far away from witnesses, behind the lines, in the gym, and out there on the road, long before I dance under those lights.","Muhammad Ali"],
	["It's hard to beat a person who never gives up."," Babe Ruth"],
	["Good things may come to those who wait, but only the things left by those who hustle.",""],
	["Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that's the difference.","Lou Holt"],
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
    ["Whatever you are, be a good one.","Abraham Lincoln"],
    ["You yourself, as much as anybody in the entire universe, deserve your love and affection.","Buddha"],
    ["Time you enjoy wasting is not wasted time.","Marthe Troly-Curtin"],
    ["Now or not now. Those are the two ages people have, really.","Steve Chandler"],
    ["The breakdown of language foretells the breakdown of results. Always.","Steve Chandler"],
    ["Is the act I'm about to do going to raise or lower my self-esteem? Is the day I am planning out going to end up raising my self-esteem or lowering it?","Steve Chandler"],
    ["Most dysfunctional people are only trying to stay safe. Most of your own lack of success comes from an exaggerated inner compulsion to feel safe and sound.","Steve Chandler"],
    ["Do the thing and you shall have the power.","Ralph Waldo Emerson"],
    ["Use the time of a total stranger in such a way that he or she will not feel the time was wasted.","Kurt Vonnegut"],
    ["Every sentence must do one of two things — reveal character or advance the action.","Kurt Vonnegut"],
    ["It is certainly not then--not in dreams--but when one is wide awake, at moments of robust joy and achievement, on the highest terrace of consciousness, that mortality has a chance to peer beyond its own limits.","Vladimir Nabokov"],
    ["In my workday, the feeling question [what do I want to do?] is the worst question I can ask myself. The best questions are: 'What do I want to produce?' and 'What structure would guarantee that?'","Steve Chandler"],
    ["I've only got one thing to do! How liberating. It's the thing I'm doing right now.","Steve Chandler"],
    ["With a powerful enough purpose, time gets managed by itself.","Steve Chandler"],
    ["Never let anyone come to you without coming away better and happier","Mother Teresa"],
    ["Great things are not done by impulse, but by a series of small things brought together.","Vincent van Gogh"],
    ["Don't change other people. Be the change you wish to see in other people.","Gandhi"],
    ["We waste time looking for the perfect lover instead of creating the perfect love.","Tom Robbins"],
    ["To really live now there are two things I want to phase out of my life forever: (1) Resentments about the past and (2) Worries about the future.","Steve Chandler"],
    ["Capture each negative thought or image on paper and work it. Challenge it. Go to war with it.","Steve Chandler"],
    ["Ask yourself if what you are about to do is loving, creative and useful to your life.","If the answer is yes, move forward.","If the answer is no, change course.","Steve Chandler"],
    ["My success will come once I'm ready--truly, always ready--to use any 15 minutes that shows up to serve somebody with.","Steve Chandler"],
    ["If you're suffering, it's because you're forgetting who you are.", "Buddha"]
    ["The key to making progress in the programming exercise was reducing scope to something intimate, defining success clearly for the next iteration, and keeping a good idea of how the small successes built towards the overarching success. I can apply this same approach with my sketch course.","Notes from London"],
    ["If you find yourself constantly trying to prove your worth to someone, you have already forgotten your value.","Unknown"],
    ["It’s not about being right. It’s about making the right things happen.","Joulie Zhuo"],
    ["The master has failed more times than the beginner has even tried.","Stephen McCranie"],
    ["You can’t make each night a referendum on whether or not you should be doing it. You just have to do a bunch.","BJ Novak"],
    ["Make every decision a binary: hell yes or no. In decisions big (what to do for the next few months?) and small (should I send this text?).",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],

];

//display advice onload
$(document).ready(function() {
    getAdvice();
});
