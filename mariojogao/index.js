
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontuacao = document.querySelector('.pontuacaofalse')
const atual = document.querySelector('.atualfalse')
const recorde = document.querySelector('.recordefalse')
const recomecar = document.querySelector('.recomecarfalse')
const gameOver = document.querySelector('.gameOverfalse')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        

        pontuacao.classList.remove('pontuacaofalse');
        atual.classList.remove('atualfalse');
        recorde.classList.remove('recordefalse');
        recomecar.classList.remove('recomecarfalse');
        gameOver.classList.remove('gameOverfalse');


        pontuacao.classList.add('pontuacao');
        atual.classList.add('atual');
        recorde.classList.add('recorde');
        recomecar.classList.add('recomecar');
        gameOver.classList.add('gameOver');
        clearInterval(loop);
        return(loop)
    }
}, 10);

document.addEventListener('keypress', jump);


