function myFunction() {
  var moreText = document.getElementById('text--smol');
  var btnText = document.getElementById('myBtn');

  moreText.onclick = function () {
    btnText.classList.toggle('open');
  };

  if (moreText.classList.toggle === 'openx') {
    btnText.innerHTML = 'Читать больше';
    // moreText.style.display = 'none';
  } else {
    btnText.innerHTML = 'Читать меньше';
    // moreText.style.height = '150px';
  }
}
