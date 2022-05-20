const body = document.getElementById('container');
const header = document.getElementById('header-container');
const urgentHeader = document.querySelectorAll('.emergency-tasks h3');
const urgentTask = document.querySelectorAll('.emergency-tasks');
const nonUrgentHeader = document.querySelectorAll('.no-emergency-tasks h3');
const nonUrgentTask = document.querySelectorAll('.no-emergency-tasks');
const footer = document.getElementById('footer-container');

body.style = 'background: oldlace';
header.style = 'background: green';
footer.style = 'background: darkslategray';

for (const all in urgentHeader) {
urgentHeader[all].style = 'background: purple';
}

for (const all in urgentTask) {
    urgentTask[all].style = 'background: orange';
}

for (const all in nonUrgentHeader) {
    nonUrgentHeader[all].style = 'background: black';
}

for (const all in nonUrgentTask) {
    nonUrgentTask[all].style = 'background: yellow';
}
