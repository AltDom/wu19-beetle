function changeBackground(color) {
    document.body.style.background = color;
    document.getElementById("header").style.backgroundColor = color;
}

changeBackground('#FFFFFF');


window.onscroll = function(ev) {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop/scrollHeight >= 0.465 && document.body.style.background === 'rgb(255, 255, 255)') {
        this.changeBackground('#FEFBEC');
    } else if (scrollTop/scrollHeight < 0.465 && document.body.style.background === 'rgb(254, 251, 236)') {
        this.changeBackground('#FFFFFF');
    }
}

// console.log(document.documentElement.getBoundingClientRect()) use this to calculate height where colour-change should occur.
