
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
  
    let urlJoke = "https://official-joke-api.appspot.com/jokes/programming/random"
  let joke;
  let response;
  let urlMeme ="https://api.imgflip.com/get_memes"

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  getAJoke.onclick = () => {

  fetch(urlJoke)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      joke = value[0].setup;
      response = value[0].punchline;
    document.getElementById("joke").innerHTML = value[0].setup;
      document.getElementById("response").innerHTML = value[0].punchline;
      return joke, response;
    })
    .catch(function (err) {
        // Une erreur est survenue
      }) ;

    fetch(urlMeme)
        .then(function (res) {
         if (res.ok) {
           return res.json()
        }
        })
     .then(function (value) { 
        let n =parseInt(getRandomArbitrary(0,99))
      let imageMeme = document.createElement("img");
      imageMeme.src = value.data.memes[n].url
      imageMeme.width = "300"
      let divJoke = document.getElementById("meme");
      divJoke.innerHTML = "";
      divJoke.appendChild(imageMeme);
    }) 
    .catch(function (err) {
        // Une erreur est survenue
      }) ;
    }


    /* "https://apimeme.com/meme?meme=Hide-the-Pain-Harold&top=" +
    joke +
    "&bottom=" +
    response; */

  