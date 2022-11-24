//Import de puppeteer
const puppeteer = require("puppeteer");

// création d'un script qui va chercher le nom des memes sur apimemes
const scrapeMemes = async () => {
  // 1 - créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 2 - naviguer jusqu'à l'URL cible
  await page.goto(
    "https://apimeme.com/meme?meme=Skinhead-John-Travolta&top=&bottom="
  );

  // 3 - récupérer les données
  const result = await page.evaluate(() => {
    let memeInfos = document.querySelector("head > title").innerText;
    memeInfos = memeInfos.replace("×", " ");
    memeInfos = memeInfos.replace("(", " ");
    memeInfos = memeInfos.replace(")", " ");
    let dimensions = memeInfos.split(" ");
    let height = dimensions[3];
    let width = dimensions[2];
    let data = [width, height];

    return data;
  });

  // 4 - retourner les données et fermer le navigateur
  await browser.close();
  return result;
};

// appel de la fonction et affichage des données
scrapeMemes().then((value) => {
  console.log(value);
});
