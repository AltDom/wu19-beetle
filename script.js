function changeBackground(color) {
    document.body.style.background = color;
    document.getElementById("header").style.backgroundColor = color;
}

changeBackground('#FFFFFF');


window.onscroll = function(ev) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 2110 && document.body.style.background === 'rgb(255, 255, 255)') {
        this.changeBackground('#FCF7E6');
    } else if (scrollTop < 2110 && document.body.style.background === 'rgb(252, 247, 230)') {
        this.changeBackground('#FFFFFF');
    }
}


