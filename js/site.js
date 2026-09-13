// Email obfuscation: the address is stored reversed in data-e so plain-text scrapers
// never see it in the HTML. Without JS the link falls back to the contact page/form.
(function () {
  var links = document.querySelectorAll('.js-email');
  for (var i = 0; i < links.length; i++) {
    var address = links[i].getAttribute('data-e').split('').reverse().join('');
    links[i].href = 'mailto:' + address;
    links[i].textContent = address;
  }
})();

// Mobile nav toggle. Without JS the nav simply stays visible (see html.js rules in styles.css).
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
