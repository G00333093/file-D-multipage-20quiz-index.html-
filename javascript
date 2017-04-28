var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
//setting variables
		
  
 var questions=[
 {
	 question:"How many sides does a square have?",//question
	 correctAnswer: "4",//right answer to question
//list of multiple choice answers
answer0: "6",
answer1: "3",
answer2: "4",
answer3: "9"
},
{
	question: "What is the capital of Ireland?",//question 
	correctAnswer:"Dublin",//right answer to question
	//list of multiple choice answers
	answer0: "Galway",
	answer1: "Dublin",
	answer2: "Kerry",
	answer3: "Belfast"
},
{
	question: "Who is the president of the United States?",//question 
	correctAnswer: "Donald Trump",//right answer to question
	//list of multiple choice answers
	answer0: "Donald Trump",
	answer1: "Barrack Obama",
	answer2: "Abraham Lincoln",
	answer3: "Bill Clinton"
},
{
	question: "What is one third of 900?",//question 
	correctAnswer: "300",//right answer to question
	//list of multiple choice answers
	answer0: "100",
	answer1: "300",
	answer2: "150",
	answer3: "200"
},
{  
	question: "What is 6 multiplied by 7",//question 
	correctAnswer: "42",//right answer to question
	//list of multiple choice answers
	answer0: "32",
	answer1: "42",
	answer2: "50",
	answer3: "52"
},
{
	question: "How many days are there in a week?",//question 
	correctAnswer: "7",//right answer to question
	//list of multiple choice answers
	answer0: "7",
	answer1: "8",
	answer2: "12",
	answer3: "6"
},
{
	question: "What is the capital of Japan",//question 
	correctAnswer: "Tokyo",//right answer to question
	//list of multiple choice answers
	answer0: "Korea",
	answer1: "Tokyo",
	answer2: "Shanghea",
	answer3: "Hong Kong"
},
{
	question: "How many years are in a decade?",//question 
	correctAnswer: "10",//right answer to question
	//list of multiple choice answers
	answer0: "10",
	answer1: "50",
	answer2: "100",
	answer3: "200"
},
{
	question: "How many years are in a century?",//question 
	correctAnswer: "100",//right answer to question
	//list of multiple choice answers
	answer0: "100",
	answer1: "300",
	answer2: "150",
	answer3: "200"
},
{
	question: "Who invented the light bulb?",//question 
	correctAnswer: "Thomas Edison",//right answer to question
	//list of multiple choice answers
	answer0: "Thomas Edison",
	answer1: "Nicolas Cage",
	answer2: "Elvis Presley",
	answer3: "Michelangelo"
},
{
	question: "What is 5 mulitiplied by 5",//question 
	correctAnswer: "25",//right answer to question
	//list of multiple choice answers
	answer0: "20",
	answer1: "35",
	answer2: "25",
	answer3: "15"
},
{
	question: "Who was the first man on the moon?",//question 
	correctAnswer: "Neil Armstrong",//right answer to question
	//list of multiple choice answers
	answer0: "Neil Armstrong",
	answer1: "Nicolas Cage",
	answer2: "John F.Kennedy",
	answer3: "Bin Laden"
},
{
	question: "What currency is used in Britain?",//question 
	correctAnswer: "Pounds",//right answer to question
	//list of multiple choice answers
	answer0: "Euros",
	answer1: "Pounds",
	answer2: "Yen",
	answer3: "Dollars"
},
{
	question: "What is a famous Irish draft?",//question 
	correctAnswer: "Guinness",//right answer to question
	//list of multiple choice answers
	answer0: "Guinness",
	answer1: "Carlsberg",
	answer2: "Smirnoff",
	answer3: "Bourbon"
},
{
	question: "What is 700 divided by 10?",//question 
	correctAnswer: "70",//right answer to question
	//list of multiple choice answers
	answer0: "70",
	answer1: "60",
	answer2: "7",
	answer3: "17"
},
{
	question: "What are the colours of the rainbow?",//question 
	correctAnswer: "red, orange, yellow, green, blue, indigo and violet",//right answer to question
	//list of multiple choice answers
	answer0: "red, orange, yellow, green, blue, indigo and violet",
	answer1: "red,black, blue, pink, orange, yellow",
	answer2: "Blue, yellow, red, green, indigo, velvet",
	answer3: "Red, blue, yellow, pink, orange, green"
},
{
	question: "Which year did world war 2 end?",//question 
	correctAnswer: "1945",//right answer to question
	//list of multiple choice answers
	answer0: "1944",
	answer1: "1945",
	answer2: "1947",
	answer3: "1955"
},
{
	question: "What is the most common language in the world?",//question 
	correctAnswer: "English",//right answer to question
	//list of multiple choice answers
	answer0: "English",
	answer1: "Irish",
	answer2: "French",
	answer3: "German"
},
{
	question: "What is the largest continent in the world?",//question 
	correctAnswer: "Asia",//right answer to question
	//list of multiple choice answers
	answer0: "Asia",
	answer1: "Africa",
	answer2: "North America",
	answer3: "Europe"
},
{
	question: "What is the largest country in the world?",//question 
	correctAnswer: "Russia",//right answer to question
	//list of multiple choice answers
	answer0: "America",
	answer1: "China",
	answer2: "Brazil",
	answer3: "Russia"
}


];

function _(x)
{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}
function renderQuestion()
{
	test = _("test");
	if(pos >= questions.length)//If position is greater or equal to the number of questions
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct(" +percent() + "%)</h2>";//Print # correct out of 20
		_("General Knowledge Quiz").innerHTML += " Thank you for completing the quiz";//Print "Thank you .... "
		pos = 0; 
		correct = 0;
		return false;
	}
	var bar=document.getElementById("progressBar");//Progress bar value
	_("General Knowledge Quiz").innerHTML = "Question "+(pos+1)+" of "+questions.lenght;
	
	bar.value = (pos+1)//Progress bar increments as we go through questions, starts at 1
	var quizAnswers = []
	//push all potential answers to the quizAnswers array
	quizAnswers[0] = questions[pos].answer0;
	quizAnswers[1] = questions[pos].answer1;
	quizAnswers[2] = questions[pos].answer2;
	quizAnswers[3] = questions[pos].answer3;
	
	
	console.log("Unshuffled answers" + quizAnswers);
	//shuffle the answers
	var shuffledAnswers = shuffleArray(quizAnswers);
	console.log("Shuffled answers" + shuffledAnswers);
	
	question = questions[pos].question;//question is in position 0 in the array(zero indexed)
	choiceA = shuffledAnswers[0];//choice A is in position 1 in the array
	choiceB = shuffledAnswers[1];//choice B is in position 2 in the array
    choiceC = shuffledAnswers[2];//choice C is in position 3 in the array
	choiceD = shuffledAnswers[3];//choice D is in position 4 in the array
	
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; 
	//Radio button
	test.innerHTML += "<input type='radio' name= 'choices' value='"+choiceB+"' > "+choiceB+"<br>";
	//Radio button
    test.innerHTML += "<input type='radio' name= 'choices' value='"+choiceC+"' > "+choiceC+"<br>";
	test.innerHTML += "<input type='radio' name= 'choices' value='"+choiceD+"' > "+choiceD+"<br>";
	//Radio button
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer ()
{
	choices = document.getElementsByName("choices");//Creates an array
	for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the lenght of the choices, increment it by one
	{
		if (choices[i].checked)//if a choice is checked[
		{
			choice = choices[i].value;//Take the value of that choice and put it into choice
		}
	}
	console.log("my choice is " + choice);
	
	if(choice == questions[pos].correctAnswer)//If the value of choices is equal to position 4
	{
		alert('Correct!');//Alert correct
		correct++;//Increment your correct answers by one 
	}
	else//or else
	{
		alert('sorry wrong answer.The correct answer is ' +questions[pos].correctAnswer);
	}
	pos++; // Increment position by one ie go on to the next question
	renderQuestion();// go to render question again
}
	
//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers
function shuffleArray(array)
{
	for (var i = array.length - 1; i > 0; i--)
	{
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
// print part
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
	

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);
