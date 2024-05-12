let sections = document.querySelectorAll('div')

window.onscroll = () => {
    sections.forEach(diva => {
        let top = window.scrollY;
        let offset = diva.offsetTop;
        let height = diva.offsetHeight;

        if (top >= offset && top < offset + height) {
            diva.classList.add('show-animate');
        }
    })
}
