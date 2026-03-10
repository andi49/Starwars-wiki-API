const API_BASE =
  "https://starwars-databank-server.vercel.app/api/v1/characters";

const statusEl = document.getElementById("status");
const imageEl = document.getElementById("character-image");
const contentEl = document.getElementById("character-content");
const nameEl = document.getElementById("character-name");
const descriptionEl = document.getElementById("character-description");
const refreshButton = document.getElementById("refresh-button");

function setLoadingState(isLoading) {
  refreshButton.disabled = isLoading;
  refreshButton.textContent = isLoading ? "Loading..." : "New Character";
}

function renderCharacter(character) {
  const name = character?.name || "Unknown Character";
  const description =
    character?.description ||
    "No description available for this character yet.";
  const image = character?.image || "";

  nameEl.textContent = name;
  descriptionEl.textContent = description;

  if (image) {
    imageEl.src = image;
    imageEl.alt = `Portrait of ${name}`;
    imageEl.hidden = false;
  } else {
    imageEl.hidden = true;
    imageEl.removeAttribute("src");
    imageEl.alt = "";
  }

  statusEl.textContent = "Transmission received.";
  contentEl.hidden = false;
}

async function getCharacterCount() {
  const response = await fetch(`${API_BASE}?page=1&limit=1`);
  if (!response.ok) {
    throw new Error(`Could not read character count (${response.status}).`);
  }

  const payload = await response.json();
  const total = Number(payload?.info?.total || 0);
  if (!Number.isFinite(total) || total < 1) {
    throw new Error("Character count is missing in API response.");
  }

  return total;
}

async function fetchCharacterByPage(page) {
  const response = await fetch(`${API_BASE}?page=${page}&limit=1`);
  if (!response.ok) {
    throw new Error(`Could not fetch character (${response.status}).`);
  }

  const payload = await response.json();
  return payload?.data?.[0] || null;
}

async function loadCharacterOfTheDay() {
  setLoadingState(true);
  statusEl.textContent = "Scanning Jedi Archives...";

  try {
    const total = await getCharacterCount();
    const randomPage = Math.floor(Math.random() * total) + 1;
    const character = await fetchCharacterByPage(randomPage);

    if (!character) {
      throw new Error("The API returned an empty character record.");
    }

    renderCharacter(character);
  } catch (error) {
    statusEl.textContent = `Unable to fetch data right now. ${error.message}`;
    contentEl.hidden = true;
    imageEl.hidden = true;
  } finally {
    setLoadingState(false);
  }
}

refreshButton.addEventListener("click", loadCharacterOfTheDay);
window.addEventListener("DOMContentLoaded", loadCharacterOfTheDay);
