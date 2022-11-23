
/* let test;

fetch(url)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value)
   {
    test = value[0].punchline
    console.log(value[0]);
    console.log(value[0].setup);
    console.log(value[0].punchline);
    document.getElementById("setup").innerHTML =value[0].setup;
    document.getElementById("chute").innerHTML = value[0].punchline;
  }) */
  
  let url = "https://official-joke-api.appspot.com/jokes/programming/random"
  let joke;
  let response;

  fetch(url)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      joke = value[0].setup;
      response = value[0].punchline;
      /* document.getElementById("joke").innerHTML = value[0].setup;
      document.getElementById("response").innerHTML = value[0].punchline; */
      return joke, response;
    })
    .then(function () {
      let imageMeme = document.createElement("img");
      imageMeme.src =
        "https://apimeme.com/meme?meme=Hide-the-Pain-Harold&top=" +
        joke +
        "&bottom=" +
        response;
      let divJoke = document.getElementById("meme");
      divJoke.innerHTML = "";
      divJoke.appendChild(imageMeme);
    }) 
    .then(console.log(joke, response))
    .catch(function (err) {
      // Une erreur est survenue
    });




  