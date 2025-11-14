const titleText = "ACCESS RESTRICTED — Umbrella Corp Database";
const titleElement = document.getElementById("title");
const progressElement = document.getElementById("progress");
const btn = document.getElementById("nextBtn");

function typeText(element, text, speed, callback) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, speed);
}

function startDecryption() {
    let percent = 0;
    const interval = setInterval(() => {
        percent++;
        progressElement.textContent = `> decrypting files... ${percent}%`;

        if (percent >= 100) {
            clearInterval(interval);
            progressElement.textContent = "> Decryption complete.";
            btn.style.display = "inline-block";
        }
    }, 50);
}

window.onload = () => {
    typeText(titleElement, titleText, 50, startDecryption);
};

function goNext(page) {
  window.location.href = page;
}

const banner = document.getElementById("banner");

const bannerMessages = [
    "TOP SECRET — Unauthorized Access Prohibited",
    "CLASSIFIED — Copying Strictly Forbidden",
    "LEVEL 7 CLEARANCE REQUIRED",
    "WARNING — Sensitive Data Detected",
    "DO NOT COPY — Property of Umbrella Corporation"
];

let currentMsg = 0;

function updateBanner() {
    banner.innerHTML = `<span class="scroll-text">${bannerMessages[currentMsg]}</span>`;
    currentMsg = (currentMsg + 5) % bannerMessages.length;
}


updateBanner();
setInterval(updateBanner, 5000);

const matrix = document.getElementById("matrix");


const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=<>?/|";


const width = 20;
const height = 53;

function generateMatrix() {
    let output = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            output += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        output += "\n";
    }
    matrix.textContent = output;
}


setInterval(generateMatrix, 100);

