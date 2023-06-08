document.addEventListener('DOMContentLoaded', function() {
    const addBut = document.querySelector(".add-but");

    addBut.addEventListener("click", () => {
        const inputValue = document.querySelector(".input").value;
        const taskContainer = document.querySelector(".task-container");

        if (inputValue.length === 0) alert("Nu ai scris nimic!");
        else {
            const task = document.createElement("div");
            task.classList.add("task");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            const text = document.createElement("p");
            text.classList.add("text");
            text.textContent = inputValue;
            const delImg = document.createElement("img");
            delImg.src = "img/211836_trash_icon.png";
            delImg.classList.add("delImg");

            taskContainer.append(task);
            task.append(checkbox, text, delImg);

            console.log(inputValue);
            document.querySelector(".input").value = "";

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) text.classList.add("taie");
                else text.classList.remove("taie");
            });

            delImg.addEventListener("click", () => {
                task.style.display = "none";
            });
        }
    });
  });