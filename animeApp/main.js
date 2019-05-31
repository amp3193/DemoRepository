anime({
    targets:'div.box.red',
    translateY: [
    {value: 200, duration: 500},
    {value: 0, duration: 800},
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
});

const powAttack = anime({
    targets:'img.pow',
    duration: 800,
    translateX: [
    {value: 700, duration: 500},
    {value: 0, duration: 800},
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    autoplay:false,
    loop:true,

});

document.querySelector("#attack").onclick = powAttack.play;

