import { data } from './data.js';

const inbox = document.querySelector('.inbox');


inbox.innerHTML = data.map(function (datas) {
	return `<div class="item">
    <input type="checkbox">
      <p>${datas.words}</p>
    </div>`;
}).join('');

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck (event) {
  //creating "inbetween" to define the boxes between first/last
  let inBetween = false;
  //check if shift key is held down && the box is checked
  if(event.shiftKey && this.checked) {
    //loop over all boxes
    checkboxes.forEach(checkbox => {
      //checking which are "inbetween"
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
