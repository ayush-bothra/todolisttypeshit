let queue = [];
let front = -1;
let rear = -1
function checkempty() {
    return (front > rear || front === -1 && rear === -1);
}

function createTask() {
    let madeupBox = document.createElement('input');
    madeupBox.type = 'checkbox';
    madeupBox.id = 'checkbox';
    madeupBox.style.gridAutoRows = '50px'
    document.body.appendChild(madeupBox);

    let input = document.getElementById('input').value;
    let pushVal = document.createElement('div');
    document.body.appendChild(pushVal);
    pushVal.id = "pushed"
    pushVal.innerHTML = input;

    
    madeupBox.addEventListener('click' ,pop);

    function pop() {
        madeupBox.parentNode.removeChild(madeupBox);
        pushVal.parentNode.removeChild(pushVal);
    }
}




document.getElementById('button').addEventListener('click',createTask);