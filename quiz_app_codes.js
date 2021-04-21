$(document).ready(function(){
    const hey = [
        {
            "Question": "Q1: HTML stands for",
            "option1":  "hyperText Machine Language",
            "option2":  "HyperText Markup Language",
            "option3":  "HyperText and links Markup Language",
            "option4":  "None of these",
            "ans":      "ans2"
        },
        {
            "Question": "Q2: The correct sequence of HTML tags for starting a webpage is",
            "option1":  "Head, Title, HTML, body",
            "option2":  "HTML, Body, Title, Head",
            "option3":  "HTML, Head, Title, Body",
            "option4":  "HTML, Title, Html, Body",
            "ans":      "ans3"
        },
        {
            "Question": "Q3: Which of the following attribute is used to provide a unique name to an element",
            "option1":  "class",
            "option2":  "id",
            "option3":  "type",
            "option4":  "None of the above",
            "ans":      "ans2"
        },
        {
            "Question": "Q4: What are the types of unordered or bulleted list in HTML?",
            "option1":  "disc, square, triangle",
            "option2":  "polygon, triangle, circle",
            "option3":  "disc, circle, square",
            "option4":  "All of the above",
            "ans":      "ans3"
        }
    ]

    //console.log(hey[1].Question);

 let question = document.querySelector("#question");
  /* var question = $("#question");
    question.click(function(){
        console.log("clicked");
    })*/
    let option1 = document.querySelector("#option1");
    let option2 = document.querySelector("#option2");
    let option3 = document.querySelector("#option3");
    let option4 = document.querySelector("#option4");
    let input = document.querySelectorAll("input");
   //sdsad let result = $("#result");
    let button = $("#btn");


    let name = prompt("please enter your name");

   let count = 0;
    let point = 0;
    function loadQstn(){
        question.innerHTML = hey[count].Question;

        option1.innerHTML =  hey[count].option1;
        option2.innerHTML =  hey[count].option2;
        option3.innerHTML =  hey[count].option3;
        option4.innerHTML =  hey[count].option4;
    }
    loadQstn()

    function checkedans(){
        let answer;
        input.forEach((currentElement) => {
            if(currentElement.checked){
                answer = currentElement.id;
            }
        });
        return answer;
    };
  
    function unchecked(){
        input.forEach(function(currentElement){
            currentElement.checked = false;
        })
    }


    button.click(function(){
       let checkedanswer = checkedans();
       console.log(checkedanswer);

       if(checkedanswer === hey[count].ans){
        point++;
       };

       unchecked();

       count++
       if(count < hey.length){
        loadQstn()

       }
       else{
        $(".showing_result").css("display", "flex");
        document.querySelector("#result").innerHTML = `hello ${name} your score is ${point}/4`;
        document.querySelector("#reload").addEventListener("click", function(){
            location.reload();
        })
       }
    })

})