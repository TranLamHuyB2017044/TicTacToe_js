let cellButton = document.querySelectorAll('.cell')
let restartButton = document.querySelector('.restart')
let newGameButton = document.querySelector('.new-game')
let popup = document.querySelector('.popup')
let message = document.querySelector('#message')



// winning pattern array

let winningPattern = [
    [0, 1, 2], 
    [0, 3, 6], 
    [2, 5, 8],
    [6, 7, 8], 
    [3, 4, 5], 
    [1, 4, 7], 
    [0, 4, 8], 
    [2, 4, 6], 
]

// PLayers X play first

let Xturn = true
let count = 0


const disabledAllButton = () =>{
    cellButton.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide")
}


const enabledAllButton = () =>{
    cellButton.forEach(function(element) {
        element.innerText = ""
        element.disabled = false
    })

    popup.classList.add("hide")
}

restartButton.addEventListener("click", function(){
    count = 0
    enabledAllButton();
})

newGameButton.addEventListener("click", function(){
    count = 0
    enabledAllButton();
})


const winFunction = function (letter) {
    disabledAllButton();
    if(letter == "X"){
        message.innerHTML = "&#x1F389 <br> 'X' Wins tuoi lon"
    }
    else{
        message.innerHTML = "&#x1F389 <br> 'O' Wins tuoi lon"

    }
}

const Draw = function(){
    disabledAllButton();
    message.innerHTML = "&#x1F389 <br> It's a Draws"

}

// WinCheck
const winChecker = function(){
    for(let i of winningPattern){
        let[e1, e2, e3] = [
            cellButton[i[0]].innerText,
            cellButton[i[1]].innerText,
            cellButton[i[2]].innerText,
        ];

        if(e1 != "" && (e2 != "") && (e3 != "")){
            if(e1 == e2 && e2 == e3){
                winFunction(e1);
            }
        }
        
    }

}


cellButton.forEach(function(element){
    element.addEventListener('click', function(){
        if (Xturn){
            Xturn = false
            element.innerText = "X"
            element.disabled = true;
        }else{
            Xturn = true
            element.innerText = "O"
            element.disabled = false;
        }
        count += 1
        if (count === 9){
            Draw();
        }
        winChecker();
    })
})

window.onload = enabledAllButton;
