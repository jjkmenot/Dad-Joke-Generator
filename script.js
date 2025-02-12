// script.js
const jokeEl = document.querySelector('.joke');
const jokeBtn = document.getElementById('get-joke');

// New API that provides setup and punchline separately
const apiURL = 'https://official-joke-api.appspot.com/random_joke';

// Function to fetch and display the joke
async function getDadJoke() {
  jokeEl.classList.remove('fade-in');  // Reset animation

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // Displaying setup and punchline on separate lines
    jokeEl.innerHTML = `
      <span class="setup">${data.setup}</span><br>
      <span class="punchline">${data.punchline}</span>
    `;

    // Adding fade-in animation after content loads
    setTimeout(() => {
      jokeEl.classList.add('fade-in');
    }, 100);
  } catch (error) {
    jokeEl.textContent = "Oops! Couldn't fetch a joke. Try again! 🤷‍♂️";
  }
}

jokeBtn.addEventListener('click', getDadJoke);
