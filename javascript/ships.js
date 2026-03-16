const ShipsURl = 'https://starwars-databank-server.onrender.com/api/v1/vehicles?page=2&limit=15'
const shipCard = document.querySelector("#ship")
fetch(ShipsURl)
    .then((res) => res.json())
    .then(json =>{
        const ships = json.data
        renderShip(ships)
    })


    .catch((error) => console.error(error))


    const renderShip = async (ship) => {
    
        ship.forEach(s => {
          
            const charDiv = document.createElement('div')
            const charImgEl = document.createElement('img')
            const charNameEl = document.createElement('h1')
            const charDesEl = document.createElement('p')
    
            const name = s.name
            const description = s.description
            const charImg = s.image
    
            charImgEl.classList.add('charImg')
            charDiv.classList.add('charDiv')
    
    
            charImgEl.src = charImg
            charNameEl.innerText = name
            charDesEl.innerText = `Description: ${description}`
    
    
            charDiv.append(charImgEl, charNameEl, charDesEl)
            shipCard.append(charDiv)
    
        });
    
    }