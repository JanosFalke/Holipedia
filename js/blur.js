let clicked = false;

function blurred() {
    let blur1 = document.querySelector("main");
    let blur2 = document.querySelector("footer");

    if (clicked) {
        blur1.setAttribute('class', null);
        blur2.setAttribute('class', null);
    } else {
        blur1.setAttribute('class', 'blur');
        blur2.setAttribute('class', 'blur');
    }
    clicked = !clicked;

}
