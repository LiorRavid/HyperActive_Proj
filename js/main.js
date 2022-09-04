'use strict'

function onToggleQuestion(id,id2){
    const element = document.getElementById(`${id}`);
    element.classList.toggle("question-open");
    const question = document.getElementById(`${id2}`);
    const questionChild = question.lastElementChild;
    if(questionChild.classList.contains('fa-circle-arrow-down')){
        questionChild.classList.remove('fa-circle-arrow-down');
        questionChild.classList.add('fa-circle-arrow-up');
    }
    else{
        questionChild.classList.remove('fa-circle-arrow-up');
        questionChild.classList.add('fa-circle-arrow-down');
    }
}