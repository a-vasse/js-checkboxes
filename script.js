import { data } from './data.js';

const inbox = document.querySelector('.inbox');

inbox.innerHTML = data.map(function (datas) {
	return `<div class="item">
    <input type="checkbox">
      <p>${datas.words}</p>
    </div>`;
}).join('');
