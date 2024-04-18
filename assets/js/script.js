const titleInp = document.querySelector('#title');
const descrArea = document.querySelector('#desc');
const addBtn = document.querySelector('#add__btn');
const listDiv = document.querySelector('.list');

const createTask = (title, desc) => {

  const div = document.createElement('div');
  div.className = 'todo';
  div.style.marginTop = '20px';

  const h4 = document.createElement('h4');
  h4.className = 'todo__title';
  h4.innerText = title;

  const p = document.createElement('p');
  p.className = 'todo__desc';
  p.innerText = desc;

  div.append(h4, p);
  listDiv.append(div);

  titleInp.value = '';
  descrArea.value = '';
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createTask(titleInp.value, descrArea.value);
})