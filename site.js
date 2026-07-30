document.addEventListener('DOMContentLoaded', function () {
  var navigation = document.querySelector('.nav nav');
  if (navigation) {
    var toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.type = 'button';
    toggle.textContent = 'Menu';
    toggle.setAttribute('aria-expanded', 'false');
    navigation.parentNode.insertBefore(toggle, navigation);
    toggle.addEventListener('click', function () {
      var open = navigation.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }
  document.querySelectorAll('img').forEach(function (image) {
    if (!image.closest('.hero')) image.loading = 'lazy';
    image.decoding = 'async';
  });
});
