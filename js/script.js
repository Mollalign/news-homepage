document.querySelector('.menu-button').addEventListener('click', () => {
 const menuEl = document.querySelector('.menu');
 menuEl.style.display = 'block';

 const shaddowEl = document.querySelector('.shaddow');
 shaddowEl.style.display = 'block';
});

document.querySelector('.logo img').addEventListener('click', () => {
  const menuEl = document.querySelector('.menu');
  menuEl.style.display = 'none';
  const shaddowEl = document.querySelector('.shaddow');
 shaddowEl.style.display = 'none';
 });