'use strict'

function onToggleQuestion(id){
    const element = document.getElementById(`${id}`);
    element.classList.toggle("question-open");
}