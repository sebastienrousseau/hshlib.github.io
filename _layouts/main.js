(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  var mode = document.getElementById('mode-toggle');
  var state = document.getElementById('mode-state');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('data-open', String(open));
  }

  if (toggle && menu) {
    setMenu(false);
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    /* 64em is where skeletonic's topbar puts the links back in the bar;
       crossing it must not leave the small-screen state behind. */
    var wide = window.matchMedia('(min-width: 64em)');
    if (typeof wide.addEventListener === 'function') {
      wide.addEventListener('change', function (mq) {
        if (mq.matches) setMenu(false);
      });
    }
  }

  if (mode && state) {
    var order = ['system', 'light', 'dark'];
    var labels = {
      system: (state.dataset && state.dataset.labelSystem) || 'System',
      light: (mode.dataset && mode.dataset.labelLight) || 'Light',
      dark: (mode.dataset && mode.dataset.labelDark) || 'Dark'
    };
    function current() {
      var value = root.getAttribute('data-theme');
      return value === 'light' || value === 'dark' ? value : 'system';
    }
    function apply(value) {
      if (value === 'system') {
        root.removeAttribute('data-theme');
        try { localStorage.removeItem('theme'); } catch (error) { /* no-op */ }
      } else {
        root.setAttribute('data-theme', value);
        try { localStorage.setItem('theme', value); } catch (error) { /* no-op */ }
      }
      state.textContent = labels[value];
    }
    state.textContent = labels[current()];
    mode.addEventListener('click', function () {
      apply(order[(order.indexOf(current()) + 1) % order.length]);
    });
  }

  /* Dock search button into header slot without inline style mutations */
  function dockSearchButton() {
    var searchSlot = document.querySelector('[data-ssg-search]');
    var searchButton = document.getElementById('ssg-search-btn');
    if (searchSlot && searchButton) {
      searchSlot.replaceWith(searchButton);
    } else if (searchSlot && typeof MutationObserver === 'function') {
      var searchObserver = new MutationObserver(function () {
        var btn = document.getElementById('ssg-search-btn');
        if (btn) {
          searchSlot.replaceWith(btn);
          searchObserver.disconnect();
        }
      });
      searchObserver.observe(document.body, { childList: true, subtree: true });
    }
  }
  dockSearchButton();

  /* FAQ Accordion toggle */
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (item) {
        item.classList.toggle('is-open', !expanded);
      }
    });
  });
})();
