//list of task
$(document).ready(function() { 
    getAllTodo();
  });
  async function getAllTodo() { 
    const resp = await fetch('/todos', { method: 'GET' })
    const todos = await resp.json()
    todos.forEach(element => {
       console.log(element);
       var status="Incomplete";//false
       if(element.status) { status="Complete"};
       $("#todo-container").append('<div class="accordion todo-list" id="accordionExample"> <div class="card"> <div class="card-header" id="heading"> <div class="part1"> <i class="fa fa-pencil" aria-hidden="true" id="edit" data-toggle="modal" data-target="#exampleModal"></i> </div><div class="part2" > <p id="title">'+ element.title+'</p></div><div class="part3"> <button onclick="detail('+element.id+')" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+element.id+'" aria-expanded="false" aria-controls="collapse'+element.id+'">  <i class="fa fa-angle-down" aria-hidden="true" ></i> </button> </div></div><div id="collapse'+element.id+'" class="collapse" aria-labelledby="heading" data-parent="#accordionExample"> <div class="card-body"> <table id="detail-table" > <tr> <td>Title:</td><td id="titleDetail">'+element.title+'</td></tr><tr> <td>Description:</td><td id="descriptionDetail">'+element.description+'</td></tr><tr> <td>Due Date:</td><td id="dueDateDetail">'+element.due+'</td></tr><tr> <td>Status:</td><td id="statusDetail">'+ status+'</td></tr><tr> <td>Priority:</td><td id="priorityDetail">'+element.priority+'</td></tr></table> </div></div></div></div>');
      });
  }

//create new task
$("#create").click(function() { 
  let title=document.getElementById('titleBox').value;
  let description=document.getElementById('descriptionBox').value;
  let due=document.getElementById('dueDateBox').value;
  let status=document.getElementById('statusBox').value;
  let priority=document.getElementById('priorityBox').value;
  add(title,description,due,status,priority);
});
async function add(title,description,due,status,priority) {  
  const resp = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
      "title":title,
      "description":description,
      "due":due,
      "status":status,
      "priority":priority
    })
  })
}