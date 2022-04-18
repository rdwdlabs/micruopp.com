(function() {
  window.onload = beforeLaunch;

  document.addEventListener('DOMContentLoaded', launchApp);

  function beforeLaunch() {
    console.log('window loaded.');
  }

  function launchApp() {
    randomizeGreeting();
  }

  function randomizeGreeting() {
    const greetings = [
      "Hey!",
      "Hi!",
      "Hello there.",
      "Yo.",
      "&#x1F44B",
    ];

    const greetingEl = document.getElementById('greeting');

    let randomIndex = Math.floor(Math.random() * greetings.length);
    let newGreeting = `${greetings[randomIndex]} I'm`;
    //let newGreeting = `${greetings[4]} <p>&#x1F354</p> I'm`;

    greetingEl.innerHTML = newGreeting; 
  }
})();
