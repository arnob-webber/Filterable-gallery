
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filterValue === 'all') {
        item.classList.remove('hidden');
      } else {
        if (item.getAttribute('data-name') === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      }
    });
  });
});

const footerSection = document.createElement('div');
footerSection.textContent = '© 2024 by Arnob';
footerSection.style.textAlign = 'center';
footerSection.style.padding = '10px';
footerSection.style.fontSize = '14px';
footerSection.style.color = '#333';
document.body.appendChild(footerSection);
