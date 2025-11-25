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
  img : "into.jpg",
  region : "",
  },
    {
  name : "Shadows Amidst Snowstorms",
  img : "shadows.jpg",
  region : "",
  },
    {
  name : "Fleeting Colors in Flight",
  img : "fleeting.jpg",
  region : "",
  },
    {
  name : "When the Sakura Bloom",
  img : "sakura.png",
  region : "",
  },
    {
  name : "Zephyr of the Violet Garden",
  img : "zephyr.jpg",
  region : "",
  },
    {
  name : "Hidden Dreams in the Depths",
  img : "hidden.png",
  region : "",
  },
    {
  name : "Summer Fantasia",
  img : "summer.jpg",
  region : "",
  },
    {
  name : "The Morn a Thousand Roses Brings",
  img : "morn.jpg",
  region : "",
  },
    {
  name : "King Deshret and the Three Magi",
  img : "king.jpg",
  region : "",
  },
    {
  name : "Akasha Pulses, the Kalpa Flame Rises",
  img : "akasha.jpg",
  region : "",
  },
    {
  name : "All Senses Clear, All Existence Void",
  img : "all.jpg",
  region : "",
  },
    {
  name : "The Exquisite Night Chimes",
  img : "exquisite.jpg",
  region : "",
  },
    {
  name : "Windblume's Breath",
  img : "breath.jpg",
  region : "",
  },
    {
  name : "A Parade of Providence",
  img : "parade.jpg",
  region : "",
  },
    {
  name : "Duel! The Summoners' Summit!",
  img : "duel.jpg",
  region : "",
  },
    {
  name : " Secret Summer Paradise",
  img : "secret.jpg",
  region : "",
  },
    {
  name : "As Light Rain Falls Without Reason",
  img : "as.webp",
  region : "Fontaine",  
  },
    {
  name : "To the Stars Shining in the Depths",
  img : "stars.webp",
  region : "",
  },
      {
  name : "Masquerade of the Guilty",
  img : "mas.webp",
  region : "",
  },

      {
  name : "Roses and Muskets",
  img : "roses.jpg",
  region : "",
  },
      {
  name : "Vibrant Harriers Aloft in Spring Breeze",
  img : "vibrant.jpg",
  region : "",
  },
      {
  name : "Blades Weaving Betwixt Brocade",
  img : "blades.webp",
  region : "",
  },
      {
  name : "Two Worlds Aflame, the Crimson Night Fades",
  img : "Two.jpg",
  region : "",
  },
      {
  name : "Summertide Scales and Tales",
  img : "summertime.jpg",
  region : "",
  },
      {
  name : "Flowers Resplendent on the Sun-Scorched Sojourn",
  img : "flowers.jpg",
  region : "",
  },
      {
  name : "The Rainbow Destined to Burn",
  img : "The.jpg",
  region : "",
  },
      {
  name : "Tapestry of Spirit and Flame",
  img : "tapestry.jpg",
  region : "",
  },
      {
  name : "Incandescent Ode of Resurrection",
  img : "ode.jpg",
  region : "",
  },
      {
  name : "Moonlight Amidst Dreams",
  img : "moonlight.jpg",
  region : "",
  },
      {
  name : "Day of the Flame's Return",
  img : "day.jpg",
  region : "",
  },
      {
  name : "Paralogism",
  img : "paralogism.jpg",
  region : "",
  },
      {
  name : "Void Star's Advent",
  img : "void.jpg",
  region : "",
  },
      {
  name : "A Space and Time for You",
  img : "space.webp",
  region : "",
  },
      {
  name : " Astral Actuation",
  img : "Astral.jpg",
  region : "",
  },
    {
  name : "Sunspray Summer Resort",
  img : "sunspray.jpg",
  region : "",
  },
      {
  name : "A Dance of Snowy Tides and Hoarfrost Groves",
  img : "dance.jpg",
  region : "",
  },
    {
  name : "Genshin Impact 5th Anniversary",
  img : "5th.webp",
  region : "",
  },
    {
  name : "Moonsong of the Groves",
  img : "moonsong.webp",
  region : "",
  },  
      {
  name : "The Lone Light Knocks at Night",
  img : "lone.webp",
  region : "",
  },  
      {
  name : "An Elegy for Faded Moonlight",
  img : "elegy.jpg",
  region : "",
  },  
      {
  name : " Phantom Night Candlelight",
  img : "phantom.jpg",
  region : "",
  },  
      {
  name : "A Nocturne of the Far North",
  img : "nocturne.jpg",
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