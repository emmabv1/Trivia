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
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[3] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[4] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[5] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[6] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[7] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[8] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
}

num[9] = {
    question: "How many seasons did The Muppet Show have?",
    a: "5",
    b: "3",
    c: "4",
    d: "6",
    answer: "a"
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
        $("#answer").html("Whoops! Time is up. Wait for next question.");
        missed++;
        next()
    }
}

function next () {
    clearInterval(interval);
    empty();
    i++;

    if (i===10){
        setTimeout(endGame, 3000);
    }
    else {
        setTimeout(fill, 3000);
    }
}

function fill(){
    time = 10;
    run();
    $("#question").html(num[i].question);
    $("#timer").html(time);
    $("#optionA").html("A) " + num[i].a);
    $("#optionB").html("B) " + num[i].b);
    $("#optionC").html("C) " + num[i].c);
    $("#optionD").html("D) " + num[i].d);
    $("#answer").html("");
}

function empty() {
    $("#question").html("");
    $("#optionA").html("");
    $("#optionB").html("");
    $("#optionC").html("");
    $("#optionD").html("");
}

fill();

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

function verify() {
    if(choice === num[i].answer) {
        empty();
        $("#answer").html("You are correct! YAAAAAAAAAAAYYY!!!");
        right++;
        next();
    }
    else {
        $("#answer").html("Wrong... Wait for next question.");
        wrong++;
        next();
    }
}


function endGame () {
    $("#answer").html("Game Over! Here's how you did:")
    $("#right").html("Correct answers: " + right);
    $("#wrong").html("Wrong answers: " + wrong);
    $("#missed").html("Missed answers: " + missed);
}

