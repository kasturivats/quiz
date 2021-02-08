window.onload= function(){
    show(0);
}
let questions=[
    {
        id:1,
        question:"Which of the following is not a valid variable name declaration? ",
        answer: "int 3_a;",
        options:[
            "int _a3;",
            "int a_3;",
            "int 3_a;",
            "int _3a"
        ]

    },
    {
        id:2,
        question:" Which of the following is not a valid C variable name?",
        answer:"int $main;",
        options:[
            "int number;",
            "float rate;",
            "int variable_count;",
            "int $main;"

        ]
    },
    {
        id:3,
        question:"All keywords in C are in ________?",
        answer:" LowerCase letters",
        options:[
            "LowerCase letters",
            "UpperCase letters",
            "CamelCase letters",
            "None of the mentioned"
        ]
    },
    {
        id:4,
        question: "If you type the following code in the console window, what result will you get? 3>2>1===false;",
        answer: "True",
        options:[
            "True",
            "False",
            "None of the above",
            "Both are correct"
        ]

    },
    {
        id:5,
        question:"JavaScript is a ___ -side programming language.",
        answer: "Client",
        options:[
            "Client",
            "Server",
            "Both",
            "None"
        ]
    },
    {
        id:6,
        question:"Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answer: "alert(“Hello DataFlair!”);",
        option:[
            "alertBox(“Hello DataFlair!”);",
            "msgAlert(“Hello DataFlair!”);",
            "alert(Hello DataFlair!);",
            "alert(“Hello DataFlair!”);"

        ]
    },
    {
        id:7,
        question:" How do you find the minimum of x and y using JavaScript?",
        answer:"Math.min(x,y)",
        options:[
            "min(x,y);",
            "Math.min(x,y)",
            "Math.min(xy)",
            "min(xy)"
        ]

    },
    {
        id:8,
        question:"Which JavaScript label catches all the values, except for the ones specified?",
        answer: "default",
        options:[
            "catch",
            "label",
            "try",
            "default"
        ]
    },
    {
        id:9,
        question:"Which are the correct if statements to execute certain code if “x” is equal to 2?",
        answer: "if(x==2)",
        options:[
            "if(x 2)",
            "if(x=2)",
            "if(x==2)",
            "if(x!=2)"
        ]
    },
    // {
    //     id:10,
    //     question: "Inside which HTML element do we put the JavaScript?",
    //     answer: "<script>",
    //     options:[
    //         "<script>",
    //         "<javascript>",
    //         "<js>",
    //         "<scripting>"
    //     ]
    // },
];





function submitForm(e){
    e.preventDefault();
    let result =document.forms["form"]["text_input"].value;
    //store player name in session storage
    sessionStorage.setItem("name",result);
    // document.write(result);
    // alert(result);
    console.log(result);
location.href="second.html";//redirect to different page
}

let question_count=0; //for question count
let score=0;           // for score

function next(){



    let user_answer = document.querySelector("li.option.active").innerHTML; // to get the selected option by user
    if (user_answer == questions[question_count].answer){    
        console.log("correct")
        score+=10;                                                          // score incrementation 
        sessionStorage.setItem("Score", score);                             //storing the score in session storage
       
    }                                                                       // to match the user's answer with conputer's answer
    else {
        console.log("incorrect")
       
    }


    if( question_count == questions.length -1){    
        sessionStorage.setItem("time",`${minutes} Min & ${seconds} Sec`);                         // to redirect to the last page after submitting the last answer
        clearInterval(mytime);
        location.href="end.html";
        return;                                                              // don't want function to run again
    }



    question_count++;
    show(question_count);
    console.log(question_count);
}
function show(count){
    let ques = document.getElementById("questions"); //questions is the id of HTML div
    ques.innerHTML =`<h2>Q${question_count+1} .${questions[count].question}</h2>
    <ul class="option_group" >
                    <li class="option"> ${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>`;
                toggle();
 } 
 //questions is the name of list in which questions are stored


 //creating a function to high-light the selected answer
 function toggle() {
    let option = document.querySelectorAll("li.option");

    //calling onclick function for all options with the help of for loop
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  