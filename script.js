// //     // console.log(e);
// //     
// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
//     // key.classList.remove('playing');
//     // key.classList.toggle('playing');
//     // setTimeout(function () => {

//     // }, 0.07);
// };


// function removeTransition(e) {
//     if (e.propertyname !== 'transform') return;
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key')

// keys.forEach(key => key.addEventListener('transitioned', removeTransition));
// window.addEventListener('keydown', playSound);