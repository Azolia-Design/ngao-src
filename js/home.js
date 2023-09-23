setTimeout(() => {
  document.querySelector('.loader__wrap').classList.add('loaded')
}, 300);
document.querySelector('[data-popup="open"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.popup').classList.add('active')
})
document.querySelector('[data-popup="close"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.popup').classList.remove('active')
})