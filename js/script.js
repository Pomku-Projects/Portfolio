
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
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
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
});<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

  const firebaseConfig = { /* ta config ici */ };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);

  // UI elements
  const loginForm = document.getElementById('loginForm');
  const adminSection = document.getElementById('adminSection');
  const uploadForm = document.getElementById('uploadForm');
  const logoutBtn = document.getElementById('logoutBtn');
  const uploadStatus = document.getElementById('uploadStatus');

  onAuthStateChanged(auth, user => {
    if (user) {
      loginForm.style.display = 'none';
      adminSection.style.display = 'block';
    } else {
      loginForm.style.display = 'block';
      adminSection.style.display = 'none';
    }
  });

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .catch(err => alert("Erreur : " + err.message));
  });

  logoutBtn.addEventListener('click', () => signOut(auth));

  uploadForm.addEventListener('submit', async e => {
    e.preventDefault();
    const file = uploadForm.file.files[0];
    if (!file) return;
    uploadStatus.textContent = 'Upload en cours…';
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    uploadStatus.textContent = 'Upload terminé !';
    console.log("URL fichier:", url);
  });
</script>
