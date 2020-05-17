var listItems = document.getElementById("myList");
var actualNode = null;

function clearList() {
  for (var item of listItems.children) {
    item.style.color = "inherit";
  }
}

function selectFirst() {
  var firstItem = listItems.firstElementChild;
  firstItem.style.color = "red";
}

function selectLast() {
  var lastItem = listItems.lastElementChild;
  lastItem.style.color = "red";
}

function selectNext() {
  clearList();
  var selectItem = actualNode;
  if (actualNode) {
    actualNode = selectItem.nextElementSibling; 
  } else {
    actualNode = listItems.firstElementChild;
  }
  if (actualNode){
    actualNode.style.color = "pink";
  }
}

function selectPrev() {
  clearList()
  var selectItem = actualNode;
  if (actualNode) {
    actualNode = selectItem.previousElementSibling; 
  } else {
    actualNode = listItems.lastElementChild;
  }
  if (actualNode){
    actualNode.style.color = "pink";
  }
}

function append() {
  var newItem = document.createElement("li");
  newItem.innerHTML = "New Item";
  listItems.appendChild(newItem);
}

function remove() {
  listItems.removeChild(listItems.lastElementChild);
}

function appendInStart() {
  var firstItem = listItems.firstElementChild;
  var newItem = document.createElement("li");
  newItem.innerHTML = "New Item";
  listItems.insertBefore(newItem, firstItem)
}