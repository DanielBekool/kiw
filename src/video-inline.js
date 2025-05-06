function loadVideo(el) {
    const container = el.parentNode;
    const iframe = container.querySelector('iframe');
    iframe.src = iframe.getAttribute('data-src');
    iframe.classList.remove('hidden');
    el.remove(); // Hapus thumbnail setelah diklik
  }