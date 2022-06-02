(function() {
  window.onload = beforeLaunch;
  document.addEventListener('DOMContentLoaded', launchApp);

  function beforeLaunch() {
    console.log('window loaded.');
    
    // Default color scheme is dark, so check if the user prefers light.
    // If so, switch to light scheme.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.setAttribute('data-color-scheme', 'light');
    }
  }

  function launchApp() {
    // What's the best adjective for this? link, bind, create
    bindEventListeners();
  }

  function toggleDarkMode() {
    const SCHEME = 'data-color-scheme';
    let colorScheme = document.body.getAttribute(SCHEME);
    let newScheme = (colorScheme === "dark") ? "light" : "dark";
    document.body.setAttribute(SCHEME, newScheme);
  }
  
  function handleKeyDown(e) {
      switch (e.key) {
      case 'd':
        toggleDarkMode();
        break;
      default:
      }
  }
  
  function bindEventListeners() {
    window.addEventListener('keydown', handleKeyDown);
    
    let schemeToggleButton = document.querySelector('.cst-button');
    schemeToggleButton.addEventListener('click', toggleDarkMode);
  }
})();
