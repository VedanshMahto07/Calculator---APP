const inpt = document.querySelector("input");
const btns = document.querySelectorAll("button");
const operators = ['+', '-', '*', '/'];

btns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value
        if (value === "AC") {
            inpt.value = ""
        }
        else if (value === "DEL") {
            inpt.value = inpt.value.slice(0, -1)
        }
        else if (value === '%') {
            inpt.value = parseFloat(inpt.value) / 100;
        }
        else if (value === "=") {
            try {
                inpt.value = eval(inpt.value);
                inpt.style.fontWeight = 'bolder';
            } catch {
                inpt.value = 'Error';
            }
        }
        // block leading operator
        else if (operators.includes(value) && inpt.value === "") {
            return;
        }
        // block double operator
        else if (operators.includes(value) && operators.includes(inpt.value.slice(-1))) {
            return;
        }
        else {
            inpt.value += value
        }
    })
});