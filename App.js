const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions=[
    
    {
    quiz:['katakuri', 'Perospero', 'Daifuku'],
    options:['Amande', 'King'],
    correct:1
},

{
    quiz:['Diamante', 'Vergo', 'Trebol'],
    options:['Cracker', 'Sugar'],
    correct:2
},

{
    quiz:['King', 'Jack', 'Sasaki'],
    options:['Page-One', 'Baby 5'],
    correct:1
},

{
    quiz:['Gangster Gastino', 'Sogeking', 'Usohachi'],
    options:['Usopp', 'Lucy'],
    correct:2
},
{
    quiz:['Shanks', 'Blackbeard', 'Luffy'],
    options:['kaido', 'Buggy'],
    correct:2
},
{
    quiz:['Ikkaku', 'Shachi', 'Penguin'],
    options:['Bepo', 'Buggy'],
    correct:1
},
{
    quiz:['Monkey.D.luffy', 'Eustass Kid', 'Trafalgar Law'],
    options:['Urouge', 'Sanji'],
    correct:1
}

]


let score=0;
let clicked=[];
scoreDisplay.textContent=score;

function dispQuestions(){
    questions.forEach(question =>{
        const questionBox= document.createElement('div');
        questionBox.classList.add('question-box');

        const logoDisplay=document.createElement('h1')
        logoDisplay.textContent="☠";
        questionBox.append(logoDisplay);

        question.quiz.forEach(tip=>{
            const tipText= document.createElement("p");
            tipText.innerHTML=tip;
            questionBox.append(tipText);

        })

       const questionButtons= document.createElement('div');
       questionButtons.classList.add('question-buttons');
       questionBox.append(questionButtons);

       question.options.forEach((option, optionIndex)=>{
        const questionButton=document.createElement('button');
        questionButton.classList.add('question-button');
        questionButton.textContent=option;

        questionButton.addEventListener('click', ()=>checkAnswer( questionBox,questionButton, option, optionIndex+1, question.correct))

        questionButtons.append(questionButton);
       })

       const answerDisplay=document.createElement('div');
       answerDisplay.classList.add('answer-display');

       questionBox.append(answerDisplay);



        questionDisplay.append(questionBox);

    })


}



dispQuestions();

function checkAnswer(questionBox, questionButton, option, optionIndex,  correctAnswer){

    if(optionIndex==correctAnswer)
    {
        score++;
        scoreDisplay.textContent=score;
        addResult(questionBox,"Correct!", 'Correct');

    }

    else{
        score--;
        scoreDisplay.textContent=score;
        addResult(questionBox,"Wrong answer!", 'wrong');
    }

    clicked.push(option)
    questionButton.disabled=clicked.includes(option);

}

function addResult(questionBox, answer, className){
    const answerDisplay= questionBox.querySelector('.answer-display');
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.remove('Correct');
    answerDisplay.classList.add(className);
    answerDisplay.textContent=answer;

}