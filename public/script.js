// select all copyBtns
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach((copyBtn) =>
  copyBtn.addEventListener('click', (e) => {
    // copy code block when copy icon is clicked
    const pre = e.currentTarget.previousElementSibling;
    const codeBlock = pre.firstChild.innerText;
    navigator.clipboard.writeText(codeBlock);
  })
);
