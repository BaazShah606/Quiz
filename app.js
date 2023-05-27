const questions = [

    {
        'que': 'Who invented the Barometer?',
        'a': 'Moore',
        'b': 'Meale',
        'c': 'Evangelista Torricelli',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'Which of the following is a marked up language?',
        'a': 'HTML',
        'b': 'JavaScript',
        'c': 'PHP',
        'd': 'CSS',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'Where is Indira Gandhi Center for Atomic Research located?',
        'a': 'Jharkhand',
        'b': 'New Delhi',
        'c': 'Tamil Nadu',
        'd': 'Uttar Pradesh',
        'correct': 'c'
    },
    {
        'que': 'Who was the author of Mahabharat?',
        'a': 'Raja Harish Chandra',
        'b': 'Ved Vyas',
        'c': 'Kali Das',
        'd': 'Moti Lal Nehru',
        'correct': 'b'
    },
    {
        'que': 'Who was the Femina Miss India winner of 2015?',
        'a': 'Aditi Arya',
        'b': 'Pooja Yadav',
        'c': 'Himanshi Kumari',
        'd': 'Sachin Kumar',
        'correct': 'a'
    },
    {
        'que': 'Where is the headquater of UNESCO located?',
        'a': 'Geneva',
        'b': 'Paris',
        'c': 'New York',
        'd': 'New Delhi',
        'correct': 'b'
    },
    {
        'que': 'What is the full form of SEBI?',
        'a': 'State Efficiency Bureau Institute',
        'b': 'Small Exchange Board of India',
        'c': 'Securities and Exchange Board of India',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'On which date is National Mathematics Day celebrated?',
        'a': 'On December 22',
        'b': 'On November 13',
        'c': 'On Feburary 12',
        'd': 'On April 21',
        'correct': 'a'
    },
    {
        'que': 'In which year was the Reserve Bank of India established?',
        'a': 'In 1967',
        'b': 'In 1943',
        'c': 'In 1912',
        'd': 'In 1935',
        'correct': 'd'
    },
    {
        'que': 'In the Constitution of India, provisions of Center-State relations have been taken from the Constitution of which country?',
        'a': 'Canada',
        'b': 'America',
        'c': 'Europe',
        'd': 'Brazil',
        'correct': 'a'
    },
    {
        'que': 'Which Article of Indian Constitution deals with equality before law?',
        'a': 'Article 12',
        'b': 'Article 14',
        'c': 'Article 7',
        'd': 'Article 23',
        'correct': 'b'
    },
    {
        'que': 'Under which Article of Indian Constitution, Parliament can legislate on any subject of the State List?',
        'a': 'Article 249',
        'b': 'Article 340',
        'c': 'Article 370',
        'd': 'Article 209',
        'correct': 'a'
    },
    {
        'que': 'Who appoints the chairman and members of the Human Rights Commission?',
        'a': 'Prime Minister',
        'b': 'President',
        'c': 'Governor',
        'd': 'Chief Jstice',
        'correct': 'c'
    },
    {
        'que': 'How many members can be nominated by the President for Rajya Sabha?',
        'a': '13',
        'b': '15',
        'c': '11',
        'd': '12',
        'correct': 'd'
    },
    {
        'que': 'Who was the first woman judge of the High Court?',
        'a': 'Fatima Biwi',
        'b': 'Sonam Kumari',
        'c': 'Kiren Bedi',
        'd': 'Ranu Mandal',
        'correct': 'a'
    },
    {
        'que': 'Which state first established Panchayati Raj System?',
        'a': 'Bihar',
        'b': 'Uttar Pradesh',
        'c': 'Rajasthan',
        'd': 'Jharkhand',
        'correct': 'c'
    },
    {
        'que': 'Which Article of Indian Constitution is related to freedom of press?',
        'a': 'Article-12',
        'b': 'Article-19',
        'c': 'Article-20',
        'd': 'Article-13',
        'correct': 'b'
    },
    {
        'que': 'What is the detailed meaning of MNREGA?',
        'a': 'Mahatma Gandhi National Rural Employment Guarantee Act',
        'b': 'Mahatma Gandhi National Rural Employment Grand Act',
        'c': 'Mahatma Gandhi National Really Employment Guarantee Act',
        'd': 'Mahatma Gandhi National Rare Employment Guarantee Act',
        'correct': 'a'
    },
    {
        'que': 'Who was the Chairman of "State Reorganisation Commission" in the year 1953?',
        'a': 'Justice Fazal Ali',
        'b': 'Justice Fazil Alam',
        'c': 'Justice Gafoor Ali',
        'd': 'Justice Chandra Shekhar',
        'correct': 'a'
    },
     

]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options')
let data;
const loadQuestion = ()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    data = questions[index];
    queBox.innerText = `${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText  = data.a;
    optionInputs[1].nextElementSibling.innerText  = data.b;
    optionInputs[2].nextElementSibling.innerText  = data.c;
    optionInputs[3].nextElementSibling.innerText  = data.d;
    
}
const submitQuiz = ()=>{
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            } 
        }
    )
    return answer;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = ()=>{
    document.getElementById('box').innerHTML = `
        <div style="text-align:center">
            <h3>Thank for playing the quiz</h3>
            <h2>${right}/${total} are correct</h2>
            <h1>${right/total*100}%</h1>
        </div>
    `
}

loadQuestion();