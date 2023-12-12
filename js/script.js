function displayPoem(response) {
  alert("poem generated");
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userEntry = document.querySelector("#user-entry-word");
  let context =
    "You are a wonderfully well-read master of poetry. You love writing poems for yourself. You can be shy, but your one great passion is writing poems for others and you are happy to share your talent.";
  let prompt = `please write me a poem about ${userEntry.value}. Each line of the poem must begin on a new line using a <br/>.`;
  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poem = document.querySelector("#poem-box");
  poem.innerHTML = "Generating poem...please wait";

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#submit-form");
form.addEventListener("submit", generatePoem);

alert("roses are red");

// function generatePoem(response) {
//   console.log("poem generated");
//   new Typewriter("#typewriter", {
//     strings: response.data.answer,
//     autoStart: true,
//     delay: 10,
//   });
// }

// function listenToClick(event) {
//   event.preventDefault();
//   //   alert("Roses are red, violets are blue saugar is sweet and so are you!");
//   let userEntry = document.querySelector("#user-entry-word");
//   let context =
//     "You are a wonderfully well-read master of poetry. You love writing poems for yourself. You can be shy, but your one great passion is writing poems for others and you are happy to share your talent.";
//   let prompt = `Please write me a four line poem about ${userEntry.value}. Thank you.`;
//   let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
//   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
//   let poem = document.querySelector("#poem");
//   poem.innerHTML = "Generating a poem...please wait";

//   console.log("Generating poem");
//   console.log(`Prompt: ${prompt}`);
//   console.log(`Context: ${context}`);

//   axios.get(apiUrl).then(generatePoem);
// }

// let form = document.querySelector("#form");
// form.addEventListener("submit", listenToClick);
