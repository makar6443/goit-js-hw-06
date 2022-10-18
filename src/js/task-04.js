

const wrap_button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
};

const {sub, add} = wrap_button;

let counterValue = 0;
const increment = () => {
    counterValue += 1;

    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    document.getElementById('value').textContent = counterValue;
};
    sub.addEventListener('click', increment);
    add.addEventListener('click', decrement);