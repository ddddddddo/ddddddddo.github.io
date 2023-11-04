function alertButton() {
    alert("than you so much");
}

let NewCursor = document.querySelector(".new-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    console.log(x, y);

    NewCursor.style.left = `${x}px`;
    NewCursor.style.top = `${y}px`;
}