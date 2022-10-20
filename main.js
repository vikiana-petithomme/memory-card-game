

let cards = document.querySelectorAll('.card')
let cardContainer = document.querySelectorAll('.cardLayout')

console.log(cardContainer[0].children.length)
for (i = cardContainer[0].children.length; i >= 0; i--) {
    cardContainer[0].appendChild(cardContainer[0].children[Math.random() * i | 0]);
}

/*
for (let i=0; i < cards.length; i++){
    cards[i]= shuffleCards[i]
}

for (let i=0; i < cardArray.length; i++){
    let 
    imgLinks.push(newPosition) 
    
    backImgs[i].src = imgLinks[i]       
}*/

let flips = []
let counter = 0 
let resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', resetGame)

function resetGame(){
    // could also just reload the page
    counter = 0 
    console.log(counter)
    cards.forEach(card => {
    card.children[0].classList.remove('hide')
    card.children[1].classList.add('hide')
    card.classList.remove('match')
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




