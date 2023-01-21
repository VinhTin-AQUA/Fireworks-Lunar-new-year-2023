var _seconds = 55;

//---- -----------------------------

window.onload = function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    var clock = document.querySelector('.clock');
    const containerWidth = clock.offsetWidth;
    const containerHeight = clock.offsetHeight;
    
    var percentWidth = 50 - ((containerWidth/2)/windowWidth)*100;
    var percentHeight = (50 - ((containerHeight/2)/windowHeight)*100)*windowHeight/100;
    
    clock.style.left = percentWidth + '%';
    clock.style.top = percentHeight + 'px';
}

window.onresize = function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    var clock = document.querySelector('.clock');
    const containerWidth = clock.offsetWidth;
    const containerHeight = clock.offsetHeight;
    
    var percentWidth = 50 - ((containerWidth/2)/windowWidth)*100;
    var percentHeight = (50 - ((containerHeight/2)/windowHeight)*100)*windowHeight/100;
    
    clock.style.left = percentWidth + '%';
    clock.style.top = percentHeight + 'px';
}

function sleep(ms){
    return new Promise(function(resole){
        setTimeout(resole,ms);
    });
}

function findKeyframesRule(rule)
    {
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; ++i) {
            
            // loop through all the rules
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                
                // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
                if ((ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE || ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) && ss[i].cssRules[j].name == rule)
                    return ss[i].cssRules[j];
            }
        }
        
        // rule not found
        return null;
    }

function showTime(pass=false,seconds='55', minutes='59', hours='23') {
    var hourElement = document.querySelector('#hour');
    var minutesElement = document.querySelector('#minutes');
    var secondsElement = document.querySelector('#seconds')

    var hourShadowElement = document.querySelector('#hour-shadow');
    var minutesShadowElement = document.querySelector('#minutes-shadow');
    var secondsShadowElement = document.querySelector('#seconds-shadow');

    if(pass == false) {
        secondsElement.innerHTML = seconds;
        secondsShadowElement.innerHTML = seconds;
    } else if (pass == true) {
        hourElement.innerHTML = '00';
        minutesElement.innerHTML = '00';
        secondsElement.innerHTML = '00';

        secondsShadowElement.innerHTML = '00';
        minutesShadowElement.innerHTML = '00';
        hourShadowElement.innerHTML = '00';
    }
}

function showFireWork() {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    var keyFrames = findKeyframesRule('fire');
     
    if (keyFrames !== null) {
        // create new 0% and 100% rules with 
        keyFrames.appendRule("0% { top: " + (windowHeight-200) + "px;transform: translateY(" + windowHeight/2 + "px);}");
        keyFrames.appendRule("40% { transform: translateY(" + windowHeight/2 + "px); border-top: 100px solid rgb(255, 255, 255);} ");
        keyFrames.appendRule("100% { transform: translateY(" + windowHeight/2.5 + "px); border-top: 5px solid rgb(255, 255, 255); } ");
    }
    var firework = document.querySelector('.firework');
    firework.style.display = 'block';

    const fireworkStyles = window.getComputedStyle(firework);
    var fireworkWidth = firework.offsetWidth;
    // var fireworkHeight = firework.offsetHeight;
    var widthPercent = 50 - (fireworkWidth/2)/windowWidth*100
    
    // firework.style.top = windowHeight + 'px';
    firework.style.left = widthPercent + '%';
    firework.style.animationName = 'fire'
    firework.style.animationDuration = '1.5s';
    firework.style.animationTimingFunction = 'ease-out';
    firework.style.animationFillMode = 'forwards';
    firework.style.animationIterationCount = '1';

    
}

function hideFirework() {
    var fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        firework.style.display = 'none';
        firework.style.opacity = '0.2';
    })
}

function showExploision() {
    var exploisionContainer = document.querySelector('.exploisions');
    exploisionContainer.style.display = 'block';
    var sad = document.querySelector('#sad');
    sad.style.display = 'block';
    sleep(3000);

    reset_aniamtion('exploision');
}

function reset_aniamtion(className) {
    var els = document.querySelectorAll('.' + className);
    els.forEach(el => {
        el.classList.remove(className);
        void el.offsetWidth;
    })
    els.forEach(el => {
        el.classList.add(className);
    })
}

function showFirework_X2() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    var leftPositions = [1,2,3,4,5,6,7];
    var distance = windowWidth/8;
    var keyFrames = findKeyframesRule('fire');
    // fireworks
    var fireworks = document.querySelectorAll('.firework');
   
    if (keyFrames !== null) {
        // create new 0% and 100% rules with 
        keyFrames.appendRule("0% { top: " + (windowHeight-300) + "px;transform: translateY(" + windowHeight/2 + "px);}");
        keyFrames.appendRule("40% { transform: translateY(" + windowHeight/2 + "px); border-top: 100px solid white;} ");
        keyFrames.appendRule("100% { transform: translateY(" + windowHeight/2.5 + "px); border-top: 5px solid yellow;} ");
    }
    leftPositions[0] = distance*1;
    leftPositions[1] = distance*2;
    leftPositions[2] = distance*3;
    leftPositions[3] = distance*4;
    leftPositions[4] = distance*5;
    leftPositions[5] = distance*6;
    leftPositions[6] = distance*7;

    for(var i = 0; i < 7; i++) {
        fireworks[i].style.display = 'block';
        fireworks[i].style.opacity = '1';
        fireworks[i].style.left = leftPositions[i] + 'px';
        fireworks[i].style.animationName = 'fire'
        fireworks[i].style.animationDuration = '3s';
        fireworks[i].style.animationTimingFunction = 'ease-out';
        fireworks[i].style.animationFillMode = 'forwards';
        fireworks[i].style.animationIterationCount = '1';
    }
    reset_aniamtion('firework');
}

function showExploision_x2() {
    var windowWidth = document.body.offsetWidth;
    var exploisions = document.querySelectorAll('.exploision');
    var distance = windowWidth / 21;
    var leftPositions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

    for(var i = 0; i < 21; i++) {
        leftPositions[i] = distance*(i+1);
    }

    exploisions[10].style.top = '30%';
    exploisions[10].style.left = leftPositions[i] + 'px';
    exploisions[10].style.animationDelay = '0s'; 
    exploisions[10].style.animationDuration = '5s';

    for(var i = 0; i < 10; i++) {
        exploisions[i].style.top = '30%';
        exploisions[i].style.left = leftPositions[i] + 'px';
        exploisions[i].style.animationDuration = '5s';
        exploisions[i].style.animationDelay = i/10 + 's'; 
    }

    for(var i = 11; i < 21; i++) {
        exploisions[i].style.top = '30%';
        exploisions[i].style.left = leftPositions[i] + 'px';
        exploisions[i].style.animationDuration = '5s';
        exploisions[i].style.animationDelay = Math.abs(10-i)/10 + 's'; 
    }
    reset_aniamtion('exploision');
}

function showCat() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var catElement = document.querySelector('.cat');
    var catWidth = catElement.offsetWidth;
    var catHeight = catElement.offsetHeight;
    var percentWidth = 50 - ((catWidth/2)/windowWidth)*100;
    var percentHeight = 40 - ((catHeight/2)/windowHeight)*100;
    catElement.style.left = percentWidth + '%';
    catElement.style.top = percentHeight + '%';

    catElement.style.animationName = 'showCat';
    catElement.style.animationDuration = '5s';
    catElement.style.animationIterationCount = '1';
    catElement.style.animationFillMode = 'forwards';
}

function showText() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var textElement = document.querySelector('.text');
    var textWidth = textElement.offsetWidth;
    var textHeight = textElement.offsetHeight;
    var percentWidth = 50 - ((textWidth/2)/windowWidth)*100;
    var percentHeight = 40 - ((textHeight/2)/windowHeight)*100;
    textElement.style.left = percentWidth + '%';
    textElement.style.top = percentHeight + 20 + '%';

    textElement.style.animationName = 'showCat';
    textElement.style.animationDuration = '5s';
    textElement.style.animationIterationCount = '1';
    textElement.style.animationFillMode = 'forwards';
}

function main() {
    var clock = document.querySelector('.clock');
    sleep(100)
        .then(function(){
            showTime(false,_seconds.toString());
            _seconds++;
            return sleep(1000);
        })
        .then(function(){
            showTime(false,_seconds.toString());
            _seconds++;
            return sleep(1000);
        })
        .then(function(){
            showTime(false,_seconds.toString());
            _seconds++;
            return sleep(1000);
        })
        .then(function(){
            showTime(false,_seconds.toString());
            _seconds++;
            return sleep(1000);
        })
        .then(function(){
            showTime(false,_seconds.toString());
            _seconds++;
            return sleep(1000);
        })
        .then(function(){
            showTime(true,_seconds.toString());
            _seconds++;
            return sleep(800);
        })
        .then(function(){
            clock.style.display = 'none';
            return sleep(400);
        }) 
        .then(function(){
            showFireWork();
            return sleep(1500);
        })
        .then(function(){
            hideFirework();
            return sleep(300);
        })
        .then(function(){
            showExploision();
            return sleep(4000);
        })
        .then(function(){
            showFirework_X2();
            return sleep(3000);
        })
        .then(function(){
            hideFirework();
            return sleep(300);
        })
        .then(function(){
            showExploision_x2();
            return sleep(300);
        })
        .then(function() {
            showCat();
            showText();
        })
}

//----------------------------------------------------------------
main();
// showFireWork();