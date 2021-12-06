

//button for about me
document.getElementById("amButtonText").style.display ="none";

function openamButtonText() {
    document.getElementById("amButtonText").style.display = "block";
}

document.getElementById('amButton').addEventListener('click', openamButtonText);


//button for teach with tech
document.getElementById("twtButtonText").style.display ="none";

function opentwt() {
    document.getElementById("twtButtonText").style.display = "block";
}

document.getElementById('twtButton').addEventListener('click', opentwt);


//button for other interests
document.getElementById("oiButtonText").style.display ="none";

function openoi() {
    document.getElementById("oiButtonText").style.display = "block";
}

document.getElementById('oiButton').addEventListener('click', openoi);