
// Thank you to W3Schools for amazing tutorials on HTML, CSS and Javascript

// Basic javascript for getting time

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var year=today.getFullYear();
  var month=today.getMonth();
  var day=today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = year + "-" + (month+1) + "-" + day + " " + h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();


// What : Learnt and Modified parts of code basically to add and remove elements as new to Javascript
// Where : Followed a basic tutorial from youtube and reused some parts 
// Where : https://www.youtube.com/watch?v=2wCpkOk2uCg
// The code does basic adding, removing and adding elements based on button click add/check/delete.
// UI and idea are self defined.


document.getElementById('add').addEventListener('click', function(){

	var value = document.getElementById('todo').value;
	if(value){
	 addItemToDo(value);
	 document.getElementById('todo').value='';
	 
	}
});

function remove() {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem(){

	var item=this.parentNode;
	item.setAttribute("id", "finish1");
	var parent=item.parentNode;
	var id=parent.id;	
	if(id==="do")
	{
		target=document.getElementById('completed');

	}
	else
	{
		target=document.getElementById('do');

	}

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}



function addItemToDo(text) {


	var list = document.getElementById('do');

	var item = document.createElement('li');
	item.innerText = text;
	var done = document.createElement('button');
	done.classList.add('done');

	var deleted = document.createElement('button');
	deleted.classList.add('deleted');

	var timing = document.createElement('input');
	timing.type="text";
	timing.setAttribute("placeHolder", "Enter Notes");
	timing.classList.add('timing');


	item.appendChild(timing);
	item.appendChild(deleted);
	item.appendChild(done);

	done.addEventListener('click',completeItem);

	deleted.addEventListener('click',remove);

  	list.insertBefore(item, list.childNodes[0]);



}