window.onscroll = function () {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScrollHeight = document.documentElement.scrollTop;
    const scrollHeightPercentage = (currentScrollHeight / totalHeight) * 100;
    document.getElementById('scroll-bar').style.width = scrollHeightPercentage + '%';
    const toTopButton = document.getElementById('to-top')
    if (currentScrollHeight > 400) {
        toTopButton.style.display = 'flex';
    } else {
        toTopButton.style.display = 'none';
    }
}
function scrollToTop() {
    window.scrollTo(0,0)
}