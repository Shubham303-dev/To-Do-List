// let todoList=[
// {
//   text:'Bring milk from market',
//   date:'2024-01-10'
// },
// {
//   text:'Bring Vegitables from market',
//   date:'2024-01-08'
// },
// {
//   text: 'Have to go Bank ',
//   date:'2024-01-15'
// }
// ];

let todoList=[];

showList();

let addButton=document.querySelector('#add-button');
addButton.addEventListener('click',addtoList);

function addtoList(){
  let textField=document.querySelector('#text');
  let dateField=document.querySelector('#date');

  let inputText=textField.value;
  let inputDate=dateField.value;

  if(inputText!='' && inputDate!=''){
    todoList.push({text:inputText,date:inputDate});

    localStorage.setItem('todoList',JSON.stringify(todoList));

    showList();

    textField.value='';
    dateField.value='';
  }
}


function showList(){

  if(JSON.parse(localStorage.getItem('todoList'))!=null){
    todoList=JSON.parse(localStorage.getItem('todoList'));
  }

  let listDiv=document.querySelector('.output-div');
  let htmlString='';
  for(let i=0;i<todoList.length;i++){
    htmlString+=`<div class="list">
    <p class="output-text" id="output-text">${todoList[i].text}</p>
    <p class="output-date" id="output-date">${todoList[i].date}</p>
    <button onclick="deleteList(${i})">Delete</button>
  </div>`;
    listDiv.innerHTML=htmlString;
  }
}


function deleteList(i){
  todoList.splice(i,1);
  localStorage.setItem('todoList',JSON.stringify(todoList));
  showList();
}