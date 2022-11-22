const url = "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobsEtFormations?romes=M1805&latitude=48.845&longitude=2.3752&radius=30&diploma=6%20%28Licence...%29&insee=75010&sources=&caller=me%40gmail.com"

async function asyncrone() {
    const result = await fetch(url)
    const response = await result.json()
    console.log(response)
}

asyncrone()