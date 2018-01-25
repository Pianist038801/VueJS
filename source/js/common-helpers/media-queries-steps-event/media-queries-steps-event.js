// Example
// document.addEventListener('changeMediaQueriesSM', function (e) {
//   console.log('change to SM');
// });

import _debounce from 'lodash/debounce';
require('./_custom-event-polyfill');

// resize window and check mobile devices
// ******************************************
let mediaQueriesDetect = '';
window.addEventListener('resize', _debounce(checkMediaStep, 200), false);
const eventChangeMQStepXS = new CustomEvent('changeMediaQueriesXS');
const eventChangeMQStepSM = new CustomEvent('changeMediaQueriesSM');
const eventChangeMQStepMD = new CustomEvent('changeMediaQueriesMD');
const eventChangeMQStepLG = new CustomEvent('changeMediaQueriesLG');
const eventChangeMQStepXL = new CustomEvent('changeMediaQueriesXL');
const eventChangeMQStepXXL = new CustomEvent('changeMediaQueriesXXL');

function checkMediaStep() {
  if (window.matchMedia('screen and (max-width: 35.9375em)').matches && mediaQueriesDetect !== 'xs') {
    mediaQueriesDetect = 'xs';
    document.dispatchEvent(eventChangeMQStepXS);
  }
  if (window.matchMedia('(min-width: 36em) and (max-width: 47.9375em)').matches && mediaQueriesDetect !== 'sm') {
    mediaQueriesDetect = 'sm';
    document.dispatchEvent(eventChangeMQStepSM);
  }
  if (window.matchMedia('(min-width: 48em) and (max-width: 61.9375em)').matches && mediaQueriesDetect !== 'md') {
    mediaQueriesDetect = 'md';
    document.dispatchEvent(eventChangeMQStepMD);
  }
  if (window.matchMedia('(min-width: 62em) and (max-width: 74.9375em)').matches && mediaQueriesDetect !== 'lg') {
    mediaQueriesDetect = 'lg';
    document.dispatchEvent(eventChangeMQStepLG);
  }
  if (window.matchMedia('(min-width: 75em) and (max-width: 89.9375em)').matches && mediaQueriesDetect !== 'xl') {
    mediaQueriesDetect = 'xl';
    document.dispatchEvent(eventChangeMQStepXL);
  }
  if (window.matchMedia('screen and (min-width: 90em)').matches && mediaQueriesDetect !== 'xxl') {
    mediaQueriesDetect = 'xxl';
    document.dispatchEvent(eventChangeMQStepXXL);
  }
}
checkMediaStep();
