const checkbox = document.getElementById('input-checkbox');
const link = document.getElementById('href');
const inputBox = document.getElementById('input-text');

link.addEventListener('click', (e) => {
  e.preventDefault();
});

checkbox.addEventListener('click', (e) => {
  e.preventDefault();
});

inputBox.addEventListener('keypress', (e) => {
  if (e.key !== 'a') {
    e.preventDefault();
  }
});
