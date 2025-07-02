// External JS for Background Color Change
function Dark() {
    // change document's bg color
    document.body.style.backgroundColor = '#A98F8C';
    // change document's color
    document.body.style.color = 'white';
}

function Light() {
    // change document's bg color
    document.body.style.backgroundColor = 'white';
    // change document's color
    document.body.style.color = '#413A39';
}

// External JS of Product Description Page's Review
function review() {
    // y stores value obtained from prompt
    var y = prompt("Write a review:");
    // alert message is given when y is not empty
    if (y != "") {
        alert("Thankyou for your valuable review")
    }
}

// JS for image toggling
function toggle() {
    var p1 = document.getElementById('1');
    var p2 = document.getElementById('2');

    if (p1.style.display == "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }

    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}

function toggle1() {
    var p1 = document.getElementById('3');
    var p2 = document.getElementById('4');

    if (p1.style.display == "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }

    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}

function toggle2() {
    var p1 = document.getElementById('5');
    var p2 = document.getElementById('6');

    if (p1.style.display == "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }

    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}