document.addEventListener('DOMContentLoaded', canvasResponsive, false);

function canvasResponsive() {
    var canvasElement = document.querySelector("#canvas_responsive");
    var context = canvasElement.getContext("2d");



    canvasElement.width = 130;
    canvasElement.height = 50;

    // the 1. triangle
    context.beginPath();
    context.moveTo(17, 40);
    context.lineTo(42, 15);
    context.lineTo(51, 24);
    context.lineTo(39, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#FAA620';
    context.stroke();

    context.fillStyle = "#FAA620";
    context.fill();


    // the 3. triangle
    context.beginPath();
    context.moveTo(83, 23);
    context.lineTo(92, 15);
    context.lineTo(117, 40);
    context.lineTo(96, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#FAA620';
    context.stroke();

    context.fillStyle = "#FAA620";
    context.fill();



    // the 2. triangle
    context.beginPath();
    context.moveTo(44, 38);
    context.lineTo(68, 10);
    context.lineTo(92, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#F26928';
    context.stroke();

    context.fillStyle = "#F26928";
    context.fill();





    // the 1. triangle content
    context.beginPath();
    context.moveTo(24, 36);
    context.arcTo(32, 32, 38, 31, 1);
    context.lineTo(38, 30);
    context.lineTo(32, 30);
    context.arcTo(39, 24, 45, 23, 1);
    context.lineTo(45, 22);
    context.lineTo(41, 20);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();



    // the 3. triangle content
    context.beginPath();
    context.moveTo(110, 36);
    context.arcTo(102, 32, 96, 31, 1);
    context.lineTo(96, 30);
    context.lineTo(102, 30);
    context.arcTo(95, 24, 89, 23, 1);
    context.lineTo(89, 22);
    context.lineTo(93, 20);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();



    // the 2. triangle content
    context.beginPath();
    context.moveTo(68, 15);
    context.lineTo(75, 23);
    context.lineTo(71, 20);
    context.lineTo(67, 25);
    context.lineTo(66, 21);
    context.lineTo(54, 32);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();



    context.beginPath();
    context.moveTo(5, 47);
    context.bezierCurveTo(15, 41, 131, 41, 121, 47);
    context.bezierCurveTo(131, 44, 15, 44, 5, 47);

    // the outline
    context.lineWidth = 3;
    context.strokeStyle = '#FAA620';
    context.stroke();
}
