document.querySelector('.myBtn').onclick = function () {
  document.querySelector('.text--smol').classList.toggle('open');
  this.innerText = this.innerText == 'Read More' ? 'Less' : 'Read More';
};
