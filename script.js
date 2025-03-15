// script.js
const tabs = document.querySelectorAll('.tab');
const codeAreas = document.querySelectorAll('.code-area');
const runButton = document.getElementById('runButton');
const outputFrame = document.getElementById('outputFrame');

// Handle tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    codeAreas.forEach(area => area.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Handle "Run Code" button
runButton.addEventListener('click', () => {
  const html = document.getElementById('htmlTab').value;
  const css = `<style>${document.getElementById('cssTab').value}</style>`;
  const js = `<script>${document.getElementById('jsTab').value}<\/script>`;

  const json = document.getElementById('jsonTab').value;
  const parsedJson = json ? `<pre>${JSON.stringify(JSON.parse(json), null, 2)}</pre>` : '';

  const output = `${html}${css}${parsedJson}${js}`;
  outputFrame.contentWindow.document.open();
  outputFrame.contentWindow.document.write(output);
  outputFrame.contentWindow.document.close();
});
