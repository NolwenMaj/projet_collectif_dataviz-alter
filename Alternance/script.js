
 
/* const url = "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobsEtFormations?romes=M1805&latitude=48.845&longitude=2.3752&radius=30&diploma=6%20%28Licence...%29&insee=75010&sources=&caller=me%40gmail.com"

async function asyncrone() {
    const result = await fetch(url)
    const response = await result.json()
    const responseTriee = response.jobs
    console.log(response)
}
asyncrone() */
const url = "https://api.pole-emploi.io/partenaire/offresdemploi/v2/referentiel/M1805/connexion/oauth2/access_token?realm=%2Fpartenaire"

fetch(url, {
    method : "post", 
    headers : new Headers({
        ContentType : "application/x-www-form-urlencoded" ,
        grant_type : "client_credentials" ,
        client_id  :"PAR_tafuturealternance_9a8a502893e4d7e24020f4c0d4bd708663e507f1b4b1634d6b1d12f24b40c6ea",
        client_secret :"92f56cbd4a4ddf707eee7cb95615c8dc9706c5fbf11404d08cd746251c76cb10",
        scope :"api_labonneboitev2" ,
    })
}) 

 //const base2 = "https://api.pole-emploi.io/partenaire/offresdemploi/v2/referentiel/M1805"*/
 //const base = "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token"

// si on avait un back : 
/*  const app = express()

 app.get("test", async(req,res)=>{
    constdate = await generateAccessToken()
    console.log(data);
    res.json(data);
 })


async function generateAccessToken (){
    const response = await axios({
        url: base + "/connexion/oauth2/access_token?realm=%2Fpartenaire",
        method : "post" ,
        data : "grant_type=client_credentials",
        auth : {
            client_id : "PAR_tafuturealternance_9a8a502893e4d7e24020f4c0d4bd708663e507f1b4b1634d6b1d12f24b40c6ea",
            client_secret : "92f56cbd4a4ddf707eee7cb95615c8dc9706c5fbf11404d08cd746251c76cb10",
        },

    });
    return (response.data) ;
    
}

console.log(generateAccessToken())


 */