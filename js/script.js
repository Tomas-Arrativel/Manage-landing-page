// Hamburguer Menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

// Auto Slider

let turn = 1;

setInterval(() => {
  const testimonial = document.getElementById('testimonial' + turn);
  testimonial.classList.contains('hidden')
    ? testimonial.classList.remove('hidden')
    : '';
  testimonial.classList.contains('test')
    ? ''
    : testimonial.classList.add('test');

  setInterval(() => {
    testimonial.classList.add('hidden');
    testimonial.classList.remove('test');
  }, 5950);

  if (turn <= 3) turn++;
  else turn = 1;
}, 6000);
