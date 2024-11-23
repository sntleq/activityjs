alert('Welcome!');
let name = prompt('What should we call you?', 'Guest')
if (!name) {
    alert("That's fine too, I guess.");
    name = 'cool person'
}
if (confirm('Proceed?')) alert('Thank you for the confirmation, ' + name + '!');
else alert('Understood, ' + name + '.');

function changeBG() {
    let bg = document.getElementById('div4');
    let colors = ['rgb(196, 215, 255)', 'rgb(135, 162, 255)', 'rgb(255, 215, 196)'];
    let current = bg.style.backgroundColor;
    let index = (colors.indexOf(current) + 1) % 3;
    bg.style.backgroundColor = colors[index];
}

function promptSum() {
    let num1 = parseInt(prompt('Enter first number:'));
    if (!num1) {
        alert('Aww :(');
        return;
    }
    let num2 = parseInt(prompt('Enter second number:'));
    if (!num2) alert('Aww :(');
    if (num1 && num2) alert('The sum is ' + (num1 + num2) + '.');
}

function changeText() {
    let p = document.getElementById('text6');
    p.innerText = 'The text has changed!'
}

function confirmAge() {
    let age = parseInt(prompt('Enter your age:'));
    if (!age) {
        alert('Aww :(');
        return;
    }
    if (confirm('Are you sure you put the correct age?')) {
        alert('Thank you for confirming your age.');
    }
    else alert('Please try again.');
}