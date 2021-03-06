var selectedTestButton = undefined;
function onPageLoad() {
    testButtons.filter(el => el.category === 'B').forEach(el => {
        document.getElementById('testHolder1').innerHTML += '<button class= "button">' + el.name + '</button>'
    });
    testButtons.filter(el => el.category === 'C').forEach(el => {
        document.getElementById('testHolder2').innerHTML += '<button class= "button">' + el.name + '</button>'
    });
    testButtons.filter(el => el.category === 'D').forEach(el => {
        document.getElementById('testHolder3').innerHTML += '<button class= "button">' + el.name + '</button>'
    });
    [...document.getElementsByClassName("button")].forEach(button => {
        button.addEventListener('click', () => {
            [...document.getElementsByClassName("button")].forEach(button =>
                button.classList.remove("selected_button")),
                button.classList.add("selected_button"),
                selectedTestButton = button.innerHTML;
        })
    });
}

// Class for manipulating witsthis.allQuestions

class Question {
    constructor() {
        this.questionText;
        this.answers = [];
        this.category;
        this.img;
        this.id;
    }
    addAnswers(answer) {
        this.answers.push(answer);
    }
    deleteAnswer(answer) {
        this.answers = this.answers.filter((el) => {
            if (answer !== el.answer) {
                return el;
            }
        })
    }
}

class Questionair {
    constructor() {
        this.id;
        this.name;
        this.category;
        this.questions = [];
        this.correct = 0;
        this.false = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    deleteQuestion(question) {
        this.questions = this.questions.filter((el) => {
            if(question !== el.id) {
                return el;
            }
        })
    }
}

class QuestionsStorage {
    constructor() {
        this.allQuestions = [];
    }
    saveQuestion(question) {
        question.id = Math.random().toString();
        this.allQuestions.push(question);
        localStorage.setItem('allQuestions', JSON.stringify(this.allQuestions));
    }
    getAllQuestions() {
        let loadData = localStorage.getItem('allQuestions');
        if (loadData) {
            this.allQuestions = JSON.parse(loadData);
        }       
        return this.allQuestions;
    }
    delete(id){
      this.allQuestions = this.allQuestions.filter((el)=> el.id !== id);
      localStorage.setItem('allQuestions', JSON.stringify(this.allQuestions));
    }
}

class TestStorage {
    constructor() {
        this.allTests = [];
    }
    saveTest(test){
        this.allTests.push(test);
        localStorage.setItem('allTests', JSON.stringify(this.allTests));
    }
    getAllTests(){
        let loadTests = localStorage.getItem('allTests');
        if(loadTests) {
            this.allTests = JSON.parse(loadTests);
        }
        return this.allTests
    }
}
