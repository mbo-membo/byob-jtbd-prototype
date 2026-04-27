const analysis = {
  jobs: [
    {
      strength: 'Primary trigger',
      type: 'Prevention / maintenance',
      statement: 'When I’m thinking about my future cognitive health, I want to keep learning and strengthening a language, so I can build new brain pathways and reduce my risk of decline, without needing an expensive or heavy-weight learning setup.',
      evidence: '“for my own brain health… keep learning something new” / “try to avoid the dementia down the road”'
    },
    {
      strength: 'Strongest outcome',
      type: 'Belonging / practical fluency',
      statement: 'When I travel to France or imagine living in Europe, I want to understand and speak French in real situations, so I can participate in everyday life and feel part of the community, without constantly needing people to slow down or switch to English.',
      evidence: 'Wants to “sit in a restaurant and overhear or be part of any conversation” and become “part of the community”.'
    },
    {
      strength: 'Supporting job',
      type: 'Flexible practice',
      statement: 'When I have a small window of time to study, I want to choose the kind of language practice that fits my mood and confidence, so I can keep progressing even if I’m not ready for a full conversation, without being forced down one rigid learning path.',
      evidence: 'Duolingo felt “too pushy”; Memrise lets her “speak it or type it or have a conversation”.'
    },
    {
      strength: 'Supporting job',
      type: 'Pronunciation confidence',
      statement: 'When I’m learning French words and phrases, I want to say them out loud and get feedback, so I can sound more correct and feel more confident speaking, without needing a tutor or live teacher.',
      evidence: '“best feature I love is the speech feature… it’ll tell me if I’m doing it right”.'
    }
  ],
  helps: [
    'Lets her choose practice mode: pronunciation, typing, videos, or conversation.',
    'Speech feature gives corrective feedback and builds confidence.',
    'Native-speaker videos make the language feel real rather than synthetic.',
    'Conversation practice feels lower pressure because it is app-mediated.',
    'Good enough value signal that she and her husband bought a lifetime subscription.'
  ],
  blockers: [
    'Progression can move on before she feels she has fully mastered a lesson.',
    'She wants to replay / repeat more deliberately rather than only follow the default path.',
    'AI conversation lacks enough spoken French support in-context.',
    'Confidence gap remains for conversation practice even with safer app-based modes.'
  ],
  triggers: [
    {
      job: 'Brain health / prevention',
      social: 'Low social visibility; mainly personal responsibility and future self-protection.',
      emotional: 'Fear, urgency, prevention, care for future self.',
      evidence: 'Her mother has dementia and it may run in the family.'
    },
    {
      job: 'Belong and function in France',
      social: 'Belonging, legitimacy, feeling like part of the local community.',
      emotional: 'Hope, aspiration, pride, longing.',
      evidence: 'Dreams of living in Europe and wants to feel “part of the community”.'
    },
    {
      job: 'Flexible speaking practice',
      social: 'Low judgment and privacy matter.',
      emotional: 'Hesitation, self-consciousness, relief when practice feels safer.',
      evidence: 'She is still hesitant about conversation and has to psych herself up.'
    },
    {
      job: 'Pronunciation confidence',
      social: 'Avoid sounding incompetent or obviously wrong.',
      emotional: 'Uncertainty, mild frustration, satisfaction when validated.',
      evidence: '“I swear I’m doing that word right.”'
    }
  ],
  improvements: [
    'Ask for the exact moment Duolingo stopped being enough: what had just happened?',
    'Probe switching forces directly: what pushed her away, what pulled her toward Memrise, what anxieties almost stopped the purchase?',
    'Get the timeline of the trial: what happened in the 7-day period that made lifetime value feel real?',
    'Explore alternatives more explicitly: why app vs tutor, class, podcast, or travel-only learning?',
    'Ask for the next real-world progress milestone: what moment in France would make her say “this is working”?'
  ],
  slackSummary: `*Participant A — JTBD summary*\n• Strongest job: feel able to function and belong in France / Europe, not just “learn French”\n• Strong start trigger: brain-health maintenance after seeing dementia in the family\n• Clear Memrise win vs Duolingo: flexible practice modes > rigid progression\n• Best-performing features: pronunciation feedback + native-speaker video\n• Main blocker: she still wants more controlled repetition before the app moves on\n• Opportunity: build better audio-supported conversation scaffolding for hesitant speakers`
};

const transcriptExcerpt = `Participant: I was looking at other ways to learn languages because I wasn't getting everything I wanted out of Duolingo.\n\nParticipant: I felt like Duolingo was too pushy... it wasn't giving me enough chance to speak the language.\n\nParticipant: That's the one thing I like about Memrise. I can choose to learn any way I want... I can choose whether I'm going to speak it or type it or have a conversation.\n\nParticipant: The best feature I love is the speech feature... I can go and just say the words and it'll tell me if I'm doing it right or not.\n\nParticipant: For my own brain health, I wanted to keep learning something new... to try to avoid the dementia down the road.\n\nParticipant: I'd like to have maybe one language kind of not mastered but a good feel of it.\n\nParticipant: If I could actually go to France and sit in a restaurant and overhear or be part of any conversation and be like, “Oh yeah, I'm totally understanding.”\n\nParticipant: I'd be more integrated with the surroundings and what's going on and part of the community.`;

function render() {
  const jobs = document.getElementById('jobs');
  jobs.innerHTML = analysis.jobs.map(job => `
    <article class="job-card">
      <div class="meta">
        <span class="badge">${job.strength}</span>
        <span class="badge secondary">${job.type}</span>
      </div>
      <p class="job">${job.statement}</p>
      <p class="muted"><strong>Evidence:</strong> ${job.evidence}</p>
    </article>
  `).join('');

  const helps = document.getElementById('helps');
  helps.innerHTML = analysis.helps.map(item => `<li>${item}</li>`).join('');

  const blockers = document.getElementById('blockers');
  blockers.innerHTML = analysis.blockers.map(item => `<li>${item}</li>`).join('');

  const improvements = document.getElementById('improvements');
  improvements.innerHTML = analysis.improvements.map(item => `<li>${item}</li>`).join('');

  const triggers = document.getElementById('triggers');
  triggers.innerHTML = analysis.triggers.map(t => `
    <div class="trigger-group">
      <h4>${t.job}</h4>
      <p><span class="badge warn">Social</span> ${t.social}</p>
      <p><span class="badge">Emotional</span> ${t.emotional}</p>
      <p class="muted"><strong>Evidence:</strong> ${t.evidence}</p>
    </div>
  `).join('');

  document.getElementById('slackSummary').textContent = analysis.slackSummary;
  document.getElementById('transcriptText').textContent = transcriptExcerpt;
}

function wireTabs() {
  const summaryButton = document.getElementById('showSummary');
  const transcriptButton = document.getElementById('showTranscript');
  const summaryView = document.getElementById('summaryView');
  const transcriptView = document.getElementById('transcriptView');

  summaryButton.addEventListener('click', () => {
    summaryView.classList.add('active');
    transcriptView.classList.remove('active');
    summaryButton.classList.add('primary');
    transcriptButton.classList.remove('primary');
  });

  transcriptButton.addEventListener('click', () => {
    transcriptView.classList.add('active');
    summaryView.classList.remove('active');
    transcriptButton.classList.add('primary');
    summaryButton.classList.remove('primary');
  });
}

render();
wireTabs();
