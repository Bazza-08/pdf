// THings to add 
// Error for no selected times tables 
// Error for no selected times or divide 




// Select numberOfSums value 
var numberOfSums;
// Empty array for checked items 
var selected = [];
var selectedTimesDivide = [];
var selectedValue;
// Select button or submit
let submit = document.querySelector('#submit');

var g = ['&times;', '&divide;'];

var checkboxes;

var checkedboxesTimesDivide;

let rn1;
let rn2;
let randomNumber;
let createLi;
let selectOl;
let selectli;
var td;

document.getElementById('sums1').style.display= 'none';

// Create array of checked times checkboxes

function createArray() {
    checkedboxes = document.querySelectorAll("#tables input[type=checkbox]:checked");
    for(var i=0; i < checkedboxes.length; i++) {
        selected.push(checkedboxes[i].value);
    };
};

// pick checked boxes for times and divide

function divideTimes() {
    checkedboxesTimesDivide = document.querySelectorAll("#times-divide input[type=checkbox]:checked");
    for(var i=0; i < checkedboxesTimesDivide.length; i++) {
        selectedTimesDivide.push(checkedboxesTimesDivide[i].value);
        if (selectedTimesDivide.includes('times') && selectedTimesDivide.includes('divide')) {
            for(i=0; i < numberOfSums; i++) {
                x = Math.floor(Math.random()*g.length);
                td = g[x];
            }
        } else if (selectedTimesDivide.includes('divide')) {
            td = g[1];
        } else if (selectedTimesDivide.includes('times')) {
            td = g[0];
        }
    };
};


function createArray() {
    checkedboxes = document.querySelectorAll("#tables input[type=checkbox]:checked");
    for(var i=0; i < checkedboxes.length; i++) {
        selected.push(checkedboxes[i].value);
    };
};

// Randomly select timetable number from array of checked boxes

function createRSN2() {
    a = () => Math.floor(Math.random()*selected.length);
    b = a();
    rsn2=selected[b];
}

// if division largest dividend is 12 * rsn2
function createRSN1division() {
    randomSingleNum = () => Math.floor(Math.random()*(rsn2*12+1));
    rsn1 = randomSingleNum();
}

// if td(timesDivide) = &times; largest rsn1 = 12
function createRSN1times () {
    randomSingleNum = () => Math.floor(Math.random()*13);
    rsn1 = randomSingleNum();
}

// Print sums to screen

function generateSums() {
    submit.addEventListener('click', () => {
        numberOfSums = document.querySelectorAll('input')[0].value;
       

        // Error message for number of Sums 
        if (numberOfSums <= 0 || numberOfSums > 80 || numberOfSums === '') {
            alert("Please insert a number between 1-80 in the Number of Sums.");
        } 
        else {
            for (i=0; i < numberOfSums; i++) {
                createArray();
                createRSN2();
                
               
                divideTimes();
    
    
                // Dividing answer is max 12
                if(td=== '&divide;') {
                    createRSN1division();
                    while(rsn1%rsn2 != 0) {
                        createRSN1division();
                    }
                } 
                // if times max rsn1 = 12
                if ( td === '&times;') {
                    createRSN1times(); 
                }
    
                selectOl = document.querySelector('ol');
                createLi = document.createElement('li');
                selectOl.appendChild(createLi);
                selectLi = document.querySelectorAll('#sums1 li')[i].innerHTML = rsn1 + ' ' + td + ' ' + rsn2 + ' = ______';
    
                // Clear times/divide array
    
                selectedTimesDivide = [];
                selected = [];
                document.getElementById('sums1').style.display= '';
            }
        } 
    });
};

generateSums();