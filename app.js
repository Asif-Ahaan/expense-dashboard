// app.js — tab navigation + init

(function () {
  let chartsInitialized = false;

  // Tab switching
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');

      // Initialize charts only once, when overview is first shown
      if (tab.dataset.tab === 'overview' && !chartsInitialized) {
        chartsInitialized = true;
        setTimeout(window.initCharts, 50);
      }
    });
  });

  // Init charts on load since overview is default active tab
  window.addEventListener('load', () => {
    if (!chartsInitialized) {
      chartsInitialized = true;
      setTimeout(window.initCharts, 100);
    }
  });
})();
