import { cube } from './main.js';
import printMe from './print.js';
import './styles.css';

function component() {
  const element = document.createElement('pre');
  element.innerHTML = [
    'Hello Webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}