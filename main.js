

let cards = document.querySelectorAll('.card')
let cardArray = Array.from(cards)

console.log(cardArray)

for (let i=0; i < cardArray.length; i++){
    shuffle(cardArray)
cards[i]= cardArray[i]
}


/*for (let i=0; i < cardArray.length; i++){
    let 
    imgLinks.push(newPosition) 
    
    backImgs[i].src = imgLinks[i]       
}*/

let flips = []
let counter = 0 

function shuffle(array){
    let currentIndex = array.length, randomIndex;
    // while there remain elements to shuffle.
    while(currentIndex != 0){
        // pick a remaining element
        randomIndex = Math.floor((Math.random()) * currentIndex);
        // 9 elements in array, reduces it by 1
        currentIndex--;
        // And swap it with  the current element
        [array[currentIndex], array[randomIndex]] =
        [array[randomIndex], array[currentIndex]]
    }
    return(array)
}

let resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', resetGame)

function resetGame(){
    // could also just reload the page
    counter = 0 
    console.log(counter)
    cards.forEach(card => {
    card.children[0].classList.remove('hide')
    card.children[1].classList.add('hide')
    })  
    document.querySelector('span').innerText = `FLIPS: ${counter}` 

    
}

cards.forEach(card => {
    
    card.addEventListener('click', flipCard)

    function flipCard(){
        
        let front = card.children[0]
        console.log(front)
        let back = card.children[1]
        console.log(back)


        front.classList.toggle('hide')

        back.classList.toggle('hide')

        let numFlips = flips.length

        if (card !== flips[numFlips-1]){
            flips.push(card)
            counter ++ 

        } else {
            document.querySelector('h3').innerText = 'Select a New Card'
        }


        document.querySelector('span').innerText = `FLIPS: ${counter}`


        if (flips.length%2 === 0){
            setTimeout(checkMatch, 300)
            function checkMatch(){
                
                console.log(flips[0].className)
                console.log(flips[1])
                
                if(flips[0].className === flips[1].className){
                    document.querySelector('h3').innerText = 'MATCH!'

                    console.log(flips[0])
                    flips[0].classList.add('match')
                    front.parentNode.classList.add('match')
                    
    
                } else if (flips[0].className !== flips[1].className){
                    document.querySelector('h3').innerText = 'TRY AGAIN!'
    
                    front.classList.toggle('hide')
                    back.classList.toggle('hide')
                    
                    flips[0].children[0].classList.toggle('hide')
    
                    flips[0].children[1].classList.toggle('hide')
                } 
    
                flips = []
                console.log(flips)
    
            }

            
        }
    
        
    }
   
    
})




