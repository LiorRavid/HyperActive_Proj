'use strict'

function onInit(){
    window.addEventListener('resize',(event)=>{
        let windowWidth = event.target.innerWidth;
        const navBar = document.getElementById('nav-bar');
        if(windowWidth > 925){
            if(navBar.classList.contains("hidden")){
                navBar.classList.remove("hidden");
            }
        }
        if(windowWidth < 925){
            if(!navBar.classList.contains("hidden")){
                navBar.classList.add("hidden");
            }
        }
    })
}

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

function onOpenCategory(idDetails,idCategory){
    const element = document.getElementById(`${idDetails}`);
    element.classList.toggle("question-open");
    const category = document.getElementById(`${idCategory}`);
    const categoryChild = category.lastElementChild;
    // categoryChild.classList.toggle("plus-to-x");
    if(categoryChild.classList.contains('plus-to-x')){
        categoryChild.classList.remove('plus-to-x');
        categoryChild.classList.add('x-to-plus');
    }
    else if(categoryChild.classList.contains('x-to-plus')){
        categoryChild.classList.remove('x-to-plus');
        categoryChild.classList.add('plus-to-x');
    }
    else{
        categoryChild.classList.add('plus-to-x');
    }
}

function onHamburgerClick(){
    const navBar = document.getElementById('nav-bar');
    navBar.classList.toggle("hidden");
    const hamburgerBtn1 = document.getElementById('bar1');
    const hamburgerBtn2 = document.getElementById('bar2');
    const hamburgerBtn3 = document.getElementById('bar3');
    hamburgerBtn1.classList.add('bar1');
    hamburgerBtn2.classList.add('bar2');
    hamburgerBtn3.classList.add('bar3');
}

function onOpenCareers(){
    const careerDetails = document.getElementById('careers__details');
    careerDetails.classList.toggle("hidden");
}

function onOpenCareersDesktop(){
    if(window.innerWidth > 925){
        const careerDetails = document.getElementById('careers__details');
        careerDetails.classList.remove("hidden");
    }
}

function onCloseCareersDesktop(){
    if(window.innerWidth > 925){
        const careerDetails = document.getElementById('careers__details');
        careerDetails.classList.add("hidden");
    }
}