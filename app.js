const toggle = document.getElementById('toggleAuto');

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextOn = !toggle.classList.contains('on');
    toggle.classList.toggle('on', nextOn);
    toggle.classList.toggle('off', !nextOn);
    toggle.setAttribute('aria-pressed', String(nextOn));

    const title = document.querySelector('.toggle-title');
    const subtitle = document.querySelector('.toggle-sub');

    if (title && subtitle) {
      title.textContent = 'Auto-advance when ready';
      subtitle.textContent = nextOn
        ? 'On — move me forward once my confidence is high enough'
        : 'Off — ask me before moving on';
    }
  });
}
