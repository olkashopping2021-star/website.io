document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // simple chip filter on products page
  var chips = document.querySelectorAll('.chip[data-filter]');
  var cards = document.querySelectorAll('.find-card[data-cat]');
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        var f = chip.getAttribute('data-filter');
        cards.forEach(function (card) {
          var show = f === 'all' || card.getAttribute('data-cat') === f;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
