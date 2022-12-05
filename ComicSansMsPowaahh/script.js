/*  ----------------------  MEMES  ----------------------*/

let memeBase = {
  success: true,
  data: {
    memes: [
      {
        id: "181913649",
        name: "Drake Hotline Bling",
        url: "https://i.imgflip.com/30b1gx.jpg",
        width: 1200,
        height: 1200,
        box_count: 2,
      },
      {
        id: "87743020",
        name: "Two Buttons",
        url: "https://i.imgflip.com/1g8my4.jpg",
        width: 600,
        height: 908,
        box_count: 3,
      },
      {
        id: "112126428",
        name: "Distracted Boyfriend",
        url: "https://i.imgflip.com/1ur9b0.jpg",
        width: 1200,
        height: 800,
        box_count: 3,
      },
      {
        id: "131087935",
        name: "Running Away Balloon",
        url: "https://i.imgflip.com/261o3j.jpg",
        width: 761,
        height: 1024,
        box_count: 5,
      },
      {
        id: "217743513",
        name: "UNO Draw 25 Cards",
        url: "https://i.imgflip.com/3lmzyx.jpg",
        width: 500,
        height: 494,
        box_count: 2,
      },
      {
        id: "124822590",
        name: "Left Exit 12 Off Ramp",
        url: "https://i.imgflip.com/22bdq6.jpg",
        width: 804,
        height: 767,
        box_count: 3,
      },
      {
        id: "247375501",
        name: "Buff Doge vs. Cheems",
        url: "https://i.imgflip.com/43a45p.png",
        width: 937,
        height: 720,
        box_count: 4,
      },
      {
        id: "222403160",
        name: "Bernie I Am Once Again Asking For Your Support",
        url: "https://i.imgflip.com/3oevdk.jpg",
        width: 750,
        height: 750,
        box_count: 2,
      },
      {
        id: "129242436",
        name: "Change My Mind",
        url: "https://i.imgflip.com/24y43o.jpg",
        width: 482,
        height: 361,
        box_count: 2,
      },
      {
        id: "131940431",
        name: "Gru's Plan",
        url: "https://i.imgflip.com/26jxvz.jpg",
        width: 700,
        height: 449,
        box_count: 4,
      },
      {
        id: "4087833",
        name: "Waiting Skeleton",
        url: "https://i.imgflip.com/2fm6x.jpg",
        width: 298,
        height: 403,
        box_count: 2,
      },
      {
        id: "438680",
        name: "Batman Slapping Robin",
        url: "https://i.imgflip.com/9ehk.jpg",
        width: 400,
        height: 387,
        box_count: 2,
      },
      {
        id: "97984",
        name: "Disaster Girl",
        url: "https://i.imgflip.com/23ls.jpg",
        width: 500,
        height: 375,
        box_count: 2,
      },
      {
        id: "135256802",
        name: "Epic Handshake",
        url: "https://i.imgflip.com/28j0te.jpg",
        width: 900,
        height: 645,
        box_count: 3,
      },
      {
        id: "188390779",
        name: "Woman Yelling At Cat",
        url: "https://i.imgflip.com/345v97.jpg",
        width: 680,
        height: 438,
        box_count: 2,
      },
      {
        id: "93895088",
        name: "Expanding Brain",
        url: "https://i.imgflip.com/1jwhww.jpg",
        width: 857,
        height: 1202,
        box_count: 4,
      },
      {
        id: "252600902",
        name: "Always Has Been",
        url: "https://i.imgflip.com/46e43q.png",
        width: 960,
        height: 540,
        box_count: 2,
      },
      {
        id: "80707627",
        name: "Sad Pablo Escobar",
        url: "https://i.imgflip.com/1c1uej.jpg",
        width: 720,
        height: 709,
        box_count: 3,
      },
      {
        id: "161865971",
        name: "Marked Safe From",
        url: "https://i.imgflip.com/2odckz.jpg",
        width: 618,
        height: 499,
        box_count: 2,
      },
      {
        id: "1035805",
        name: "Boardroom Meeting Suggestion",
        url: "https://i.imgflip.com/m78d.jpg",
        width: 500,
        height: 649,
        box_count: 4,
      },
      {
        id: "178591752",
        name: "Tuxedo Winnie The Pooh",
        url: "https://i.imgflip.com/2ybua0.png",
        width: 800,
        height: 582,
        box_count: 2,
      },
      {
        id: "91538330",
        name: "X, X Everywhere",
        url: "https://i.imgflip.com/1ihzfe.jpg",
        width: 2118,
        height: 1440,
        box_count: 2,
      },
      {
        id: "119139145",
        name: "Blank Nut Button",
        url: "https://i.imgflip.com/1yxkcp.jpg",
        width: 600,
        height: 446,
        box_count: 2,
      },
      {
        id: "61579",
        name: "One Does Not Simply",
        url: "https://i.imgflip.com/1bij.jpg",
        width: 568,
        height: 335,
        box_count: 2,
      },
      {
        id: "110163934",
        name: "I Bet He's Thinking About Other Women",
        url: "https://i.imgflip.com/1tl71a.jpg",
        width: 1654,
        height: 930,
        box_count: 2,
      },
      {
        id: "148909805",
        name: "Monkey Puppet",
        url: "https://i.imgflip.com/2gnnjh.jpg",
        width: 923,
        height: 768,
        box_count: 2,
      },
      {
        id: "102156234",
        name: "Mocking Spongebob",
        url: "https://i.imgflip.com/1otk96.jpg",
        width: 502,
        height: 353,
        box_count: 2,
      },
      {
        id: "180190441",
        name: "They're The Same Picture",
        url: "https://i.imgflip.com/2za3u1.jpg",
        width: 1363,
        height: 1524,
        box_count: 3,
      },
      {
        id: "195515965",
        name: "Clown Applying Makeup",
        url: "https://i.imgflip.com/38el31.jpg",
        width: 750,
        height: 798,
        box_count: 4,
      },
      {
        id: "27813981",
        name: "Hide the Pain Harold",
        url: "https://i.imgflip.com/gk5el.jpg",
        width: 480,
        height: 601,
        box_count: 2,
      },
      {
        id: "216951317",
        name: "Guy Holding Cardboard Sign",
        url: "https://i.imgflip.com/3l60ph.jpg",
        width: 700,
        height: 702,
        box_count: 2,
      },
      {
        id: "226297822",
        name: "Panik Kalm Panik",
        url: "https://i.imgflip.com/3qqcim.png",
        width: 640,
        height: 881,
        box_count: 3,
      },
      {
        id: "79132341",
        name: "Bike Fall",
        url: "https://i.imgflip.com/1b42wl.jpg",
        width: 500,
        height: 680,
        box_count: 3,
      },
      {
        id: "55311130",
        name: "This Is Fine",
        url: "https://i.imgflip.com/wxica.jpg",
        width: 580,
        height: 282,
        box_count: 2,
      },
      {
        id: "101470",
        name: "Ancient Aliens",
        url: "https://i.imgflip.com/26am.jpg",
        width: 500,
        height: 437,
        box_count: 2,
      },
      {
        id: "114585149",
        name: "Inhaling Seagull",
        url: "https://i.imgflip.com/1w7ygt.jpg",
        width: 1269,
        height: 2825,
        box_count: 4,
      },
      {
        id: "100777631",
        name: "Is This A Pigeon",
        url: "https://i.imgflip.com/1o00in.jpg",
        width: 1587,
        height: 1425,
        box_count: 3,
      },
      {
        id: "155067746",
        name: "Surprised Pikachu",
        url: "https://i.imgflip.com/2kbn1e.jpg",
        width: 1893,
        height: 1893,
        box_count: 3,
      },
      {
        id: "89370399",
        name: "Roll Safe Think About It",
        url: "https://i.imgflip.com/1h7in3.jpg",
        width: 702,
        height: 395,
        box_count: 2,
      },
      {
        id: "3218037",
        name: "This Is Where I'd Put My Trophy If I Had One",
        url: "https://i.imgflip.com/1wz1x.jpg",
        width: 300,
        height: 418,
        box_count: 2,
      },
      {
        id: "135678846",
        name: "Who Killed Hannibal",
        url: "https://i.imgflip.com/28s2gu.jpg",
        width: 1280,
        height: 1440,
        box_count: 3,
      },
      {
        id: "28251713",
        name: "Oprah You Get A",
        url: "https://i.imgflip.com/gtj5t.jpg",
        width: 620,
        height: 465,
        box_count: 2,
      },
      {
        id: "99683372",
        name: "Sleeping Shaq",
        url: "https://i.imgflip.com/1nck6k.jpg",
        width: 640,
        height: 631,
        box_count: 2,
      },
      {
        id: "123999232",
        name: "The Scroll Of Truth",
        url: "https://i.imgflip.com/21tqf4.jpg",
        width: 1280,
        height: 1236,
        box_count: 2,
      },
      {
        id: "124055727",
        name: "Y'all Got Any More Of That",
        url: "https://i.imgflip.com/21uy0f.jpg",
        width: 600,
        height: 471,
        box_count: 2,
      },
      {
        id: "134797956",
        name: "American Chopper Argument",
        url: "https://i.imgflip.com/2896ro.jpg",
        width: 640,
        height: 1800,
        box_count: 5,
      },
      {
        id: "84341851",
        name: "Evil Kermit",
        url: "https://i.imgflip.com/1e7ql7.jpg",
        width: 700,
        height: 325,
        box_count: 2,
      },
      {
        id: "21735",
        name: "The Rock Driving",
        url: "https://i.imgflip.com/grr.jpg",
        width: 568,
        height: 700,
        box_count: 2,
      },
      {
        id: "61556",
        name: "Grandma Finds The Internet",
        url: "https://i.imgflip.com/1bhw.jpg",
        width: 640,
        height: 480,
        box_count: 2,
      },
      {
        id: "5496396",
        name: "Leonardo Dicaprio Cheers",
        url: "https://i.imgflip.com/39t1o.jpg",
        width: 600,
        height: 400,
        box_count: 2,
      },
      {
        id: "61520",
        name: "Futurama Fry",
        url: "https://i.imgflip.com/1bgw.jpg",
        width: 552,
        height: 414,
        box_count: 2,
      },
      {
        id: "101288",
        name: "Third World Skeptical Kid",
        url: "https://i.imgflip.com/265k.jpg",
        width: 426,
        height: 426,
        box_count: 2,
      },
      {
        id: "259237855",
        name: "Laughing Leo",
        url: "https://i.imgflip.com/4acd7j.png",
        width: 470,
        height: 470,
        box_count: 2,
      },
      {
        id: "175540452",
        name: "Unsettled Tom",
        url: "https://i.imgflip.com/2wifvo.jpg",
        width: 680,
        height: 550,
        box_count: 2,
      },
      {
        id: "196652226",
        name: "Spongebob Ight Imma Head Out",
        url: "https://i.imgflip.com/392xtu.jpg",
        width: 822,
        height: 960,
        box_count: 2,
      },
      {
        id: "6235864",
        name: "Finding Neverland",
        url: "https://i.imgflip.com/3pnmg.jpg",
        width: 423,
        height: 600,
        box_count: 3,
      },
      {
        id: "91545132",
        name: "Trump Bill Signing",
        url: "https://i.imgflip.com/1ii4oc.jpg",
        width: 1866,
        height: 1529,
        box_count: 2,
      },
      {
        id: "132769734",
        name: "Hard To Swallow Pills",
        url: "https://i.imgflip.com/271ps6.jpg",
        width: 680,
        height: 979,
        box_count: 2,
      },
      {
        id: "8072285",
        name: "Doge",
        url: "https://i.imgflip.com/4t0m5.jpg",
        width: 620,
        height: 620,
        box_count: 5,
      },
      {
        id: "17496002",
        name: "Leonardo Dicaprio Wolf Of Wall Street",
        url: "https://i.imgflip.com/af002.jpg",
        width: 500,
        height: 589,
        box_count: 2,
      },
      {
        id: "61544",
        name: "Success Kid",
        url: "https://i.imgflip.com/1bhk.jpg",
        width: 500,
        height: 500,
        box_count: 2,
      },
      {
        id: "61546",
        name: "Brace Yourselves X is Coming",
        url: "https://i.imgflip.com/1bhm.jpg",
        width: 622,
        height: 477,
        box_count: 2,
      },
      {
        id: "29617627",
        name: "Look At Me",
        url: "https://i.imgflip.com/hmt3v.jpg",
        width: 300,
        height: 300,
        box_count: 2,
      },
      {
        id: "61532",
        name: "The Most Interesting Man In The World",
        url: "https://i.imgflip.com/1bh8.jpg",
        width: 550,
        height: 690,
        box_count: 2,
      },
      {
        id: "14371066",
        name: "Star Wars Yoda",
        url: "https://i.imgflip.com/8k0sa.jpg",
        width: 620,
        height: 714,
        box_count: 2,
      },
      {
        id: "563423",
        name: "That Would Be Great",
        url: "https://i.imgflip.com/c2qn.jpg",
        width: 526,
        height: 440,
        box_count: 2,
      },
      {
        id: "29562797",
        name: "I'm The Captain Now",
        url: "https://i.imgflip.com/hlmst.jpg",
        width: 478,
        height: 350,
        box_count: 2,
      },
      {
        id: "163573",
        name: "Imagination Spongebob",
        url: "https://i.imgflip.com/3i7p.jpg",
        width: 500,
        height: 366,
        box_count: 2,
      },
      {
        id: "24557067",
        name: "Afraid To Ask Andy",
        url: "https://i.imgflip.com/emccr.jpg",
        width: 620,
        height: 608,
        box_count: 2,
      },
      {
        id: "89655",
        name: "Uncle Sam",
        url: "https://i.imgflip.com/1x6f.jpg",
        width: 620,
        height: 833,
        box_count: 2,
      },
      {
        id: "101716",
        name: "Yo Dawg Heard You",
        url: "https://i.imgflip.com/26hg.jpg",
        width: 500,
        height: 323,
        box_count: 2,
      },
      {
        id: "1367068",
        name: "I Should Buy A Boat Cat",
        url: "https://i.imgflip.com/tau4.jpg",
        width: 500,
        height: 368,
        box_count: 2,
      },
      {
        id: "7183956",
        name: "Oprah You Get A Car Everybody Gets A Car",
        url: "https://i.imgflip.com/49z6c.jpg",
        width: 620,
        height: 1004,
        box_count: 4,
      },
      {
        id: "61585",
        name: "Bad Luck Brian",
        url: "https://i.imgflip.com/1bip.jpg",
        width: 475,
        height: 562,
        box_count: 2,
      },
      {
        id: "6531067",
        name: "See Nobody Cares",
        url: "https://i.imgflip.com/3vzej.jpg",
        width: 620,
        height: 676,
        box_count: 2,
      },
      {
        id: "61539",
        name: "First World Problems",
        url: "https://i.imgflip.com/1bhf.jpg",
        width: 552,
        height: 367,
        box_count: 2,
      },
      {
        id: "460541",
        name: "Jack Sparrow Being Chased",
        url: "https://i.imgflip.com/9vct.jpg",
        width: 500,
        height: 375,
        box_count: 2,
      },
      {
        id: "16464531",
        name: "But That's None Of My Business",
        url: "https://i.imgflip.com/9sw43.jpg",
        width: 600,
        height: 600,
        box_count: 2,
      },
      {
        id: "21604248",
        name: "Mugatu So Hot Right Now",
        url: "https://i.imgflip.com/cv1y0.jpg",
        width: 620,
        height: 497,
        box_count: 2,
      },
      {
        id: "8279814",
        name: "Cute Cat",
        url: "https://i.imgflip.com/4xgqu.jpg",
        width: 480,
        height: 532,
        box_count: 2,
      },
      {
        id: "4173692",
        name: "Scared Cat",
        url: "https://i.imgflip.com/2hgfw.jpg",
        width: 620,
        height: 464,
        box_count: 2,
      },
      {
        id: "101910402",
        name: "Who Would Win?",
        url: "https://i.imgflip.com/1ooaki.jpg",
        width: 802,
        height: 500,
        box_count: 2,
      },
      {
        id: "61533",
        name: "X All The Y",
        url: "https://i.imgflip.com/1bh9.jpg",
        width: 500,
        height: 355,
        box_count: 2,
      },
      {
        id: "61527",
        name: "Y U No",
        url: "https://i.imgflip.com/1bh3.jpg",
        width: 500,
        height: 500,
        box_count: 2,
      },
      {
        id: "142921050",
        name: "Car Salesman Slaps Roof Of Car",
        url: "https://i.imgflip.com/2d3al6.jpg",
        width: 800,
        height: 450,
        box_count: 2,
      },
      {
        id: "176908",
        name: "Shut Up And Take My Money Fry",
        url: "https://i.imgflip.com/3si4.jpg",
        width: 500,
        height: 281,
        box_count: 2,
      },
      {
        id: "922147",
        name: "Laughing Men In Suits",
        url: "https://i.imgflip.com/jrj7.jpg",
        width: 500,
        height: 333,
        box_count: 2,
      },
      {
        id: "101511",
        name: "Don't You Squidward",
        url: "https://i.imgflip.com/26br.jpg",
        width: 500,
        height: 333,
        box_count: 2,
      },
      {
        id: "405658",
        name: "Grumpy Cat",
        url: "https://i.imgflip.com/8p0a.jpg",
        width: 500,
        height: 617,
        box_count: 2,
      },
      {
        id: "61580",
        name: "Too Damn High",
        url: "https://i.imgflip.com/1bik.jpg",
        width: 420,
        height: 316,
        box_count: 2,
      },
      {
        id: "56225174",
        name: "Be Like Bill",
        url: "https://i.imgflip.com/xh3me.jpg",
        width: 913,
        height: 907,
        box_count: 4,
      },
      {
        id: "371382",
        name: "Simba Shadowy Place",
        url: "https://i.imgflip.com/7yk6.jpg",
        width: 363,
        height: 720,
        box_count: 2,
      },
      {
        id: "1202623",
        name: "Keep Calm And Carry On Red",
        url: "https://i.imgflip.com/pry7.jpg",
        width: 500,
        height: 704,
        box_count: 2,
      },
      {
        id: "1464444",
        name: "Happy Star Congratulations",
        url: "https://i.imgflip.com/vdz0.jpg",
        width: 450,
        height: 292,
        box_count: 4,
      },
      {
        id: "444501",
        name: "Maury Lie Detector",
        url: "https://i.imgflip.com/9iz9.jpg",
        width: 381,
        height: 378,
        box_count: 2,
      },
      {
        id: "61582",
        name: "Creepy Condescending Wonka",
        url: "https://i.imgflip.com/1bim.jpg",
        width: 550,
        height: 545,
        box_count: 2,
      },
      {
        id: "1232104",
        name: "Pepperidge Farm Remembers",
        url: "https://i.imgflip.com/qep4.jpg",
        width: 500,
        height: 500,
        box_count: 2,
      },
      {
        id: "13036679",
        name: "Heavy Breathing Cat",
        url: "https://i.imgflip.com/7rf5z.jpg",
        width: 373,
        height: 344,
        box_count: 2,
      },
      {
        id: "61516",
        name: "Philosoraptor",
        url: "https://i.imgflip.com/1bgs.jpg",
        width: 500,
        height: 500,
        box_count: 2,
      },
      {
        id: "28034788",
        name: "Marvel Civil War 1",
        url: "https://i.imgflip.com/govs4.jpg",
        width: 423,
        height: 734,
        box_count: 2,
      },
    ],
  },
};

let oneLine = [];
let twoLines = [];

function memesSort(base) {
  // sépare en deux tableaux les memes avec une image simple ou double
  for (i = 0; i < base.data.memes.length; i++) {
    if (base.data.memes[i].height >= base.data.memes[i].width) {
      twoLines.push(base.data.memes[i]);
    } else {
      oneLine.push(base.data.memes[i]);
    }
  }
}

memesSort(memeBase);

function getRandomArbitrary(min, max) {
  // prend un nombre entier au hasard entre deux valeurs
  return Math.random() * (max - min) + min;
}

function displayDoubleMeme(n) {
  // affiche le meme à l'index n du tableau twolines
  let imageMeme = document.createElement("img");
  imageMeme.src = twoLines[n].url;
  imageMeme.width = "300";
  let divJoke = document.getElementById("meme");
  divJoke.innerHTML = "";
  divJoke.appendChild(imageMeme);
}

getAMeme.onclick = () => {
  // si clique, affiche un meme du tableau two lines d'un nombre random
  let n = parseInt(getRandomArbitrary(0, twoLines.length));
  displayDoubleMeme(n);
};

/* ---------------- API BLAGUE ------------------------------ */

let urlJoke = "https://official-joke-api.appspot.com/jokes/programming/random";

getAJoke.onclick = () => {
  fetch(urlJoke)
    .then(function (res) {
      // ticket de caisse
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      // produit
      document.getElementById("joke").innerHTML = value[0].setup; // affiche le setup de la baque
      document.getElementById("response").innerHTML = value[0].punchline; // affiche la chute de la blague
      return joke, response;
    })
    .catch(function (err) {}); // formulaire de réclamations
};

/* ----------------- API METEO -------------------------------------*/

// variables météo

  const urlMeteo = "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&hourly=temperature_2m&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=auto";
  const intemperies = document.getElementById("intemperies");
  const colorDay = "#acbefe";
  const colorNight = "#293254";
  const linearLeverSoleil = "linear-gradient(180deg, #080060 0%, #89A3FF 44.79%, #FAE082)";
  const linearCoucherSoleil ="linear-gradient(180deg, #0E0036 0%, #293254 13.02%, #ACBEFE 65.1%, rgba(198, 172, 254, 0.62) 81.25%, rgba(255, 166, 230, 0.55) 85.94%, rgba(250, 224, 130, 0.85) 96.35%)";
  let codeWeather ;
  let nowParsed ;
  let now ;
  let nowHour ;
  const cb = document.querySelector('#checkbox3')


// gestion du fond en fonction de l'heure de la journée
  function backgroundHours(timeToTest){   
    if (timeToTest > 8.5 && timeToTest < 16.5) {
      // jour
      document.body.style.backgroundColor = colorDay;
    } else if (timeToTest >= 8 && timeToTest <= 8.5) {
      // lever du soleil
      document.body.style.background = linearLeverSoleil;
    } else if (timeToTest >= 16.5 && timeToTest <= 17) {
      // coucher du soleil
      document.body.style.background = linearCoucherSoleil;
    } else {
      document.body.style.backgroundColor = colorNight; // nuit
    }
  }

  // gestion de l'heure réelle
  function trueTime(){
    document.getElementById('inputHour').value = null
    document.getElementById('inputMeteo').value = null
    now = new Date()
    nowHour = now.getHours("fr-FR");
    let nowMinutes = now.getUTCMinutes("fr-FR")
    if (nowMinutes<30){
      now= parseInt(nowHour)
    }else{
      now = parseInt(nowHour)+0.5
    }
  nowHour = parseInt(now)
  backgroundHours(now)
  }
  trueTime()

// gestion des pictos et fonds d'intempéries
  function pictoMeteo (codeMeteo){
    const symbole = document.createElement("img");
          if (nowHour > 8 && nowHour < 17) {
            switch (codeMeteo) {
              case 0: // sunny
                symbole.src = "mm_api_symbols/wsymbol_0001_sunny.png";
                intemperies.style.backgroundImage = "url('soleil.png')";
                intemperies.style.backgroundRepeat = "no-repeat";
                intemperies.style.backgroundSize ="cover"
                intemperies.style.animation = "none"
                break;
              case 1: // mainly sunny
                symbole.src = "mm_api_symbols/wsymbol_0002_sunny_intervals.png";
                intemperies.style.backgroundImage = "url('soleil.png')";
                intemperies.style.backgroundRepeat = "no-repeat";
                intemperies.style.backgroundSize ="cover"
                intemperies.style.animation = "none"
                break;
              case 2: // white cloud
                symbole.src = "mm_api_symbols/wsymbol_0003_white_cloud.png";
                intemperies.style.backgroundImage = "url('white-big-cloud.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundRepeat = "no-repeat";
                intemperies.style.backgroundSize = "auto";
                intemperies.style.animation = "none"
                break;
              case 3: // mostly cloudy
                symbole.src = "mm_api_symbols/wsymbol_0043_mostly_cloudy.png";
                intemperies.style.backgroundImage = "url('clouds.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "auto";
                intemperies.style.animation = "none"
                break;
              case 45: // mist
                symbole.src = "mm_api_symbols/wsymbol_0006_mist.png";
                 intemperies.style.backgroundImage = " url('brouillard.png')";
                 intemperies.style.backgroundColor = "#acacaccd";
                 intemperies.style.minHeight = "130%";
                 intemperies.style.backgroundSize = "auto";
                 intemperies.style.animation = "none"
              case 48: //fog
                symbole.src = "mm_api_symbols/wsymbol_0007_fog.png";
                intemperies.style.backgroundImage = " url('brouillard.png')";
                intemperies.style.backgroundColor = "#acacaccd";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "auto";
                intemperies.style.animation = "none"
                break;
              case 61: // light rain //
                symbole.src = "mm_api_symbols/wsymbol_0009_light_rain_showers.png";
                intemperies.style.backgroundImage = "url('rain-300x300.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "500px 500px ";
                intemperies.style.animation = "rainfall 0.5s linear infinite";
                intemperies.style.webkitAnimation = "rainfall 0.5s linear infinite";
                break;
              case 80: //cloudy + heavy rain //
              case 81:
              case 82:
                symbole.src ="mm_api_symbols/wsymbol_0018_cloudy_with_heavy_rain.png";
                intemperies.style.backgroundImage = "url('clouds.png'), url('rain-300x300.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "1000px 1000px ";
                intemperies.style.animation = "rainfall 4s linear infinite";
                intemperies.style.webkitAnimation = "rainfall 4s linear infinite";
                break;
              case 71: // light snow //
                symbole.src = "mm_api_symbols/wsymbol_0011_light_snow_showers.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "350px 200px ";
                intemperies.style.animation =
                  "snowfall 4s linear forwards infinite";
                intemperies.style.webkitAnimation =
                  "snowfall 4s linear forwards infinite";
                break;
              case 86: // heavy snow //
                symbole.src =
                  "mm_api_symbols/wsymbol_0020_cloudy_with_heavy_snow.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "700px 400px ";
                intemperies.style.animation =" snowfall 1s linear forwards infinite";
                intemperies.style.webkitAnimation =" snowfall 1s linear forwards infinite";
                break;
              case 95:
              case 96:
              case 99:
                symbole.src = "mm_api_symbols/wsymbol_0024_thunderstorms.png";
                body.style.animation ="lightningsDay 1.5s"
                break;
              case 66:
              case 67:
                symbole.src = "mm_api_symbols/wsymbol_0050_freezing_rain.png";
                intemperies.style = "transparent"
                break;
              case 75:
                symbole.src = "mm_api_symbols/wsymbol_0013_sleet_showers.png";
                intemperies.style = "transparent"
                break;
              case 71:
              case 73:
                symbole.src = "mm_api_symbols/wsymbol_0021_cloudy_with_sleet.png";
                intemperies.style = "transparent"
                break;
              default:
                symbole.src = "mm_api_symbols/wsymbol_0999_unknown.png";
                intemperies.style = "transparent"
            }
          } else {
            switch (codeMeteo) {
              case 0: // clear night
                symbole.src = "mm_api_symbols/wsymbol_0008_clear_sky_night.png";
                intemperies.style = "transparent"
                break;
              case 1: // partly cloudy
                symbole.src = "mm_api_symbols/wsymbol_0041_partly_cloudy_night.png";
                intemperies.style.backgroundImage = "url('white-big-cloud.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundRepeat = "no-repeat";
                intemperies.style.backgroundSize = "auto"; 
                intemperies.style.animation = "none"
                break;
              case 2: // mostly cloudy
                symbole.src = "mm_api_symbols/wsymbol_0044_mostly_cloudy_night.png";
                intemperies.style.backgroundImage = "url('white-big-cloud.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundRepeat = "no-repeat";
                intemperies.style.backgroundSize = "auto";
                intemperies.style.animation = "none"
                break;
              case 51:
                symbole.src = "mm_api_symbols/wsymbol_0066_drizzle_night.png";
                intemperies.style = "transparent"
                break;
              case 3: // cloudy
                symbole.src = "mm_api_symbols/wsymbol_0042_cloudy_night.png";
                intemperies.style.backgroundImage = "url('clouds.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "auto";
                intemperies.style.animation = "none"
                break;
              case 61: // light rain
                symbole.src ="mm_api_symbols/wsymbol_0025_light_rain_showers_night.png";
                intemperies.style.backgroundImage = "url('rain-300x300.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "500px 500px ";
                intemperies.style.animation = "rainfall 0.5s linear infinite";
                intemperies.style.webkitAnimation = "rainfall 0.5s linear infinite";
                break;
              case 85: // light snow
                symbole.src ="mm_api_symbols/wsymbol_0027_light_snow_showers_night.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "350px 200px ";
                intemperies.style.animation = "snowfall 4s linear forwards infinite";
                intemperies.style.webkitAnimation ="snowfall 4s linear forwards infinite";
                break;
              case 80:
              case 81:
              case 82: // cloudy rainy
                symbole.src ="mm_api_symbols/wsymbol_0034_cloudy_with_heavy_rain_night.png";
                intemperies.style.backgroundImage = "url('clouds.png'), url('rain-300x300.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "1000px 1000px ";
                intemperies.style.animation = "rainfall 4s linear infinite";
                intemperies.style.webkitAnimation = "rainfall 4s linear infinite";
                break;
              case 86: //cloudy snowy
                symbole.src ="mm_api_symbols/wsymbol_0036_cloudy_with_heavy_snow_night.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "700px 400px ";
                intemperies.style.animation = "snowfall 1s linear forwards infinite";
                intemperies.style.webkitAnimation = "snowfall 1s linear forwards infinite";
                break;
              case 45: //mist
                symbole.src = "mm_api_symbols/wsymbol_0063_mist_night.png";
                 intemperies.style.backgroundImage = " url('brouillard.png')";
                 intemperies.style.minHeight = "130%";
                 intemperies.style.backgroundRepeat = "no-repeat";
                 intemperies.style.animation = "none"
                break;
              case 48: //fog
                symbole.src = "mm_api_symbols/wsymbol_0064_fog_night.png";
                 intemperies.style.backgroundImage = " url('brouillard.png')";
                 intemperies.style.backgroundRepeat = "no-repeat";
                 intemperies.style.minHeight = "130%";
                 intemperies.style.animation = "none"
                break;
              case 95:
              case 96:
              case 99: //thunderstorme //
                symbole.src = "mm_api_symbols/wsymbol_0040_thunderstorms_night.png";
                body.style.animation ="lightningsNight 1.5s"
                break;
              case 71: // light snow //
              case 73:
                symbole.src ="mm_api_symbols/wsymbol_0037_cloudy_with_sleet_night.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "350px 200px ";
                intemperies.style.animation = "snowfall 4s linear forwards infinite";
                intemperies.style.webkitAnimation = "snowfall 4s linear forwards infinite";
                break;
              case 75: // neige fondu 
                symbole.src = "mm_api_symbols/wsymbol_0029_sleet_showers_night.png";
                intemperies.style.backgroundImage = "url('neige.png')";
                intemperies.style.minHeight = "130%";
                intemperies.style.backgroundSize = "700px 400px ";
                intemperies.style.animation =" snowfall 1s linear forwards infinite";
                intemperies.style.webkitAnimation =" snowfall 1s linear forwards infinite";
                break;
              case 66:
              case 67: // freezing rain night
                symbole.src = "mm_api_symbols/wsymbol_0068_freezing_rain_night.png";
                intemperies.style = "transparent"
                break;
              default:
                symbole.src = "mm_api_symbols/wsymbol_0999_unknown.png";
                intemperies.style = "transparent"
            }
          }
          let divWeather = document.getElementById("weatherIcone");
          divWeather.innerHTML = "";
          divWeather.appendChild(symbole);
    }

// gestion des temperatures 
function asynchrone() {
  fetch(urlMeteo)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      document.getElementById("temp").innerHTML =
        "Temperature actuelle : " + data.hourly.temperature_2m[nowHour] +" °C";
      document.getElementById("min").innerHTML =
        "Minimale : " + data.daily.temperature_2m_min[0] + " °C";
      document.getElementById("max").innerHTML =
        "Maximale : " + data.daily.temperature_2m_max[0] + " °C";

      // affichage des pictos et fonds intempéries
      if (codeWeather == null) {
        codeWeather = data.current_weather.weathercode  // variable qui fait changer le picto de la méteo
        pictoMeteo(codeWeather)
      }
    })
    .catch(function (erreurs) {});
}
asynchrone()

// gestion des tests en fonction de l'heure et du code Meteo
function demoTime(){
  now =  document.getElementById('inputHour').value 
  nowHour = parseInt(now)
  backgroundHours(now)
  asynchrone()
  cb.checked = false
}

function demoMeteo() {
  codeWeather = document.getElementById("inputMeteo").value
  codeWeather = parseInt(codeWeather)
  pictoMeteo(codeWeather)
  cb.checked = false
}

function reboot () {
  if (cb.checked == true) {
    trueTime()
    codeWeather = null
    asynchrone()
  }
}
reboot()

// gestions légendes des outils de démo 
const targetHour = document.getElementById("tooltipDivHour");
const tooltipHour = document.getElementById("tooltipTextHour");

targetHour.addEventListener('mouseover', () => {
  tooltipHour.style.display = 'block'; // change display to 'block' on mouseover
}, false);

targetHour.addEventListener('mouseleave', () => {
  tooltipHour.style.display = 'none'; // change display to 'none' on mouseleave
}, false);

const targetMeteo = document.getElementById("tooltipDivMeteo");
const tooltipMeteo = document.getElementById("tooltipTextMeteo");

targetMeteo.addEventListener('mouseover', () => {
  tooltipMeteo.style.display = 'block'; // change display to 'block' on mouseover
}, false);

targetMeteo.addEventListener('mouseleave', () => {
  tooltipMeteo.style.display = 'none'; // change display to 'none' on mouseleave
}, false);

/* ---------------------- API NEWS -------- */

// fetch sur l'appli de news
 const urlNews = "https://newsdata.io/api/1/news?apikey=pub_1395503c37b0848da13441770cfe5743622fd&country=fr&category=technology&language=fr,en";
 fetch(urlNews)
  .then((response) => response.json())
  // .then((data) => console.log(data))
  // .then((data) => console.log(data.status))
  .then(function (data) {

for (var i = 0; i < 3; i++) {
  // pour prendre uniquements les trois derniers articles parus
  title = data.results[i].title;
  description = data.results[i].description;
  liensNews = data.results[i].link;
  imgsrc = data.results[i].image_url;

  function generate_table() {
    var body = document.getElementById("news"); // désigne l'endroit (body) où sera inséré le tableau
    var tbl = document.createElement("table"); // crée un élément <table> et un élément tblBody, qui est le contenu du tableau
    var tblBody = document.createElement("tbody");
    var column = document.createElement("td"); // crée une colonne qui s'étend sur 3 lignes (rowSpan)
    column.rowSpan = "3";
  
    tbl.setAttribute("lien", liensNews);
  
    img = document.createElement("IMG"); // création de l'élément image
    if (data.results[i].image_url == null) {
      img.src =
        "https://soniseo.com/wp-content/uploads/2017/05/technology-news-sites.jpg";
    } else {
      img.src = data.results[i].image_url;
    }
    img.style.width = "100px";
    img.style.height = "auto";
    img.setAttribute("id", "imagesNews");
  
    column.appendChild(img); // ajout de l'image à l'élément parent colonne
    tblBody.appendChild(column); // ajout de la colonne à l'élément parent "contenu du tableau" (tblBody)
  
    var row = document.createElement("tr"); // création d'une ligne et de son contenu (rowText)
    var rowText = document.createTextNode(title);
    row.appendChild(rowText); // ajout du contenu à l'élément parent ligne (row)
    row.setAttribute("id", "titleArticle");
  
    row.onclick = () => {
      // attribue le lien à cliquer à la news
      window.open(tbl.getAttribute("lien"), "_blank");
    };
  
    var row2 = document.createElement("tr"); // création d'une deuxième ligne et de son contenu
    var row2text = document.createTextNode(description);
  
    row2.appendChild(row2text); // ajout du contenu à l'élément parent ligne2 (row2)
    row2.setAttribute("id", "descriptionArticle"); // ajout d'un id pour la gestion du style
  
    row.append(row2); // ajout de la ligne 2 à l'élément parent ligne 1 (row)
  
    tblBody.appendChild(row); // ajout des lignes (élément parent row) au contenu du tableau (élément parent tblBody)
    tbl.appendChild(tblBody); // ajout du contenu du tableau au tableau
    body.appendChild(tbl); // ajout du tableau à l'élément HTML "news"
  }
  generate_table();

}})