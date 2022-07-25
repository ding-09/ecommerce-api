document.addEventListener('click', (e) => {
  // check if copy icon is clicked
  if (e.target.matches('.fa-copy')) {
    // copy code block when clicked
    const pre = e.target.parentElement.previousElementSibling;
    const codeBlock = pre.firstChild.innerText;
    navigator.clipboard.writeText(codeBlock);

    // toggle tooltip animation
    toggleTootip(e);
  }
});

const toggleTootip = (e) => {
  // toggle tooltip animation
  const tooltip = e.target.parentElement.nextElementSibling;
  tooltip.classList.add('tooltip-animation');

  // remove tooltip animation to trigger animation restart
  setTimeout(() => {
    tooltip.classList.remove('tooltip-animation');
  }, 1500);
};
