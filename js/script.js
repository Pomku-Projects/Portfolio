
const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
if (toggleBtn && sidebar) {
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}
const uploadForm = document.getElementById('uploadForm');
const uploadStatus = document.getElementById('uploadStatus');
if (uploadForm && uploadStatus) {
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    uploadStatus.textContent = 'Chargement en cours...';
    setTimeout(() => {
      uploadStatus.textContent = 'Fichier ou lien ajouté avec succès !';
    }, 1000);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");

  if (carousel) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          carousel.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    observer.observe(carousel);
  }
});
