const yesBox = document.getElementById("yesBox");
const noBox = document.getElementById("noBox");

function markYes() {
    yesBox.checked = true;
    noBox.checked = false;
}

yesBox.addEventListener("click", markYes);
noBox.addEventListener("click", markYes);
