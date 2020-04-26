document.addEventListener('DOMContentLoaded', canvasLogo, false);

function canvasLogo() {
    let canvasElement = document.querySelector("#mon_canvas");
    let context = canvasElement.getContext("2d");

    canvasElement.width = 167;
    canvasElement.height = 80;

    // the 1. triangle
    context.beginPath();
    context.moveTo(32, 40);
    context.lineTo(57, 15);
    context.lineTo(66, 24);
    context.lineTo(54, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#FAA620';
    context.stroke();

    context.fillStyle = "#FAA620";
    context.fill();


    // the 3. triangle
    context.beginPath();
    context.moveTo(98, 23);
    context.lineTo(107, 15);
    context.lineTo(132, 40);
    context.lineTo(111, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#FAA620';
    context.stroke();

    context.fillStyle = "#FAA620";
    context.fill();



    // the 2. triangle
    context.beginPath();
    context.moveTo(59, 38);
    context.lineTo(83, 10);
    context.lineTo(107, 38);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#F26928';
    context.stroke();

    context.fillStyle = "#F26928";
    context.fill();





    // the 1. triangle content
    context.beginPath();
    context.moveTo(39, 36);
    context.arcTo(47, 32, 53, 31, 1);
    context.lineTo(53, 30);
    context.lineTo(47, 30);
    context.arcTo(54, 24, 60, 23, 1);
    context.lineTo(60, 22);
    context.lineTo(56, 20);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();



    // the 3. triangle content
    context.beginPath();
    context.moveTo(125, 36);
    context.arcTo(117, 32, 111, 31, 1);
    context.lineTo(111, 30);
    context.lineTo(117, 30);
    context.arcTo(110, 24, 104, 23, 1);
    context.lineTo(104, 22);
    context.lineTo(108, 20);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();



    // the 2. triangle content
    context.beginPath();
    context.moveTo(83, 15);
    context.lineTo(90, 23);
    context.lineTo(86, 20);
    context.lineTo(82, 25);
    context.lineTo(81, 21);
    context.lineTo(69, 32);
    context.closePath();

    // the outline
    context.lineWidth = 2;
    context.strokeStyle = '#fff';
    context.stroke();

    context.fillStyle = "#fff";
    context.fill();


    // the line under the triangles
    context.beginPath();
    context.moveTo(20, 47);
    context.bezierCurveTo(30, 41, 146, 41, 136, 47);
    context.bezierCurveTo(146, 44, 30, 44, 20, 47);

    // the outline
    context.lineWidth = 3;
    context.strokeStyle = '#FAA620';
    context.stroke();


    // Text
    context.font = '22px RaleWay';
    context.fillStyle = "#F26928";
    context.fillText("Holipedia", 32, 69);





}
