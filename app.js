var quizData = [
    {
      question: "What is JavaScript?",
      a: "client side",
      b: "html",
      c: "server lang",
      d: "machine languge",
      correct: "a",
    },
    {
      question: "What is the full meaning of CSS?",
      a: "Cascading Style Server",
      b: "Cascade Styling Surface",
      c: "Cascading Surface Sheet",
      d: "Cascading Style Sheets",
      correct: "d",
    },
    {
      question: "What is the most popular programming language in 2022?",
      a: "Java",
      b: "PHP",
      c: "html",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "Which company developed JavaScript??",
      a: "Netscape .",
      b: "goolge",
      c: "mete company",
      d: "spice X",
      correct: "a",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Stylesheet",
      c: "JavaScript Object Notation",
      d: "Hyper Markup Language",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1998",
      b: "1993",
      c: "1995",
      d: "2000",
      correct: "c",
    },
    {
      question: "All these are Server Side Language except?",
      a: "HTML",
      b: "PHP",
      c: "Node.js",
      d: "Ruby on rails",
      correct: "a",
    },
    {
      question: "All these are JavaScript Framework except?",
      a: "Laravel",
      b: "React.js",
      c: "Node.js",
      d: "Vue.js",
      correct: "a",
    },
  ];
  var currInd = 0;
  var score = 0;
  var eleId = document.getElementsByTagName("input");
  var ques = document.getElementById("ques");
  var optA = document.getElementById("optA");
  var optB = document.getElementById("optB");
  var optC = document.getElementById("optC");
  var optD = document.getElementById("optD");
  
  function getData() {
    var obj = quizData[currInd];
    ques.innerHTML = obj.question;
    optA.innerHTML = obj.a;
    optB.innerHTML = obj.b;
    optC.innerHTML = obj.c;
    optD.innerHTML = obj.d;
  }
  
  function selectedOpt() {
    var res = "";
    for (var i = 0; i < eleId.length; i++) {
      if (eleId[i].checked) {
        res = eleId[i].id;
      }
    }
    return res;
  }
  
  function nextData() {
    var opt = selectedOpt();
    if (opt == quizData[currInd].correct) {
      score++;
    }
    currInd++;
    for (var i = 0; i < eleId.length; i++) {
      if (eleId[i].checked) {
        eleId[i].checked = false;
      }
    }
    console.log(eleId)
    if (currInd < quizData.length) {
      getData();
    } else {
      var div = document.getElementById("mainDiv");
      div.innerHTML = `<h1 class="set1">Your Score Is ${score} Out Of 8</h1> 
      <button onclick="location.reload()" class="bt2">Retake Quiz</button>`;
    }
  }
  