document.getElementById("new-task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    let titleInput = document.getElementById("title-input");
    let title = titleInput.value.trim(); // Trim any leading or trailing

    let descriptionInput = document.getElementById("description-input");
    let description = descriptionInput.value.trim(); // Trim any leading or trailing

    let tasksTodo = document.getElementById("tasks-todo");
    let taskItem = document.createElement("li");


    if (title !== "" || description !== "") { // Check if the input is not empty

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false;
        taskItem.appendChild(checkbox);

        let titleLabel = document.createElement('label');
        titleLabel.textContent = title;
        titleLabel.classList.add('task-title');
        taskItem.appendChild(titleLabel);
        titleInput.value = ""; // Clear the input field

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add("hidden-element"); // Initially hide the edit button
        taskItem.appendChild(editButton);

        let descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = description;
        descriptionSpan.classList.add('task-description');
        taskItem.appendChild(descriptionSpan);
        descriptionInput.value = ""; // Clear the input field


        tasksTodo.appendChild(taskItem);

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
        });

        editButton.addEventListener("click", function() {
            let newTitle = prompt("Edit title:", titleLabel.textContent);
            if (newTitle !== null) {
                titleLabel.textContent = newTitle;
            }
            let newDescription = prompt("Edit description:", descriptionSpan.textContent);
            if (newDescription !== null) {
                descriptionSpan.textContent = newDescription;
            }
        });
    }
});