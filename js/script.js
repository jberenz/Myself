const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

function hired() {
    result.classList.remove("hidden");
}

yesBtn.addEventListener("click", hired);
noBtn.addEventListener("click", hired);
