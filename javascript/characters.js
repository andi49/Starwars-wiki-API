const jediCard = document.querySelector(".shell-card")

//fetch star wars data from both akabab and star wars data bank api
async function fetchStarWarsData() {
    const akababUrl = "https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json";
    const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"


    try {

        //  fetch the data paralell with eachother for faster loading
        const [akababRes, dataBankRes] = await Promise.all([
            fetch(akababUrl),
            fetch(dataBankUrl)

        ])

        const akababData = await akababRes.json()
        const dataBankData = await dataBankRes.json()
        const dataBankCharacters = dataBankData.data

        // combine data
        const combineData = akababData.map(char => {
            // find matching Names from both apis 
            const matchNames = dataBankCharacters.find(dbChar => dbChar.name === char.name)
          
            const newData = {
                name: char.name,
                image: char.image,
                affiliations: char.affiliations,
                description: matchNames ? matchNames.description : "No description found"
            }

            return newData
        })
        console.log('Combined data:', combineData)
        // find sith
        const sith = combineData.filter(char => char.affiliations?.includes("Sith"));
        console.log("Hittade sith:", sith)

        // find Jedi
        const jedi = combineData.filter(char => char.affiliations?.includes("Jedi Order"));
        console.log("Hittade jedi:", jedi)

       const  renderJedi = async ()=>{
        console.log(jediCard)
            jedi.forEach(j => {
                const jediDiv = document.createElement('div')
                //const charImgEl = document.createElement('img')
                const charNameEl = document.createElement('h1')
                const charDesEl = document.createElement('p')
               
                const name = j.name
                const description = j.description
                const affiliations = j.affiliations
                
             
              // charImgEl.src = j.image
                charNameEl.innerText = `${name}`
                charDesEl.innerText = `Description: ${description}`
             

                 jediDiv.append(charNameEl,charDesEl)
                 jediCard.append(jediDiv)
                
            });
        }
renderJedi()

    } catch (err) {
        console.error('does not work')


    }
}

fetchStarWarsData()

