import _ from 'lodash';
import './index.css';
import icon from './icon.jpg'
import Data from './data.xml'
import printMe from './print'


function component() {
  var element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')
  const image = new Image()
  image.src = icon;

  element.appendChild(image);
  console.log(Data);
  return element;
}

function addButton () {
  const element = document.createElement('Button');
  element.innerHTML= 'Click me and check the console!';
  element.onclick = printMe;
  return element;
}

// document.body.appendChild(component());
document.body.appendChild(addButton())