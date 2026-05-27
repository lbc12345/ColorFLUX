const copyButtons = document.querySelectorAll('[data-copy]');
copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;
    const text = target.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1600);
    } catch {
      button.textContent = 'Select text';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1600);
    }
  });
});
