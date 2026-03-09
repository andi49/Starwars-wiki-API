
  fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))