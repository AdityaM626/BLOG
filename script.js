// Dark Mode Toggle with persistence
const toggleBtn = document.querySelector('.toggle-dark');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Search Functionality
document.getElementById('search').addEventListener('keyup', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Category Filter
function filterCategory(cat) {
  document.querySelectorAll('.card').forEach(card => {
    if (cat === 'All' || card.dataset.category === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
