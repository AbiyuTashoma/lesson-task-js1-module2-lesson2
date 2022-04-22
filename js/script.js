const button = document.querySelector("button");

const countCountainer = document.querySelector("span.count");

let count = 1;

function startCount (){

    //disable the button
    button.disabled = true;

    //start the counter
    function counter (){
        countCountainer.innerHTML = `${count}`;
        count++;
        
        if (count === 8){
            clearInterval (counterIntervalId);
            count = 1;
            button.disabled = false;
        }
    }

    const counterIntervalId = setInterval (counter, 1000);

}

button.onclick = startCount;