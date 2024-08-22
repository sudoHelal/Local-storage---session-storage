const idInput = document.getElementById('storage-id');
const valueInput = document.getElementById('storage-value');
const addToLocalStorage = () =>{
    const id = idInput.value;
    const value = valueInput.value;
     idInput.value = '';
    valueInput.value = '';


    if(id && value){
        localStorage.setItem(id, value);
    }


    displayStorage(id, value)
    
}
const displayStorage = (id, value) =>{
    console.log(id, value);
    const idValueContainer = document.getElementById('id-value-container');
    const list = document.createElement('li');
    list.textContent = `${id}: ${value}`;
    idValueContainer.appendChild(list);

}

