
        function play() {
           const computerNumberChoice = parseInt(randomnumber(1, 5));
           const playerChoice = document.querySelector("select").selectedIndex;
           const playNumberChoice =parseInt(document.querySelector("input").value);

           if(playNumberChoice < 1 || playNumberChoice > 5 || isNaN(playNumberChoice)) {
              alert("escolha um numero de 1 a 5");
              return;
           }
            
           const sum = computerNumberChoice + playNumberChoice;

           const result = sum % 2;
           //0 = par, 1 = impar
           if ((playerChoice == 0 && result == 0) || (playerChoice == 1 && result > 0)){
               document.querySelector("p").innerHTML = "você ganhou";
               document.querySelector("p").style.color = "greenyellow";
           } else {
                document.querySelector("p").innerHTML = "você perdeu";
                document.querySelector("p").style.color = "indianred";
           }

           document.querySelectorAll("p")[1].innerHTML = "numero jogado pelo computador: " + computerNumberChoice
           document.querySelector("h4").innerHTML = sum + " => " + (result == 0 ? "deu par" : "deu impar");
        }

        function randomnumber(min, max) {
            return (Math.random() * (max -min) + min).toFixed();
        }
    