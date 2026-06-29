// nav scroll state
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// lightbox
function openLightbox(src) {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (box && img) {
    img.src = src;
    box.classList.add('open');
  }
}
function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (box) box.classList.remove('open');
}
const lb = document.getElementById('lightbox');
if (lb) {
  lb.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
}

// contact form -> WhatsApp
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const val = id => (document.getElementById(id) ? document.getElementById(id).value : '');
    const nombre = val('nombre');
    const fecha = val('fecha');
    const tipo = val('tipo');
    const invitados = val('invitados');
    const mensaje = val('mensaje');
    let texto = `Hola Sharabbe, soy ${nombre}. Quiero cotizar un evento tipo: ${tipo}.`;
    if (fecha) texto += ` Fecha: ${fecha}.`;
    if (invitados) texto += ` Invitados: ${invitados}.`;
    if (mensaje) texto += ` Detalles: ${mensaje}`;
    window.open(`https://wa.me/18097960239?text=${encodeURIComponent(texto)}`, '_blank');
  });
}
