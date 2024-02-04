window.onscroll = function () {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScrollHeight = document.documentElement.scrollTop;
    const scrollHeightPercentage = (currentScrollHeight / totalHeight) * 100;
    document.getElementById('scroll-bar').style.width = scrollHeightPercentage + '%';
}