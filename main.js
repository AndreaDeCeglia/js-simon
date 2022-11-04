let randomNumbers = [];

let userNumbers = [];

let rightNumbers = [];

let mistake = [];

let time = 5 * 1000;

alert(`watch out about the numbers !!! you have 10 seconds !!`)
//randomic generation function
function randomic(max, min){
    for( let x=0; x<5; x++){
        let cpuNumbers = Math.round(Math.random() * (max - min + min)) + min;
        if( randomNumbers.includes(cpuNumbers)){
            x--;
        }else{
            randomNumbers.push(cpuNumbers);
        }
    }
    console.log(`randomic numbers are:`, randomNumbers);
    document.getElementById('window').innerHTML = `${randomNumbers}`;
    console.log(randomNumbers);
}


randomic(100, 1);

setTimeout( cleanHTML, time);


function cleanHTML(){
    document.getElementById('window').innerHTML = '';
}

setTimeout(play, 6000);

function play(){
    for( let i=1; i<=5; i++){
        let inputNumbers = parseInt(prompt('write what you remember..'));
        userNumbers.push(inputNumbers);
        console.log(`your numbers are : `, inputNumbers);
        if(randomNumbers.includes(inputNumbers)){
            rightNumbers.push(inputNumbers);
            console.log('you rem :', rightNumbers)
        }else{
            mistake.push(inputNumbers);
            console.log('you forgot :', mistake)
        }
    }
    document.getElementById('risult').innerHTML = `you remember ` + rightNumbers + `& you mistook ` + mistake;
    document.getElementById('how-much').innerHTML = `you remember ` + rightNumbers.length + `numbers & you forgot ` + mistake.length + `numbers !!`;
    
}