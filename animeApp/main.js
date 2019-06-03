anime({
    targets: 'div.box.red',
    translateY: [{
            value: 200,
            duration: 500
        },
        {
            value: 0,
            duration: 800
        },
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
});

// const powAttack = anime({
//     targets:'img.pow',
//     duration: 800,
//     translateX: [
//     {value: 700, duration: 500},
//     {value: 0, duration: 800},
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
//     autoplay:false,
//     loop:true,
// });



// const powAttack = anime({
//     targets: 'img.pow',
//     translateX: [
//       { value: 250, duration: 1000, delay: 500 },
//       { value: 0, duration: 1000, delay: 500 }
//     ],
//     // translateY: [
//     //   { value: -40, duration: 500 },
//     //   { value: 40, duration: 500, delay: 1000 },
//     //   { value: 0, duration: 500, delay: 1000 }
//     // ],
//     scaleX: [
//       { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
//       { value: 1, duration: 900 },
//       { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
//       { value: 1, duration: 900 }
//     ],
//     scaleY: [
//       { value: [1.75, 1], duration: 500 },
//       { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
//       { value: 1, duration: 450 },
//       { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
//       { value: 1, duration: 450 }
//     ],
//     easing: 'easeOutElastic',
//     loop: true,
//     autoplay: false
//   });
 
function initAnimation() {
    const animAttack = anime({
        targets: '.attack-image',
        scaleX: [{
                value: 0,
                duration: 0
            }
        ],
        scaleY: [{
                value: 0,
                duration: 0
            }
        ],
        loop: false,
        autoplay: false
    });
    animAttack.play();
}

function attackAnimation() {
    const animAttack = anime({
        targets: '.attack-image',
        translateX: [{
                value: 250,
                duration: 1000,
                delay: 500
            },
            {
                value: 0,
                duration: 1000,
                delay: 500
            }
        ],
        scaleX: [{
                value: 1,
                duration: 100
            },
            {
                value: 4,
                duration: 100,
                delay: 500,
                easing: 'easeOutExpo'
            },
            {
                value: 1,
                duration: 900
            },
            {
                value: 4,
                duration: 100,
                delay: 500,
                easing: 'easeOutExpo'
            },
            {
                value: 1,
                duration: 900
            },
            {
                value: 0,
                duration: 1000
            }
        ],
        scaleY: [{
                value: 1,
                duration: 100
            },
            {
                value: [1.75, 1],
                duration: 500
            },
            {
                value: 2,
                duration: 50,
                delay: 1000,
                easing: 'easeOutExpo'
            },
            {
                value: 1,
                duration: 450
            },
            {
                value: 1.75,
                duration: 50,
                delay: 1000,
                easing: 'easeOutExpo'
            },
            {
                value: 1,
                duration: 450
            },
            {value: 0,
                duration: 100
            }
        ],
        easing: 'easeOutElastic',
        loop: 1,
        autoplay: false
    });
    animAttack.play();
}

document.querySelector("#attack").onclick = (e) => {
    attackAnimation();
};

initAnimation();