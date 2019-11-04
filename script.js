function changeBackground(color) {
    document.body.style.background = color;
 }

document.body.style.height = "2000px";
window.onscroll = function(ev) {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
        this.changeBackground('#FCF7E6');
    }
};

document.body.style.height = "2800px";
window.onscroll = function(ev) {
    if (((window.innerHeight + window.scrollY) <= document.body.offsetHeight)) {
        this.changeBackground('#FFFFFF');
    }
};