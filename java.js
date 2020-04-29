let soundFX = document.querySelector("#soundFX");
let soundFX2 = document.querySelector("#soundFX2");
let bgmusic = document.querySelector("#soundFX3");
let soundFX4 = document.querySelector("#soundFX4");
let mute = document.querySelector("#mute_container");
let missSound = document.querySelector("#soundFX5");
let points = 0;
let life = 3;
let timeLeft = 60;

window.addEventListener("load", ustart);

function startShrink() {
    console.log("startShrink");

    document.querySelector("#time_sprite").classList.add("shrink");
    document.querySelector("#time_sprite").addEventListener("animationend", start);

}



function ustart() {
    console.log("user_start");
    document.querySelector("#ustart").addEventListener("click", start);
    mute.addEventListener("click", setMute);
}




function start() {

    console.log("start");
    falling();

    playMusic();

    //start
    document.querySelector("#ustart").classList.add("trans");
    bgmusic.addEventListener("ended", playMusic);

    //time
    startTimer();
    startShrink();
}

function startTimer() {
    if (timeLeft == 0) {
        gameOver();
    } else {
        setTimeout(printTime, 1000);
    }
}

function printTime() {
    if (timeLeft > 0) {
        timeLeft--;
        console.log("Time: " + timeLeft);

        document.querySelector("#time_board").textContent = timeLeft;
        startTimer();
    } else {
        gameOver();
    }
}

function playMusic() {
    console.log("playmusic");
    bgmusic.play();

    document.querySelector("#game").classList.remove("blur");
    //miss sound
    document.querySelector("#game").addEventListener("click", missSoundPlay);
}

function setMute() {
    if (bgmusic.muted == false) {
        bgmusic.muted = true;
        mute.textContent = "Unmute";
    } else {
        bgmusic.muted = false;
        mute.textContent = "Mute";
    }
}


function missSoundPlay() {
    missSound.play();
}

/*Falling effect*/
function falling() {
    console.log("falling");

    //gamerestart
    document.querySelector("#gameover").style.opacity = 0;
    document.querySelector("#game").classList.remove("blur");

    document.querySelector("#star").classList.add("falling");
    document.querySelector("#star").classList.add("speed1");
    document.querySelector("#star").addEventListener("click", clickStar);

    document.querySelector("#bstar").classList.add("falling");
    document.querySelector("#bstar").classList.add("speed2");
    document.querySelector("#bstar").addEventListener("click", Bstar);

    document.querySelector("#time").classList.add("falling");
    document.querySelector("#time").classList.add("speed3");
    document.querySelector("#time").addEventListener("click", clickTime);


    document.querySelector("#circle").classList.add("falling");
    document.querySelector("#circle").classList.add("speed4");
    document.querySelector("#circle").addEventListener("click", circle);

    document.querySelector("#cross").classList.add("falling");
    document.querySelector("#cross").classList.add("speed5");
    document.querySelector("#cross").addEventListener("click", cross);

    document.querySelector("#star1").classList.add("falling");
    document.querySelector("#star1").classList.add("speed6");
    document.querySelector("#star1").addEventListener("click", star1);

    document.querySelector("#heart").classList.add("falling");
    document.querySelector("#heart").classList.add("speed7");
    document.querySelector("#heart").addEventListener("click", heart);

    document.querySelector("#rect").classList.add("falling");
    document.querySelector("#rect").classList.add("speed8");
    document.querySelector("#rect").addEventListener("click", rect);
}

function clickStar(e) {
    console.log("clickStar");

    document.querySelector("#star").removeEventListener("click", clickStar);
    document.querySelector("#star").classList.add("pause");
    document.querySelector("#star .star").classList.add("zoom");
    document.querySelector("#star").addEventListener("animationend", restartClickStar);

    //points add

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");

    document.querySelector("#score_board").textContent = "points " + points;
    e.stopPropagation();
}

function restartClickStar() {
    console.log("restartClickStar");
    soundFX4.play();
    document.querySelector("#star").classList.remove("falling");
    document.querySelector("#star").offsetHeight;
    document.querySelector("#star").classList.add("falling");
    document.querySelector("#star").removeEventListener("animationend", restartClickStar);
    document.querySelector("#star").classList.remove("pause");
    document.querySelector("#star .star").classList.remove("zoom");
    document.querySelector("#star").addEventListener("click", clickStar);

}

function Bstar(e) {
    console.log("Bstar");
    soundFX4.play();
    document.querySelector("#bstar").removeEventListener("click", Bstar);
    document.querySelector("#bstar").classList.add("pause");
    document.querySelector("#bstar .bstar").classList.add("zoom");
    document.querySelector("#bstar").addEventListener("animationend", cbRestart);
    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");

    document.querySelector("#score_board").textContent = "points " + points;
    e.stopPropagation();

}

function cbRestart() {
    console.log("cbRestart");
    document.querySelector("#bstar").classList.remove("falling");
    document.querySelector("#bstar").offsetHeight;
    document.querySelector("#bstar").classList.add("falling");
    document.querySelector("#bstar").removeEventListener("animationend", cbRestart);
    document.querySelector("#bstar").classList.remove("pause");
    document.querySelector("#bstar .bstar").classList.remove("zoom");
    document.querySelector("#bstar").addEventListener("click", Bstar);

}


function clickTime(e) {
    console.log("clickTime");
    soundFX4.play();
    document.querySelector("#time").removeEventListener("click", clickTime);

    document.querySelector("#time").classList.add("pause");
    document.querySelector("#time .time").classList.add("zoom");
    document.querySelector("#time").addEventListener("animationend", restartClickTime);

    console.log("get point");
    console.log(points);

    points++;
    console.log("you have " + points + " points");

    document.querySelector("#score_board").textContent = "points " + points;
    e.stopPropagation();
}

function restartClickTime() {
    console.log("restartClickTime");
    document.querySelector("#time").removeEventListener("animationend", restartClickTime);
    document.querySelector("#time").classList.remove("falling");
    document.querySelector("#time .time").classList.remove("zoom");
    document.querySelector("#time").offsetHeight;
    document.querySelector("#time").classList.add("falling");
    document.querySelector("#time").classList.remove("pause");

    document.querySelector("#time").addEventListener("click", clickTime);
}

function circle(e) {

    console.log("get point");
    console.log(points);
    soundFX4.play();
    points++;
    console.log("you have " + points + " points");

    document.querySelector("#score_board").textContent = "points " + points;
    console.log("circle");
    document.querySelector("#circle").removeEventListener("click", circle);
    document.querySelector("#circle").classList.add("pause");
    document.querySelector("#circle .circle").classList.add("zoom");
    document.querySelector("#circle").addEventListener("animationend", cRestart);
    e.stopPropagation();
}

function cRestart() {
    console.log("cRestart");
    document.querySelector("#circle").removeEventListener("animationend", cRestart);
    document.querySelector("#circle").classList.remove("pause");
    document.querySelector("#circle .circle").classList.remove("zoom");

    document.querySelector("#circle").classList.remove("falling");
    document.querySelector("#circle").offsetHeight;
    document.querySelector("#circle").classList.add("falling");
    document.querySelector("#circle").addEventListener("click", circle);
}


function cross(e) {
    console.log("cross bad things");

    document.querySelector("#cross").removeEventListener("click", cross);
    document.querySelector("#cross").classList.add("pause");
    document.querySelector("#cross .cross").classList.add("zoom");
    document.querySelector("#screen").classList.add("shake");

    //lose life

    life--;

    // gameover
    if (life >= 1) {
        soundFX.play();
        document.querySelector("#cross").addEventListener("animationend", crRestart);
    } else {
        gameOver();
    }

    document.querySelector("#heart_" + life).classList.add("broken_heart");

    console.log("you have " + life + " lives left");
    e.stopPropagation();
}

function crRestart() {
    console.log("crRestart");

    document.querySelector("#cross").removeEventListener("animationend", crRestart);
    document.querySelector("#cross").classList.remove("pause");
    document.querySelector("#cross .cross").classList.remove("zoom");

    document.querySelector("#cross").classList.remove("falling");
    document.querySelector("#cross").offsetHeight;
    document.querySelector("#cross").classList.add("falling");
    document.querySelector("#cross").addEventListener("click", cross);

}

function star1(e) {
    console.log("star1");

    document.querySelector("#star1").removeEventListener("click", star1);
    document.querySelector("#star1").classList.add("pause");
    document.querySelector("#star1 .star1").classList.add("zoom");
    document.querySelector("#star1").addEventListener("animationend", s1Restart);
    console.log("get point");
    console.log(points);
    soundFX4.play();

    points++;
    console.log("you have " + points + " points");

    document.querySelector("#score_board").textContent = "points " + points;
    e.stopPropagation();
}

function s1Restart() {
    console.log("s1Restart");
    document.querySelector("#star1").classList.remove("falling");
    document.querySelector("#star1").offsetHeight;
    document.querySelector("#star1").classList.add("falling");
    document.querySelector("#star1").removeEventListener("animationend", restartClickStar);
    document.querySelector("#star1").classList.remove("pause");
    document.querySelector("#star1 .star1").classList.remove("zoom");
    document.querySelector("#star1").addEventListener("click", star1);

}

function heart(e) {
    console.log("heart");

    document.querySelector("#heart").removeEventListener("click", heart);
    document.querySelector("#heart").classList.add("pause");
    document.querySelector("#heart .heart").classList.add("zoom");
    document.querySelector("#heart").addEventListener("animationend", hRestart);

    //addd life
    life++;
    document.querySelector("#heart_" + life).style.opacity = 100;

    console.log("you have " + life + " lives left");
    e.stopPropagation();
}

function hRestart() {
    console.log("hRestart");
    document.querySelector("#heart").classList.remove("falling");
    document.querySelector("#heart").offsetHeight;
    document.querySelector("#heart").classList.add("falling");
    document.querySelector("#heart").removeEventListener("animationend", hRestart);
    document.querySelector("#heart").classList.remove("pause");
    document.querySelector("#heart .heart").classList.remove("zoom");
    document.querySelector("#heart").addEventListener("click", heart);

}

function rect(e) {
    console.log("rect");
    soundFX4.play();

    document.querySelector("#rect").removeEventListener("click", rect);
    document.querySelector("#rect").classList.add("pause");
    document.querySelector("#rect .rect").classList.add("zoom");
    document.querySelector("#rect").addEventListener("animationend", reRestart);
    e.stopPropagation();
}

function reRestart() {
    console.log("reRestart");
    document.querySelector("#rect").classList.remove("falling");
    document.querySelector("#rect").offsetHeight;
    document.querySelector("#rect").classList.add("falling");
    document.querySelector("#rect").removeEventListener("animationend", reRestart);
    document.querySelector("#rect").classList.remove("pause");
    document.querySelector("#rect .rect").classList.remove("zoom");
    document.querySelector("#rect").addEventListener("click", rect);

}

//game over 
function gameOver() {
    console.log("gameOver");
    soundFX2.play();



    document.querySelector("#game").classList.add("blur");

    document.querySelector("#star").classList.remove("falling");
    document.querySelector("#bstar").classList.remove("falling");
    document.querySelector("#star1").classList.remove("falling");
    document.querySelector("#circle").classList.remove("falling");
    document.querySelector("#rect").classList.remove("falling");
    document.querySelector("#cross").classList.remove("falling");
    document.querySelector("#heart").classList.remove("falling");
    document.querySelector("#time").classList.remove("falling");
    bgmusic.removeEventListener("ended", playMusic);



    //restart

}
