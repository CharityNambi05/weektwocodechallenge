const shoppingList = document.getElementById("shopping-list");
const addItemButton = document.getElementById("add-item");
const text = document.getElementById("new-item")
const clearList =document.getElementById("clear-list")
const items = ["banana", "diapers", "toiletpaper", "bread", "milk"];

function getItems() {
    shoppingList.innerHTML=""
  items.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = ` <span id="shopping-list-item-${i}">${item}</span> <button onclick="markPurchased('shopping-list-item-${i}')">mark purchased</button>`;
    shoppingList.appendChild(li);
  });
}

getItems()
function markPurchased(item) {
  document.getElementById(item).style.textDecoration = "line-through";
}

function addItem(item) {
  items.unshift(item);
}

addItemButton.addEventListener('click',()=>{
    addItem(text.value)
    getItems()
})
clearList.addEventListener('click',()=>{
    shoppingList.remove()
})

