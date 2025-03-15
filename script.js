// script.js
document.getElementById('runButton').addEventListener('click', () => {
  const code = document.getElementById('codeEditor').value;
  const outputFrame = document.getElementById('outputFrame');
  outputFrame.contentWindow.document.open();
  outputFrame.contentWindow.document.write(code);
  outputFrame.contentWindow.document.close();
});
