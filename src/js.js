function generate(event){
    event.preventDefault();
}

new Typewriter('#poem', {
  strings: ['Blah, blah, blah'],
  autoStart: true,
  delay:1,
  cursor:""});

  let formElement = document.querySelector("#form");
  formElement.addEventListener("submit", generate);
  