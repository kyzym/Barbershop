// $(function () {
//   $('#readMore').click(function () {
//     $(this).text(function (i, def) {
//       return def == 'Read More' ? 'Show Less' : 'Read More';
//     });
//   });
// });
$(function () {
  $('.text--smol').elimore({
    maxLength: 140,
  });
});
$(function () {
  $('.text--smol').elimore({
    moreText: 'Читать далее',
    lessText: 'Свернуть текст',
  });
});
