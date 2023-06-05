const form = document.querySelector('#item-form');
const collection = document.querySelector('.collection');
const clearList = document.querySelector('.clear-list');
const filter = document.querySelector('#filter');
const itemName = document.querySelector('#item-name');

loadEventListeners();
function loadEventListeners(){
    form.addEventListener('submit',addCart);

    collection.addEventListener('click',removeCart);

    clearList.addEventListener('click',clearCart);

}
function addCart(e){
    if(addCart.value === ''){
        alert('Add a Task');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(addCart.value));
    collection.appendChild(li);
    collection.value = ' ';
    console.log(li);
    e.preventDefault();
}

function removeCart(e){
    if(e.target.perentElement);
}

function clearCart(e){
    while(collection.firstChild){
        collection.removeChild(collection.firstChild);
    }
    
}