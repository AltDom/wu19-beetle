function changeBackground(color) {
    document.body.style.background = color;
    document.getElementById("header").style.backgroundColor = color;
}

changeBackground('#FFFFFF');


window.onscroll = function(ev) {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 2395 && document.body.style.background === 'rgb(255, 255, 255)') {
        this.changeBackground('#FEFBEC');
    } else if (scrollTop < 2395 && document.body.style.background === 'rgb(254, 251, 236)') {
        this.changeBackground('#FFFFFF');
    }
}


