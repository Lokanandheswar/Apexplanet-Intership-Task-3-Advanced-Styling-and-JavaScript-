// Sample data
const users = [
  { name: "Alice", role: "Frontend Developer" },
  { name: "Bob", role: "Backend Developer" },
  { name: "Charlie", role: "UI/UX Designer" },
];

class UserCard {
  constructor(user) {
    this.user = user;
  }

  render() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${this.user.name}</h3><p>${this.user.role}</p>`;
    card.addEventListener("click", () => showModal(this.user));
    return card;
  }
}

// Inject cards into the page
const container = document.getElementById("userContainer");
users.forEach(user => {
  const card = new UserCard(user);
  container.appendChild(card.render());
});

// Modal logic
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const closeBtn = document.querySelector(".close-btn");

function showModal(user) {
  modalName.textContent = user.name;
  modalRole.textContent = user.role;
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});
