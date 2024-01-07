let todoList=[
{
  text:'Bring milk from market',
  date:'2024-01-10'
},
{
  text:'Bring Vegitables from market',
  date:'2024-01-08'
},
{
  text: 'Have to go Bank ',
  date:'2024-01-15'
}
];

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

    showList(inputText,inputDate);

    textField.value='';
    dateField.value='';
  }
}


function showList(inputText,date){

  let listDiv=document.querySelector('.output-div');
  let htmlString='';
  for(let i=0;i<todoList.length;i++){
    htmlString+=`<div class="list">
    <p class="output-text" id="output-text">${todoList[i].text}</p>
    <p class="output-date" id="output-date">${todoList[i].date}</p>
    <button>Delete</button>
  </div>`;
    listDiv.innerHTML=htmlString;
  }
}




// displayItems();

// function addToDo(){
//   let inputElement=document.querySelector('#todo-input');
//   let todoItem=inputElement.value;
//   todoList.push(todoItem);
//   inputElement.value='';
//   displayItems();
// }


// function displayItems(){
//   let displayElement=document.querySelector('#todo-item');
//   displayElement.innerText='';
//   for(let i=0;i<todoList.length;i++){
//     displayElement.innerText=displayElement.innerText+'\n'+todoList[i];
//   }
// }