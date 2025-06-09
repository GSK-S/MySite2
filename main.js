import { fonts } from './fonts/index.js';

const inputText = document.getElementById('inputText');
const convertBtn = document.getElementById('convertBtn');
const resultsContainer = document.getElementById('resultsContainer');

function createResultElement(text, fontName) {
  const container = document.createElement('div');
  container.className = 'result';

  const textSpan = document.createElement('span');
  textSpan.className = 'text-output';
  textSpan.textContent = text;
  // نجعل الخط يظهر بشكل واضح:
  textSpan.style.fontFamily = 'inherit'; 

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = 'نسخ';
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'تم النسخ!';
      setTimeout(() => (copyBtn.textContent = 'نسخ'), 1500);
    });
  };

  container.appendChild(textSpan);
  container.appendChild(copyBtn);

  return container;
}

convertBtn.addEventListener('click', () => {
  const input = inputText.value.trim();
  if (!input) {
    alert('ضع كلمة أو جملة لزخرفتها.');
    return;
  }

  resultsContainer.innerHTML = ''; // ننظف النتائج السابقة

  fonts.forEach(({ name, func }) => {
    const converted = func(input);
    const el = createResultElement(converted, name);
    resultsContainer.appendChild(el);
  });
});