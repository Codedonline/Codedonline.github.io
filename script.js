// script.js
const tabs = document.querySelectorAll('.tab');
const codeAreas = document.querySelectorAll('.code-area');
const runButton = document.getElementById('runButton');
const outputFrame = document.getElementById('outputFrame');

// Updated JavaScript for tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Clear active state on all tabs and code areas
    tabs.forEach(t => t.classList.remove('active'));
    codeAreas.forEach(area => area.classList.remove('active'));

    // Activate the clicked tab and its associated code area
    tab.classList.add('active');
    const targetArea = tab.dataset.target; // Use data-target to match
    document.getElementById(targetArea).classList.add('active');
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
