
function sevenRandomNumbers(){
    const randomArray = []

    for(let i = 0; i< 7; i++){
        let random = Math.floor(Math.random() * 10) + 1

        randomArray.push(random)
    }


    return randomArray
}

console.log(sevenRandomNumbers())