function displayPoem(response) {
  //   alert("Poem generated!");
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userEntry = document.querySelector("#user-entry-word");
  let context =
    "You are interested in English folklore and fairytales. You enjoy writing poetry with lts of imagery from the nature you see in the ENglish countryside. Your favourite book is Jane Eyre by Charlotte Bronte. You like to imagine being Robin Hood in your free time. Your favouite poem is Goblin Market by Christina Rosetti";

  let prompt = `Please write me a 4 line poem about ${userEntry.value}. Each line of the poem must begin on a new line using a <br/>. Sign off every poem with <strong>by SheCodes AI 💖</strong>`;
  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poem = document.querySelector("#poem-box");
  poem.classList.remove("hidden");
  poem.innerHTML = `<span class="blink">⏳</span> Generating your poem about ${userEntry.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#submit-form");
form.addEventListener("submit", generatePoem);
