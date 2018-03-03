var num = [];

num[0] = {
    question: "Which of these characters was not voiced by Frank Oz?",
    a: "Miss Piggy",
    b: "The Great Gonzo",
    c: "Fozzie Bear",
    d: "Animal",
    answer: "b"
}

num[1] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[2] = {
    question: "Which of these celebrities did not guest star in the show?",
    a: "Leo Sayer",
    b: "Farrah Fawcett",
    c: "Rita Moreno",
    d: "John Denver",
    answer: "b"
}

num[3] = {
    question: "What is Scooter's relationship to the owner of the Muppet Theater?",
    a: "Son",
    b: "Nephew",
    c: "Brother",
    d: "He is the owner",
    answer: "b"
}

num[4] = {
    question: "What is Angus McGonagall's special act?",
    a: "Boomerang Fish",
    b: "Stand up comedy",
    c: "Cannonball",
    d: "Gargle Gershwin",
    answer: "d"
}

num[5] = {
    question: "Who is the bass player for The Electric Mayhem?",
    a: "Dr Teeth",
    b: "Janice",
    c: "Floyd Pepper",
    d: "Zoot",
    answer: "c"
}

num[6] = {
    question: "Which of the following characters appeard in every single episode of the series?",
    a: "Kermit the Frog",
    b: "Miss Piggy",
    c: "Gonzo the Great",
    d: "Fozzie Bear",
    answer: "a"
}

num[7] = {
    question: "What is the name of Kermit's nephew?",
    a: "Scooter",
    b: "Sam",
    c: "Robin",
    d: "Rizzo",
    answer: "c"
}

num[8] = {
    question: "What is the Swedish Chef called in Sweden?",
    a: "The Norwegian Chef",
    b: "The Finnish Chef",
    c: "The Danish Chef",
    d: "The Irish Chef",
    answer: "a"
}

num[9] = {
    question: "What are Statler and Waldorf named after?",
    a: "Two New York restaurants",
    b: "Two of Jim Henson's college professors",
    c: "Two theater critics",
    d: "Two New York hotels",
    answer: "d"
}

var i=0;

var time;

var interval;

var choice;

var right = 0;

var wrong = 0;

var missed = 0;

function run() {
    interval = setInterval(clock, 1000);
  }

function clock () {
    time--;
    $("#timer").html(time);
    if (time === 0){
        $("#answers").empty();
        $("#question").html("Time's up! You bombed this question");
        $("#yay").append("<img src='https://media3.giphy.com/media/8Ep2aFnTfs6TC/giphy.gif'>");
        missed++;
        next();
    }
}

function next () {
    clearInterval(interval);
    i++;

    if (i===10){
        setTimeout(endGame, 3000);
    }
    else {
        setTimeout(fill, 3000);
    }
}

document.getElementById("started").onclick = function () {
    $("#title").empty();
    $("#title").append("<h1 id='question'></h1>");
    fill();
}

function fill(){
    $("#yay").empty();
    time = 10;
    $("#question").html(num[i].question);
    $("#answers").append("<h3 id='timer'>" + time + "</h3><h2 id='optionA'>A) " + num[i].a + "</h2><h2 id='optionB'>B) " + num[i].b + "</h2><h2 id='optionC'>C) " + num[i].c + "</h2><h2 id='optionD'>D) " + num[i].d + "</h2>");
    run();
    document.getElementById("optionA").onclick = function () {
        choice = "a";
        verify ();
    };
    
    document.getElementById("optionB").onclick = function () {
        choice = "b";
        verify ();
    };
    
    document.getElementById("optionC").onclick = function () {
        choice = "c";
        verify ();
    };
    
    document.getElementById("optionD").onclick = function () {
        choice = "d";
        verify ();
    };
}



function verify() {
    $("#answers").empty();
    if(choice === num[i].answer) {
        $("#question").html("You are correct! YAAAAAAAAAAAYYY!!!");
        $("#yay").append("<img src='https://i.imgur.com/oVElMrk.gif'>");
        right++;
        next();
    }
    else {
        $("#question").html("Wrong... The correct answer is " + num[i][num[i].answer]);
        $("#yay").append("<img src='https://i.giphy.com/media/6tbFtCkLMGQ1y/giphy.webp'>");
        wrong++;
        next();
    }
}


function endGame () {
    $("#question").html("Game Over! Here's how you did:");
    $("#yay").empty();
    $("#answers").append("<h2 id='right'>Correct answers: " + right + "</h2><h2 id='wrong'>Wrong answers: " + wrong + "</h2><h2 id='missed'>Missed answers: " + missed + "</h2>");   
}

