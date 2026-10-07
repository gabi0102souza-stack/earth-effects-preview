'use strict';
const form = document.querySelector('#quote-form');
const review = document.querySelector('#request-review');
const summary = document.querySelector('#request-summary');
const draft = document.querySelector('#email-draft');
const copyStatus = document.querySelector('#copy-status');
document.querySelector('#prepare-request').disabled = false;
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => { form.elements.service.value = link.dataset.service; });
});
form.addEventListener('input', event => { event.target.setCustomValidity(''); });
form.addEventListener('change', event => { event.target.setCustomValidity(''); });
form.addEventListener('submit', event => {
  event.preventDefault();
  for (const field of [form.elements.name, form.elements.description]) {
    field.setCustomValidity(field.value.trim().length < (field.name === 'description' ? 10 : 1) ? 'Please add a little detail before continuing.' : '');
  }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const value = key => String(data.get(key) || '').trim();
  const message = `Earth Effects quote request\n\nName: ${value('name')}\nEmail: ${value('email')}\nPhone: ${value('phone') || 'Not provided'}\nService: ${value('service')}\n\nProperty and project details:\n${value('description')}`;
  summary.textContent = message;
  draft.href = `mailto:eartheffectstn@gmail.com?subject=${encodeURIComponent('Free quote request: ' + value('service'))}&body=${encodeURIComponent(message)}`;
  form.hidden = true;
  review.hidden = false;
  copyStatus.textContent = '';
  document.querySelector('#review-title').focus({preventScroll:true});
  review.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
});
document.querySelector('#edit-request').addEventListener('click', () => {
  review.hidden = true;
  form.hidden = false;
  form.elements.name.focus({preventScroll:true});
});
document.querySelector('#copy-request').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(summary.textContent);
    copyStatus.textContent = 'Request copied. Paste it into an email to eartheffectstn@gmail.com.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(summary);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Copy the selected text, then paste it into your email.';
  }
});
