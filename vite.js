const art = [
  {
  name : "As Light Rain Falls Without Reason",
  img : "fontaine_character.webp",
  region : "Fontaine",  
  },
  {
  name : "We Will Be Reunited",
  img : "Welcome To Teyvat",
  region : "Other",
  },
  {
  name : "A New Star Approaches",
  img : "",
  region : "",
  },
  {
  name : "The Chalk Prince and the Dragon",
  img : "",
  region : "",
  },
  {
  name : "All That Glitters",
  img : "",
  region : "",
  },
  {
  name : "Invitation of Windblume",
  img : "",
  region : "",
  },
  {
  name : "Beneath the Light of Jadeite",
  img : "",
  region : "",
  },
  {
  name : "Midsummer Island Adventure",
  img : "",
  region : "",
  },
  {
  name : "The Immovable God and the Eternal Euthymia",
  img : "",
  region : "",
  },
  {
  name : "Floating World Under the Moonlight",
  img : "",
  region : "",
  },
    {
  name : "Into the Perilous Labyrinth of Fog",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
    {
  name : "",
  img : "",
  region : "",
  },
  

]

function inject(art){
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class = "art">
      <img scr "${art.img}"/>
      <h2>${art.name}</h2>
      <h3>${art.region}</h3>
    </div>`
  );
}

function filterByRegion(){
    const filterRegion = document.querySelectorAll(".filter-art")
    const container = document.querySelector(".container")
    filteritem.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      container.innerHTML = "";
      const region = event.target.textContent.trim().toLowerCase();
      let filter = art;
      if (region == "Mondstadt"){
        filter = art.filter((art) => art.region === "Mondstadt")
      }
      if (region == "Liyue"){
        filter = art.filter((art) => art.region === "Liyue")
      }
      if (region == "Inazuma"){
        filter = art.filter((art) => art.region === "Inazuma")
      }
      if (region == "Sumeru"){
        filter = art.filter((art) => art.region === "Sumeru")
      }
      if (region == "Fontaine"){
        filter = art.filter((art) => art.region === "Fontaine")
      }
      if (region == "Natlan"){
        filter = art.filter((art) => art.region === "Natlan")
      }
      if (region == "Nodkrai"){
        filter = art.filter((art) => art.region === "Nodkrai")
      }
      if (region == "Other"){
        filter = art.filter((art) => art.region === "Other")
      }
      }
      
    )})
}