const toggle = document.getElementById('toggleAuto');
const recordBtn = document.getElementById('recordBtn');
const feedbackCopy = document.getElementById('feedbackCopy');
const peekBtn = document.getElementById('peekBtn');
const peekPanel = document.getElementById('peekPanel');

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextOn = !toggle.classList.contains('on');
    toggle.classList.toggle('on', nextOn);
    toggle.classList.toggle('off', !nextOn);
    toggle.setAttribute('aria-pressed', String(nextOn));

    const title = document.querySelector('.toggle-title');
    const subtitle = document.querySelector('.toggle-sub');

    if (title && subtitle) {
      title.textContent = 'Coach me before I advance';
      subtitle.textContent = nextOn
        ? 'On — hold me here until speaking confidence is high enough'
        : 'Off — let me move on even if speaking still feels shaky';
    }
  });
}

if (recordBtn && feedbackCopy) {
  const messages = [
    'Nice. You sounded more fluid there. One cleaner rep on l’addition and this probably lands in a real café.',
    'Better pacing. You know the phrase — now tighten the ending so it comes out without hesitation.',
    'That was clearer. Try it once more at normal speed so it feels like something you would actually say.'
  ];
  let i = 0;

  recordBtn.addEventListener('click', () => {
    i = (i + 1) % messages.length;
    feedbackCopy.innerHTML = messages[i];
  });
}

if (peekBtn && peekPanel) {
  peekBtn.addEventListener('click', () => {
    const hidden = peekPanel.classList.toggle('hidden');
    peekBtn.setAttribute('aria-expanded', String(!hidden));
    peekBtn.textContent = hidden ? 'Peek support' : 'Hide support';
  });
}
