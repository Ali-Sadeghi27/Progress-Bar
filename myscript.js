for (var i = 0; i < 3; i++) {
    start(i);
}
function start(i) {
    var percent = document.querySelector(`.progress${i} .percent-num`);
    var progressing = document.querySelector(`.progress${i} .progressing`);
    var margin = document.querySelector(`.progress${i} .margin`);

    requestAnimationFrame(grow);

    var progress = 0;
    var random = parseInt(Math.random() * 100);

    function grow() {
        progress += 1;
        if (progress <= random) {
            percent.innerHTML = parseInt(progress) + "%";
            progressing.style.width = progress + "%";
            margin.style.left = progress + "%";
            requestAnimationFrame(grow);
        }
    }
}