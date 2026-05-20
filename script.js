const modal = document.getElementById("characterModal");

const data = {
  jalen: {
    name: "Jalen Red",
    role: "Main Protagonist",
    story: "Raised in a violent city where survival means everything. Jalen is forced into a world he never asked for.",
    connection: "Son of Marcus Reed. His choices shape the entire city war."
  },

  marcus: {
    name: "Marcus Reed",
    role: "Gang Leader / Father",
    story: "A former gang ruler now imprisoned, still controlling the streets from behind bars.",
    connection: "Father of Jalen. His past creates the main conflict."
  },

  amara: {
    name: "Amara Vaughn",
    role: "Influencer / Wild Card",
    story: "A powerful media figure controlling public perception of the city’s underground wars.",
    connection: "Romantic + strategic connection to Jalen."
  }
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {

    const key = card.dataset.character;

    document.getElementById("charName").innerText = data[key].name;
    document.getElementById("charRole").innerText = data[key].role;
    document.getElementById("charStory").innerText = data[key].story;
    document.getElementById("charConnection").innerText = data[key].connection;

    modal.classList.remove("hidden");
  });
});

document.getElementById("closeModal").onclick = () => {
  modal.classList.add("hidden");
};

document.querySelector(".modal-overlay").onclick = () => {
  modal.classList.add("hidden");
};