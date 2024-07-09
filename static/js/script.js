window.onhashchange = () => {
    if (!/^#ref-/.test(window.location.hash)) {
        return;
    }
    setTimeout(() => {
        document.querySelector(window.location.hash).animate([
            {color: 'white', scale: 1.01},
            {color: 'black', scale: 1}
        ], {
            duration: 1000,
            easing: 'linear'
        });
    }, 500);
};

window.onload = () => {
    if (!/^#ref-/.test(window.location.hash)) {
        return;
    }
    document.querySelector(window.location.hash).animate([
        {color: 'white', scale: 1.01},
        {color: 'black', scale: 1}
    ], {
        duration: 1250,
        easing: 'linear'
    });
};

document.querySelectorAll('.ref').forEach(e => {
    e.onclick = onhashchange;
});

document.onscroll = () => {
    if (scrollY > document.documentElement.clientHeight) {
        document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        document.querySelector('nav').style.boxShadow = 'rgba(0, 0, 0, 0.5)';
        document.querySelectorAll('nav a').forEach(e => e.style.color = 'white');
        return;
    }
    
    document.querySelector('nav').style.backgroundColor = 'transparent';
    document.querySelector('nav').style.boxShadow = '';
    document.querySelectorAll('nav a').forEach(e => e.style.color = 'black');
};