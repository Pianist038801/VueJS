/**
 * scrollBarWidth
 * @returns {number}
 */
function scrollBarWidth() {
  const html = document.documentElement;
  const outer = document.createElement('div');
  const inner = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.overflow = 'scroll';

  outer.appendChild(inner);
  html.appendChild(outer);

  const outerWidth = outer.offsetWidth;
  const innerWidth = inner.offsetWidth;

  html.removeChild(outer);

  return outerWidth - innerWidth;
}


function parse(prop) {
  return parseFloat(prop) || 0;
}

/**
 * Функция получения размера блока()
 * @param {object} element - dom элемент
 * @returns {*[]} возвращает объект Array 0 - width, 1 - height
 */
function getSize(element) {
  let temporary;

  if (element === window || element === document.body) {
    return [window.innerWidth, window.innerHeight];
  }
  if (!element.parentNode) {
    temporary = true;
    document.body.appendChild(element);
  }
  const bounds = element.getBoundingClientRect();
  const styles = getComputedStyle(element);
  const height = (bounds.height | 0)
    + parse(styles.getPropertyValue('margin-top'))
    + parse(styles.getPropertyValue('margin-bottom'));
  const width = (bounds.width | 0)
    + parse(styles.getPropertyValue('margin-left'))
    + parse(styles.getPropertyValue('margin-right'));

  if (temporary) {
    document.body.removeChild(element);
  }
  return [width, height];
}

module.exports = {
  scrollBarWidth,
  getSize,
};
