const inputText = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const inputImage = document.getElementById('meme-insert');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');
const thumbnail = document.getElementsByClassName('image');

// PASSAR TEXTO DO INPUT P/ IMG
inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

// FAZER UPLOAD DE IMAGEM
inputImage.addEventListener('change', (e) => {
  memeImage.src = URL.createObjectURL(e.target.files[0]);
});

// TROCAR BORDA DA IMAGEM
fireBtn.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});
waterBtn.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});
earthBtn.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});

// MUDAR IMAGEM DO MEME
for (let i = 0; i < thumbnail.length; i += 1) {
  thumbnail[i].addEventListener('click', (e) => {
    memeImage.src = e.target.src;
  });
}
