



//New Code



document.addEventListener("DOMContentLoaded", function() {

    const playButton = document.getElementById("playButton");
    //const outputArea = document.getElementById("outputArea");

    function playButtonClickerHandler () {
        function randomNum() {
            let n = Math.random() * 6;
            n = Math.floor(n) + 1;
            return n;
        }
        
        let num1 = randomNum();
        let num2 = randomNum();
        let img1Src = "./images/dice"+num1+".png";
        let img2Src = "./images/dice"+num2+".png";
        
        document.querySelector("img.img1").setAttribute("src", img1Src);
        document.querySelector("img.img2").setAttribute("src", img2Src);
        
        if (num1 > num2){
            document.querySelector("h1").textContent = "🚩Player 1 won!";
        } else if (num1 < num2) {
            document.querySelector("h1").textContent = "Player 2 won!🚩";
        } else {
            document.querySelector("h1").textContent = "It's a Draw!";
        } 

    }

    playButton.addEventListener("click", playButtonClickerHandler);

    const initialPageState = document.body.innerHTML;

    //function to reset the webpage to its initial stage
    function resetWebPage(){
    document.body.innerHTML = initialPageState;
    }

    //attach an event listener to the reset button
    const resetbutton = document.getElementById("resetButton");
    resetbutton.addEventListener('click',resetWebPage);


})

