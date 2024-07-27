let flag = 0;

function call(x) {
    flag += x;
    slideShow(flag)
}
slideShow(flag);

function slideShow(numbers) {
    let slide = document.getElementsByClassName("slider");
    if (numbers == slide.length) {
        flag = 0;
        numbers = 0;
    }
    if (numbers < 0) {
        flag = slide.length - 1;
        numbers = slide.length - 1;
    }
    for (var i of slide) {
        i.style.display = "none"
    }
    slide[numbers].style.display = "block"
}

