$(document).ready(function () {
    const hey = [
        {
            "Question": "Q1: HTML stands for",
            "option1": "hyperText Machine Language",
            "option2": "HyperText Markup Language",
            "option3": "HyperText and links Markup Language",
            "option4": "None of these",
            "ans": "ans2"
        },
        {
            "Question": "Q2: The correct sequence of HTML tags for starting a webpage is",
            "option1": "Head, Title, HTML, body",
            "option2": "HTML, Body, Title, Head",
            "option3": "HTML, Head, Title, Body",
            "option4": "HTML, Title, Html, Body",
            "ans": "ans3"
        },
        {
            "Question": "Q3: Which of the following attribute is used to provide a unique name to an element",
            "option1": "class",
            "option2": "id",
            "option3": "type",
            "option4": "None of the above",
            "ans": "ans2"
        },
        {
            "Question": "Q4: What are the types of unordered or bulleted list in HTML?",
            "option1": "disc, square, triangle",
            "option2": "polygon, triangle, circle",
            "option3": "disc, circle, square",
            "option4": "All of the above",
            "ans": "ans3"
        }
    ]
    const hey1 = [
        {
            "Question": "Q1: What is love?",
            "option1": "friendship ",
            "option2": "trust",
            "option3": "responsibility",
            "option4": "All of the above",
            "ans": "ans4"
        },
        {
            "Question": "Q2: What should be the most priority in a relationship",
            "option1": "To love each other",
            "option2": "Have faith",
            "option3": "Commitment",
            "option4": "Care",
            "ans": "ans3"
        },
        {
            "Question": "Q3: What is the symbol of love",
            "option1": "Color Red",
            "option2": "The Heart",
            "option3": "The circle",
            "option4": "None of the above",
            "ans": "ans2"
        },
        {
            "Question": "Q4: what makes someone your soulmate?",
            "option1": " a connection of minds",
            "option2": "a mutual respect",
            "option3": "an unconditional love",
            "option4": "All of the above",
            "ans": "ans4"
        }
    ]
    const hey2 = [
        {
            "Question": "Q1: National Income estimates in India are prepared by",
            "option1": "Planning Commission",
            "option2": "Reserve Bank of India",
            "option3": "Central statistical",
            "option4": "None of these",
            "ans": "ans3"
        },
        {
            "Question": "Q2: MS-Word is an example of",
            "option1": "Application software",
            "option2": "A processing device",
            "option3": "An operating system",
            "option4": "An input device",
            "ans": "ans1"
        },
        {
            "Question": "Q3: Fathometer is used to measure",
            "option1": " Earthquakes",
            "option2": "Ocean depth",
            "option3": "Rainfall",
            "option4": "Sound intensity",
            "ans": "ans2"
        },
        {
            "Question": "Q4: The purest form of iron is",
            "option1": "wrought iron",
            "option2": "steel",
            "option3": "pig iron",
            "option4": "nickel steel",
            "ans": "ans1"
        }
    ]
    const hey3 = [
        {
            "Question": "Q1: WISPA is related to which of the following sports?",
            "option1": "Football",
            "option2": "Chess",
            "option3": "Cricket",
            "option4": "Squash",
            "ans": "ans4"
        },
        {
            "Question": "Q2: Which of the following sports was invented by James Naismith?",
            "option1": "Football",
            "option2": "Basket Ball",
            "option3": "Ice Hockey",
            "option4": "Badminton",
            "ans": "ans2"
        },
        {
            "Question": "Q3: THE WORLD BENEATH HIS FEET is a Biography of?",
            "option1": "Pulela Gopichand",
            "option2": "Nawab Pataudi",
            "option3": "Ajit Wadekar",
            "option4": "Sachin Tendulkar",
            "ans": "ans1"
        },
        {
            "Question": "Q4: Who was the first President of IAAF?",
            "option1": "Adriaan Paulen",
            "option2": "Sigfrid Edstrom",
            "option3": "Primo Nebiolo",
            "option4": "Lamine Diack",
            "ans": "ans2"
        }
    ]


    //for program quiz

    $("#program").click(function () {
        $(".box_for_chose_type").css("display", "none");

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
        function loadQstn() {
            question.innerHTML = hey[count].Question;

            option1.innerHTML = hey[count].option1;
            option2.innerHTML = hey[count].option2;
            option3.innerHTML = hey[count].option3;
            option4.innerHTML = hey[count].option4;
        }
        loadQstn()

        function checkedans() {
            let answer;
            input.forEach((currentElement) => {
                if (currentElement.checked) {
                    answer = currentElement.id;
                }
            });
            return answer;
        };

        function unchecked() {
            input.forEach(function (currentElement) {
                currentElement.checked = false;
            })
        }


        button.click(function () {
            let checkedanswer = checkedans();
            console.log(checkedanswer);

            if (checkedanswer === hey[count].ans) {
                point++;
            };

            unchecked();

            count++
            if (count < hey.length) {
                loadQstn()

            }
            else {
                $(".showing_result").css("display", "flex");
                document.querySelector("#result").innerHTML = `hello ${name} your score is ${point}/4`;
                document.querySelector("#reload").addEventListener("click", function () {
                    location.reload();
                })
            }



        })
    })

    //for Love quiz

    $("#love").click(function () {
        $(".box_for_chose_type").css("display", "none");

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
        function loadQstn() {
            question.innerHTML = hey1[count].Question;

            option1.innerHTML = hey1[count].option1;
            option2.innerHTML = hey1[count].option2;
            option3.innerHTML = hey1[count].option3;
            option4.innerHTML = hey1[count].option4;
        }
        loadQstn()

        function checkedans() {
            let answer;
            input.forEach((currentElement) => {
                if (currentElement.checked) {
                    answer = currentElement.id;
                }
            });
            return answer;
        };

        function unchecked() {
            input.forEach(function (currentElement) {
                currentElement.checked = false;
            })
        }


        button.click(function () {
            let checkedanswer = checkedans();
            console.log(checkedanswer);

            if (checkedanswer === hey1[count].ans) {
                point++;
            };

            unchecked();

            count++
            if (count < hey1.length) {
                loadQstn()

            }
            else {
                $(".showing_result").css("display", "flex");
                document.querySelector("#result").innerHTML = `hello ${name} your score is ${point}/4`;
                document.querySelector("#reload").addEventListener("click", function () {
                    location.reload();
                })
            }



        })
    })

    //for GK quiz

    $("#GK").click(function () {
        $(".box_for_chose_type").css("display", "none");

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
        function loadQstn() {
            question.innerHTML = hey2[count].Question;

            option1.innerHTML = hey2[count].option1;
            option2.innerHTML = hey2[count].option2;
            option3.innerHTML = hey2[count].option3;
            option4.innerHTML = hey2[count].option4;
        }
        loadQstn()

        function checkedans() {
            let answer;
            input.forEach((currentElement) => {
                if (currentElement.checked) {
                    answer = currentElement.id;
                }
            });
            return answer;
        };

        function unchecked() {
            input.forEach(function (currentElement) {
                currentElement.checked = false;
            })
        }


        button.click(function () {
            let checkedanswer = checkedans();
            console.log(checkedanswer);

            if (checkedanswer === hey2[count].ans) {
                point++;
            };

            unchecked();

            count++
            if (count < hey2.length) {
                loadQstn()

            }
            else {
                $(".showing_result").css("display", "flex");
                document.querySelector("#result").innerHTML = `hello ${name} your score is ${point}/4`;
                document.querySelector("#reload").addEventListener("click", function () {
                    location.reload();
                })
            }



        })
    })

    //for sport quiz

    $("#sport").click(function () {
        $(".box_for_chose_type").css("display", "none");

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
        function loadQstn() {
            question.innerHTML = hey3[count].Question;

            option1.innerHTML = hey3[count].option1;
            option2.innerHTML = hey3[count].option2;
            option3.innerHTML = hey3[count].option3;
            option4.innerHTML = hey3[count].option4;
        }
        loadQstn()

        function checkedans() {
            let answer;
            input.forEach((currentElement) => {
                if (currentElement.checked) {
                    answer = currentElement.id;
                }
            });
            return answer;
        };

        function unchecked() {
            input.forEach(function (currentElement) {
                currentElement.checked = false;
            })
        }


        button.click(function () {
            let checkedanswer = checkedans();
            console.log(checkedanswer);

            if (checkedanswer === hey3[count].ans) {
                point++;
            };

            unchecked();

            count++
            if (count < hey3.length) {
                loadQstn()

            }
            else {
                $(".showing_result").css("display", "flex");
                document.querySelector("#result").innerHTML = `hello ${name} your score is ${point}/4`;
                document.querySelector("#reload").addEventListener("click", function () {
                    location.reload();
                })
            }



        })
    })





})
