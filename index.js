import { createElement } from './utils';

var count = 0;

function inc() {
  count += 1;
  document.getElementById('h1').textContent = count;
}

createElement('button', null, 'Increment', {
  click: () => {
    inc();
  },
});

createElement('h1', 'h1', '0', {});

