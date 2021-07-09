let pressedKey;
let activeKey;
let btn = document.querySelectorAll('.btn');


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max);
}


function getRandomKey() {


    activeKey = btn[getRandomNumber(0, btn.length-1)];
    btn.forEach(function(item) {
        if (item === activeKey) {
            item.classList.add('btnNeedsToClick');
        } else if (item !== activeKey) {
            item.classList.remove('btnNeedsToClick');
        }
    })
    // console.log(activeKey.innerHTML);
    console.log(`activeKey = ${activeKey.innerHTML}`);

}

getRandomKey();


document.addEventListener('keydown', (event) => {
    pressedKey = event.key;

    pressKey();
    console.log(`pressedKey = ${pressedKey}`);
});
document.addEventListener('keyup', (event) => {
    // console.log('keyup', event.key, event.ctrlKey);
});


function pressKey() {
    btn.forEach(function(item) {

        //styling clicked button
        if (item.innerHTML === pressedKey) {
            // console.log(item.classList.contains('btnClicked'));  //need to fix a bug (class is added only once for some reason)
            if(item.classList.contains('btnClicked') === true) {
                item.classList.remove('btnClicked');
                item.classList.add('btnClicked');
            } else if (item.classList.contains('btnClicked') === false) {
                item.classList.add('btnClicked');
            }

            // console.log(item.classList.contains('btnClicked'));


        } else if (item.innerHTML !== pressedKey){
            item.classList.remove('btnClicked');
        }

        setTimeout(() => {
            item.classList.remove('btnClicked')
        }, 300)
        // catching pulsing button
        if (pressedKey === activeKey.innerHTML){

            getRandomKey();

        }
    })
}