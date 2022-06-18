// micruopp.com
// @author Mic Ruopp dev@micruopp.com
// Copyright 2022. All rights reserved.

(function() {
  window.onload = beforeLaunch;
  document.addEventListener('DOMContentLoaded', launchApp);

  function beforeLaunch() {
    console.log('window loaded.');
    
    // Set color scheme attributei
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-color-scheme', 'light');
    } else {
      document.documentElement.setAttribute('data-color-scheme', 'dark');
    }
  }

  function launchApp() {
    // What's the best adjective for this? link, bind, create
    bindEventListeners();
  }


  function toggleDarkMode() {
     setColorScheme(); 
  }
  
  const SCHEME = 'data-color-scheme';
  function __setColorScheme(el, scheme) {
    let newScheme = (scheme === "dark") ? "light" : "dark";
    el.setAttribute(SCHEME, newScheme);
  }
  
  function setColorScheme() {
    const el = document.documentElement;
    let colorScheme = el.getAttribute(SCHEME);
  
    __setColorScheme(el, colorScheme);
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
    // TODO: on window focus, CHECK dark mode and toggle if necessary.
  }
})();
