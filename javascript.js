//---------- DOM elements ----------
let containerElement = document.getElementsByClassName('list-container')[0];
let btnAddElement = document.getElementsByClassName('btn-add')[0];
let ulElement = document.createElement('ul');
ulElement.classList.add('list');


//---------- Functions ----------
//Add item and clear input
let addItem = () => {
    //Take input
    let inputValueElement = document.getElementById('input-add').value;

    //Conditions: if input is empty, do nothing
        if (inputValueElement === '') {
            let modalElement = document.getElementsByClassName('modal')[0];
            modalElement.classList.remove('hidden');

            let btnCloseModalElement = document.getElementsByClassName('btn-closeModal')[0];
            btnCloseModalElement.addEventListener('click', () => {
                modalElement.classList.add('hidden');
            });
            return;

        } else {
            //Create li and take the value from the input
            let liElement = document.createElement('li');
            liElement.classList.add('list-item');
            liElement.innerHTML = inputValueElement;




            //Buttons container (delete and checked)
            let btnContainerElement = document.createElement('div');
            btnContainerElement.classList.add('btn-container');



            // 1- Checked button
            let btnCheckedElement = document.createElement('button');
            btnCheckedElement.classList.add('btn-checked');
            
            btnCheckedElement.addEventListener('click', () => {
                liElement.classList.toggle('checked');
            });

            let btnIconElement2 = document.createElement('i');
            btnIconElement2.classList.add('fas', 'fa-check', 'btn-icon');




            // 2- Delete button
            let btnDeleteElement = document.createElement('button');
            btnDeleteElement.classList.add('btn-delete');
            
            btnDeleteElement.addEventListener('click', () => {
                liElement.remove();

             if (ulElement.childElementCount === 0) {
                        ulElement.remove();
                //Eliminar la lista si está vacía
                advicesElement.classList.toggle('hidden');

                }
            });

            let btnIconElement = document.createElement('i');
            btnIconElement.classList.add('fas', 'fa-trash', 'btn-icon');
        


            //Add to local storage and append to the list
            window.localStorage.setItem(inputValueElement, inputValueElement);
            console.log(localStorage);

            window.sessionStorage.setItem(inputValueElement, inputValueElement);
            console.log(sessionStorage);
          





            //Clear input
            document.getElementById('input-edit').value = '';

            // ---------------- Append elements ----------------
            
            //Add the li to the ul
            ulElement.appendChild(liElement);
            //Add the ul to the container
            containerElement.appendChild(ulElement);

            // BUTTONS
            //Add the button container to the li
            liElement.appendChild(btnContainerElement);
            //Add the delete button to the button container
            btnContainerElement.appendChild(btnDeleteElement);
            //Add the checked button to the button container
            btnContainerElement.appendChild(btnCheckedElement);

            //Add the icon to the button
            btnDeleteElement.appendChild(btnIconElement);
            btnCheckedElement.appendChild(btnIconElement2);

            // ---------------- Clear the input ----------------
            document.getElementById('input-add').value = '';

            // ---------------- Hide the advices of empty list ----------------
            let advicesElement = document.getElementsByClassName('advice-empty')[0];
            advicesElement.classList.add('hidden');
            
        }
}

//---------- Event listeners ----------
btnAddElement.addEventListener('click', addItem);





