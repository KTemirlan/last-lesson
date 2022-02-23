let number = 1;

function updateState() {
    document.getElementById('count').textContent=number.toString();
}
const plusPlus = () => {
    number++;
    updateState();
};

plusPlus();

const plusMinus = () => {
    number--;
     updateState();
};

plusMinus();

const plusReset = () => {
    number = 1;
    updateState();
};
plusReset();
