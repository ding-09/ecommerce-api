// select all copyBtns
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach((copyBtn) =>
  copyBtn.addEventListener('click', (e) => {
    // copy code block when copy icon is clicked
    const pre = e.currentTarget.previousElementSibling;
    const codeBlock = pre.firstChild.innerText;
    navigator.clipboard.writeText(codeBlock);

    // toggle tooltip after copy icon has been clicked
    const tooltip = e.currentTarget.nextElementSibling;
    tooltip.classList.add('tooltip-animation');

    setTimeout(() => {
      tooltip.classList.remove('tooltip-animation');
    }, 1500);
  })
);
