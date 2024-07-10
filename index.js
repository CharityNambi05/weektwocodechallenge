document.addEventListener('DOMContentLoaded', funtion(){
    const markPurchasedButton =document,getElementById ('markPurchased');
    const clearListButton= document.getElementById('clearList');


    let shoppingList =[];
    // Mark item as purchased
    itemList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const index = e.target.dataset.index;
            shoppingList[index].purchased = !shoppingList[index].purchased;
            renderList();
            saveToLocalStorage(); // Save to local storage
        }
    });

    // Clear the shopping list
    clearListButton.addEventListener('click', function() {
        shoppingList = [];
        renderList();
        localStorage.removeItem('shoppingList'); // Clear local storage
    }) ;

    // Optional: Load items from local storage on page load
    function loadFromLocalStorage() {
        const storedList = JSON.parse(localStorage.getItem('shoppingList'));
        if (storedList) {
            shoppingList = storedList;
        }
    

    // Optional: Save shopping list to local storage
    function saveToLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }// Load items from local storage on page load
    loadFromLocalStorage();

    
}

)