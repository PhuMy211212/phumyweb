// ====== DOM READY ======
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("bunnyName");

  if (!savedName) {
    openRenameModal(true);
  } else {
    updateBunnyName(savedName);
  }

  loadData();
});

// ====== PET DATA ======
let pet = {
  name: localStorage.getItem("bunnyName") || "Bunny",
  health: 0,
  happiness: 0,
  exp: 0,
  carrot: 0
};

// ====== UPDATE UI ======
function updateUI() {
  updateBunnyName(pet.name);
  document.getElementById("health").value = pet.health;
  document.getElementById("happiness").value = pet.happiness;
  document.getElementById("exp").value = pet.exp;
  document.getElementById("carrotCount").textContent = pet.carrot;
}

// ====== LOAD / SAVE ======
function saveData() {
  localStorage.setItem("petData", JSON.stringify(pet));
  localStorage.setItem("bunnyName", pet.name);
}

function loadData() {
  const saved = JSON.parse(localStorage.getItem("petData"));
  if (saved) pet = saved;
  updateUI();
}

// ====== RENAME ======
function openRenameModal(firstTime = false) {
  const modal = document.getElementById("nameModal");
  const title = document.getElementById("modalTitle");

  title.textContent = firstTime
    ? "🐰 Đặt tên cho Bunny"
    : "✏️ Đổi tên Bunny";

  modal.classList.remove("hidden");
}

function saveBunnyName() {
  const input = document.getElementById("bunnyNameInput");
  const name = input.value.trim();

  if (!name) {
    alert("🐰 Bunny cần một cái tên nha!");
    return;
  }

  pet.name = name;
  saveData();
  updateUI();

  document.getElementById("nameModal").classList.add("hidden");
  input.value = "";
}

function updateBunnyName(name) {
  document.querySelectorAll(".bunnyName").forEach(el => {
    el.textContent = name;
  });
}

// ====== USE CARROT ======
function useCarrot(action) {
  if (pet.carrot <= 0) {
    alert("Bạn không có đủ cà rốt!");
    return;
  }

  pet.carrot--;

  if (action === "feed") pet.health = Math.min(100, pet.health + 20);
  if (action === "play") pet.happiness = Math.min(100, pet.happiness + 20);
  if (action === "clean") pet.health = Math.min(100, pet.health + 10);

  saveData();
  updateUI();
}
document.getElementById("nameModal").addEventListener("click", e => {
  function closeNameModal() {
  document.getElementById("nameModal").classList.add("hidden");
}

    if (e.target.id === "nameModal") {
    closeNameModal();
  }
});



// ====== NAVIGATION ======
document.addEventListener("DOMContentLoaded", () => {
  const go = (path) => {
    window.location.href = path;
  };

  const home = document.getElementById("nav-home");
  const timer = document.getElementById("nav-timer");
  const checklist = document.getElementById("nav-checklist");
  const progress = document.getElementById("nav-progress");
  const logout = document.getElementById("nav-logout");

  home && home.addEventListener("click", () => {
    go("../Home/home.html");
  });

  timer && timer.addEventListener("click", () => {
    go("../Timer/timer.html");
  });

  checklist && checklist.addEventListener("click", () => {
    go("../Checklist/checklist.html");
  });

  progress && progress.addEventListener("click", () => {
    go("../Progress/progress.html");
  });

  logout && logout.addEventListener("click", () => {
    localStorage.clear();
    go("../Login & Register/index.html");
  });
});
