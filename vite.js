const art = [
  {
  name : "We Will Be Reunited",
  img : "m.webp",
  region : "Other",
  },
  {
  name : "Welcome To Tevyat",
  img : "1.0.webp",
  region : "Mondstadt",
  },
    {
  name : "A New Star Approaches",
  img : "1.1.avif",
  region : "Mondstadt",
  },
  {
  name : "The Chalk Prince and the Dragon",
  img : "1.2.jpg",
  region : "",
  },
  {
  name : "All That Glitters",
  img : "xiaos.jpg",
  region : "",
  },
  {
  name : "Invitation of Windblume",
  img : "windblume.jpg",
  region : "",
  },
  {
  name : "Beneath the Light of Jadeite",
  img : "jadite.jpg",
  region : "",
  },
  {
  name : "Midsummer Island Adventure",
  img : "midsummer.jpg",
  region : "",
  },
  {
  name : "The Immovable God and the Eternal Euthymia",
  img : "god.jpg",
  region : "",
  },
  {
  name : "Floating World Under the Moonlight",
  img : "floating.jpg",
  region : "",
  },
    {
  name : "Into the Perilous Labyrinth of Fog",
  img : "",
  region : "",
  },
    {
  name : "Shadows Amidst Snowstorms",
  img : "",
  region : "",
  },
    {
  name : "Fleeting Colors in Flight",
  img : "",
  region : "",
  },
    {
  name : "When the Sakura Bloom",
  img : "",
  region : "",
  },
    {
  name : "Zephyr of the Violet Garden",
  img : "",
  region : "",
  },
    {
  name : "Hidden Dreams in the Depths",
  img : "",
  region : "",
  },
    {
  name : "Summer Fantasia",
  img : "",
  region : "",
  },
    {
  name : "The Morn a Thousand Roses Brings",
  img : "",
  region : "",
  },
    {
  name : "King Deshret and the Three Magi",
  img : "",
  region : "",
  },
    {
  name : "Akasha Pulses, the Kalpa Flame Rises",
  img : "",
  region : "",
  },
    {
  name : "All Senses Clear, All Existence Void",
  img : "",
  region : "",
  },
    {
  name : "The Exquisite Night Chimes",
  img : "",
  region : "",
  },
    {
  name : "Windblume's Breath",
  img : "",
  region : "",
  },
    {
  name : "A Parade of Providence",
  img : "",
  region : "",
  },
    {
  name : "Duel! The Summoners' Summit!",
  img : "",
  region : "",
  },
    {
  name : " Secret Summer Paradise",
  img : "",
  region : "",
  },
    {
  name : "As Light Rain Falls Without Reason",
  img : "fontaine_character.webp",
  region : "Fontaine",  
  },
    {
  name : "To the Stars Shining in the Depths",
  img : "",
  region : "",
  },
      {
  name : "Masquerade of the Guilty",
  img : "",
  region : "",
  },

      {
  name : "Roses and Muskets",
  img : "",
  region : "",
  },
      {
  name : "Vibrant Harriers Aloft in Spring Breeze",
  img : "",
  region : "",
  },
      {
  name : "Blades Weaving Betwixt Brocade",
  img : "",
  region : "",
  },
      {
  name : "Two Worlds Aflame, the Crimson Night Fades",
  img : "",
  region : "",
  },
      {
  name : "Summertide Scales and Tales",
  img : "",
  region : "",
  },
      {
  name : "Flowers Resplendent on the Sun-Scorched Sojourn",
  img : "",
  region : "",
  },
      {
  name : "The Rainbow Destined to Burn",
  img : "",
  region : "",
  },
      {
  name : "Tapestry of Spirit and Flame",
  img : "",
  region : "",
  },
      {
  name : "Incandescent Ode of Resurrection",
  img : "",
  region : "",
  },
      {
  name : "Moonlight Amidst Dreams",
  img : "",
  region : "",
  },
      {
  name : "Day of the Flame's Return",
  img : "",
  region : "",
  },
      {
  name : "Paralogism",
  img : "",
  region : "",
  },
      {
  name : "Void Star's Advent",
  img : "",
  region : "",
  },
      {
  name : "A Space and Time for You",
  img : "",
  region : "",
  },
      {
  name : " Astral Actuation",
  img : "",
  region : "",
  },
    {
  name : "Sunspray Summer Resort",
  img : "",
  region : "",
  },
      {
  name : "A Dance of Snowy Tides and Hoarfrost Groves",
  img : "",
  region : "",
  },
    {
  name : "Genshin Impact 5th Anniversary",
  img : "",
  region : "",
  },
    {
  name : "Moonsong of the Groves",
  img : "",
  region : "",
  },  
      {
  name : "The Lone Light Knocks at Night",
  img : "",
  region : "",
  },  
      {
  name : "An Elegy for Faded Moonlight",
  img : "",
  region : "",
  },  
      {
  name : " Phantom Night Candlelight",
  img : "",
  region : "",
  },  
      {
  name : "",
  img : "",
  region : "A Nocturne of the Far North",
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