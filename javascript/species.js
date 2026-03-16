

const ShipsURl = 'https://starwars-databank-server.onrender.com/api/v1/species?page=2&limit=15'
const speciesCard = document.querySelector("#species")
fetch(ShipsURl)
    .then((res) => res.json())
    .then(json =>{
        const species = json.data
        renderSpecies(species)
    })


    .catch((error) => console.error(error))

       const renderSpecies = async (species) => {
    
         species.forEach(s => {
          
            const div = document.createElement('div')
            const ImgEl = document.createElement('img')
            const NameEl = document.createElement('h1')
            const DesEl = document.createElement('p')
    
            const name = s.name
            const description = s.description
            const charImg = s.image
    
            ImgEl.classList.add('charImg')
            div.classList.add('charDiv')
    
    
            ImgEl.src = charImg
            NameEl.innerText = name
            DesEl.innerText = `Description: ${description}`
    
    
            div.append(ImgEl, NameEl, DesEl)
            speciesCard.append(div)
    
        });
    
    }

