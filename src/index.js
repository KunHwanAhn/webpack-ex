import _ from 'lodash';

import preintMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and dcheck the console!';
  btn.onclick = preintMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
