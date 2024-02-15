const yes = document.querySelector('.si');

const noBtn = document.querySelector('#noBtn');

if (noBtn) {
    noBtn.addEventListener('click',() => {
            const randomX = parseInt(Math.random() * 100);
            const randomY = parseInt(Math.random() * 100);
            noBtn.style.setProperty('top', randomY + '%');
            noBtn.style.setProperty('left', randomX + '%');
            noBtn.style.setProperty('transform', `translate(${randomX}%, ${randomY}%)`);
        });
}