let p1 = prompt("Enter player1 name")
let p2 = prompt("Enter player2 name")
document.querySelectorAll("p")[0].textContent = p1
document.querySelectorAll("p")[1].textContent = p2

function play() {
    

        


        let randNum = Math.floor(Math.random() * 6) + 1

        let randomImg = "images/dice" + randNum + ".png"

        let img1 = document.querySelectorAll("img")[0]
        img1.setAttribute("src", randomImg)

        let randNum2 = Math.floor(Math.random() * 6) + 1
        let randomImg1 = "images/dice" + randNum2 + ".png"
        let img2 = document.querySelectorAll("img")[1]
        img2.setAttribute("src", randomImg1)
        if (randNum == randNum2)
        {
            document.querySelector("h1").innerHTML = "Draw Score"
            
        }
        else if (randNum>randNum2)
        {
            document.querySelector("h1").innerHTML = p1 + " wins"
        }
        else
        document.querySelector("h1").innerHTML = p2 + " wins"

        
    }

