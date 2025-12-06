import "./style.css";
const art = [
  {
    name: "We Will Be Reunited",
    img: "/Images/m.webp",
    region: "Other",
  },
  {
    name: "Welcome To Tevyat",
    img: "/Images/1.0.webp",
    region: "Mondstadt",
  },
  {
    name: "A New Star Approaches",
    img: "/Images/1.1.avif",
    region: "Liyue",
  },
  {
    name: "The Chalk Prince and the Dragon", 
    img: "/Images/1.2.jpg",
    region: "Mondstadt",
  },
  {
    name: "All That Glitters",
    img: "/Images/xiaos.jpg",
    region: "Liyue",
  },
  {
    name: "Invitation of Windblume",
    img: "/Images/windblume.jpg",
    region: "Mondstadt",
  },
  {
    name: "Beneath the Light of Jadeite",
    img: "/Images/jadite.jpg",
    region: "Liyue",
  },
  {
    name: "Midsummer Island Adventure",
    img: "/Images/midsummer.jpg",
    region: "Mondstadt",
  },
  {
    name: "The Immovable God and the Eternal Euthymia",
    img: "/Images/god.jpg",
    region: "Inazuma",
  },
  {
    name: "Floating World Under the Moonlight",
    img: "/Images/floating.jpg",
    region: "Inazuma",
  },
  {
    name: "Into the Perilous Labyrinth of Fog",
    img: "/Images/into.jpg",
    region: "Liyue",
  },
  {
    name: "Shadows Amidst Snowstorms",
    img: "/Images/shadows.jpg",
    region: "Mondstadt",
  },
  {
    name: "Fleeting Colors in Flight",
    img: "/Images/fleeting.jpg",
    region: "Liyue",
  },
  {
    name: "When the Sakura Bloom",
    img: "/Images/sakura.png",
    region: "Inazuma",
  },
  {
    name: "Zephyr of the Violet Garden",
    img: "/Images/zephyr.jpg",
    region: "Inazuma",
  },
  {
    name: "Hidden Dreams in the Depths",
    img: "/Images/hidden.png",
    region: "Liyue",
  },
  {
    name: "Summer Fantasia",
    img: "/Images/summer.jpg",
    region: "Other",
  },
  {
    name: "The Morn a Thousand Roses Brings",
    img: "/Images/morn.jpg",
    region: "Sumeru",
  },
  {
    name: "King Deshret and the Three Magi",
    img: "/Images/king.jpg",
    region: "Sumeru",
  },
  {
    name: "Akasha Pulses, the Kalpa Flame Rises",
    img: "/Images/akasha.jpg",
    region: "Sumeru",
  },
  {
    name: "All Senses Clear, All Existence Void",
    img: "/Images/all.jpg",
    region: "Sumeru",
  },
  {
    name: "The Exquisite Night Chimes",
    img: "/Images/exquisite.jpg",
    region: "Liyue",
  },
  {
    name: "Windblume's Breath",
    img: "/Images/breath.jpg",
    region: "Mondstadt",
  },
  {
    name: "A Parade of Providence",
    img: "/Images/parade.jpg",
    region: "Sumeru",
  },
  {
    name: "Duel! The Summoners' Summit!",
    img: "/Images/duel.jpg",
    region: "Sumeru",
  },
  {
    name: " Secret Summer Paradise",
    img: "/Images/secret.jpg",
    region: "Other",
  },
  {
    name: "As Light Rain Falls Without Reason",
    img: "/Images/as.webp",
    region: "Fontaine",
  },
  {
    name: "To the Stars Shining in the Depths",
    img: "/Images/stars.webp",
    region: "Fontaine",
  },
  {
    name: "Masquerade of the Guilty",
    img: "/Images/mas.webp",
    region: "Fontaine",
  },

  {
    name: "Roses and Muskets",
    img: "/Images/roses.jpg",
    region: "Fontaine",
  },
  {
    name: "Vibrant Harriers Aloft in Spring Breeze",
    img: "/Images/vibrant.jpg",
    region: "Liyue",
  },
  {
    name: "Blades Weaving Betwixt Brocade",
    img: "/Images/blades.webp",
    region: "Fontaine ",
  },
  {
    name: "Two Worlds Aflame, the Crimson Night Fades",
    img: "/Images/two.jpg",
    region: "Fontaine",
  },
  {
    name: "Summertide Scales and Tales",
    img: "/Images/summertime.jpg",
    region: "Other",
  },
  {
    name: "Flowers Resplendent on the Sun-Scorched Sojourn",
    img: "/Images/flowers.jpg",
    region: "Natlan",
  },
  {
    name: "The Rainbow Destined to Burn",
    img: "/Images/the.jpg",
    region: "Natlan",
  },
  {
    name: "Tapestry of Spirit and Flame",
    img: "/Images/tapestry.jpg",
    region: "Natlan",
  },
  {
    name: "Incandescent Ode of Resurrection",
    img: "/Images/ode.jpg",
    region: "Natlan",
  },
  {
    name: "Moonlight Amidst Dreams",
    img: "/Images/moonlight.jpg",
    region: "Inazuma",
  },
  {
    name: "Day of the Flame's Return",
    img: "/Images/day.jpg",
    region: "Natlan",
  },
  {
    name: "Paralogism",
    img: "/Images/paralogism.jpg",
    region: "Mondstadt",
  },
  {
    name: "Void Star's Advent",
    img: "/Images/void.jpg",
    region: "Other",
  },
  {
    name: "A Space and Time for You",
    img: "/Images/space.webp",
    region: "Other",
  },
  {
    name: " Astral Actuation",
    img: "/Images/astral.jpg",
    region: "Natlan",
  },
  {
    name: "Sunspray Summer Resort",
    img: "/Images/sunspray.jpg",
    region: "Natlan",
  },
  {
    name: "A Dance of Snowy Tides and Hoarfrost Groves",
    img: "/Images/dance.jpg",
    region: "Nodkrai",
  },
  {
    name: "Genshin Impact 5th Anniversary",
    img: "/Images/5th.webp",
    region: "Other",
  },
  {
    name: "Moonsong of the Groves",
    img: "/Images/moonsong.webp",
    region: "Nodkrai",
  },
  {
    name: "The Lone Light Knocks at Night",
    img: "/Images/lone.webp",
    region: "Nodkrai",
  },
  {
    name: "An Elegy for Faded Moonlight",
    img: "/Images/elegy.jpg",
    region: "Nodkrai",
  },
  {
    name: " Phantom Night Candlelight",
    img: "/Images/phantom.jpg",
    region: "Other",
  },
  {
    name: "A Nocturne of the Far North",
    img: "/Images/nocturne.jpg",
    region: "Nodkrai",
  },
];

function inject(art) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class = "art">
      <img class="img" src="${art.img}" />
      <h2 class = "name">${art.name}</h2>
      <h3 class = "region">${art.region}</h3>
    </div>`
  );

  const modal = document.querySelector(".modal");
  const modalimg = document.querySelector(".modalimg");
  const artimage = document.querySelector(".art .img");
  artimage.addEventListener("click", () =>{
    modalimg.src = art.img;
    modal.style.display = "flex"
  })
  modal.addEventListener("click", () => {
    modal.style.display = "none"
  })
}
art.forEach((art) => inject(art));
function filterByRegion() {
  const filterRegion = document.querySelectorAll(".filter-art");
  const container = document.querySelector(".container");
  filterRegion.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      container.innerHTML = "";
      const region = event.target.textContent.trim();
      let filter = art;
      if (region === "Mondstadt") {
        filter = art.filter((art) => art.region === "Mondstadt");
      }
      if (region === "Liyue") {
        filter = art.filter((art) => art.region === "Liyue");
      }
      if (region === "Inazuma") {
        filter = art.filter((art) => art.region === "Inazuma");
      }
      if (region === "Sumeru") {
        filter = art.filter((art) => art.region === "Sumeru");
      }
      if (region === "Fontaine") {
        filter = art.filter((art) => art.region === "Fontaine");
      }
      if (region === "Natlan") {
        filter = art.filter((art) => art.region === "Natlan");
      }
      if (region === "Nodkrai") {
        filter = art.filter((art) => art.region === "Nodkrai");
      }
      if (region === "Other") {
        filter = art.filter((art) => art.region === "Other");
      }
      filter.forEach((art) => inject(art));
    });
  });
}
filterByRegion();
function addart(){
  const newname = document.querySelector(".artname");
  const newregion = document.querySelector(".newregion")
  const newimage = document.querySelector(".imagefile")
  const btn = document.querySelector(".btn")
    btn.addEventListener("click", () => {
      const name = newname.value.trim();
      const region = newregion.value.trim();
      const file = newimage.files[0];

       if (!name || !region || !file) {
      alert("Please fill out all fields.");
      return;
    }
      const imgURL = URL.createObjectURL(file);
      
    const newArt = {
      name: name,
      region: region,
      img: imgURL,
    };
     art.push(newArt);
     inject(newArt);
     newname.value = "";
    newregion.value = "";
    newimage.value = "";
})
}
addart()