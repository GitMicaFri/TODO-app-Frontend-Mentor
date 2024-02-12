
document.addEventListener("DOMContentLoaded", function() {

const addBtnEl = document.querySelector(".add-btn"); // Use querySelector to get the first matching element
const inputEl = document.querySelector(".input-li-el input"); // Use querySelector to get the input element within the .input-li-el element

addBtnEl.addEventListener("click", function() {
    const inputValue = inputEl.value.trim(); //trim to remove leading and trailing whitespaces

    if (inputValue !== "") {

        // Create container for new list item
        const listItemContainer = document.createElement("div");
        listItemContainer.classList.add("task-container");

        // Create new list item
        const newListItem = document.createElement("li");
        newListItem.classList.add("task");
        newListItem.textContent = inputValue;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("x-btn");
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';

        deleteButton.addEventListener("click", function() {
            listItemContainer.remove(); // Remove the parent container when button is clicked
        
        })
         // Append list item to container
         listItemContainer.appendChild(newListItem);

         // Append delete button to containter
         listItemContainer.appendChild(deleteButton);
    
        // Append container to the list
        const taskList = document.querySelector(".tasks");
        taskList.appendChild(listItemContainer);

        // Clear input field
        inputEl.value = "";
    }
});
        // Selects all "default" buttons
        const deleteButtons = document.querySelectorAll(".x-btn"); 
        deleteButtons.forEach(button => {
            button.addEventListener("click", function() {
                const listItemContainer = button.parentNode;
                listItemContainer.remove();
            })
        })
})

// Select tasks section and add scroll function
const tasksSection = document.querySelector(".tasks-section");
tasksSection.addEventListener("scroll", function() {

    if  (tasksSection.scrollHeight <= tasksSection.scrollTop + tasksSection.clientHeight) {
        tasksSection.classList.add("scrollable");
    } else {
        tasksSection.classList.remove("scrollable");
    }
})