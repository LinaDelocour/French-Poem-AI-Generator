function generate(event){
    event.preventDefault();
    let userinstructions = document.querySelector("#user-instructions");
    let apiKey = "ae3a312323bto5f9e8049a27984bd0d3";
    let prompt = `Write a 4 - line poem in French on the topic of ${userinstructions}. Separate each line using <br />. Add a signage "SheCodes AI" at the bottom of a poem in <strong> element. Do not add a title.`;
    let context = "You are a romantic expert.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios(apiURL).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

  let formElement = document.querySelector("#form");
  formElement.addEventListener("submit", generate);
  