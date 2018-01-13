/**
 * Add helper class to HTML tag (detect touch device)
 */
function addClassForTouchDevice() {
  function runCheck() {
    // checkOnce = true;
    const tagHtml = document.querySelector('html');
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      tagHtml.classList.add('is-touchDevice');
    } else {
      tagHtml.classList.add('no-touchDevice');
    }
  }
  return runCheck();
}
addClassForTouchDevice();
