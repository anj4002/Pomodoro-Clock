// Variables
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25; // Default work time
let breakTime = 5;  // Default break time

let seconds = "00";
let pomodoroCount = 0;
let breakCount = 0;
let timerInterval;
let totalTime;

// Update Pomodoro count display
function updatePomodoroCount() {
    document.getElementById('pomodoro-count').innerText = pomodoroCount;
}

// Update progress bar width
function updateProgressBar(remainingTime) {
    const progressBar = document.getElementById('progress');
    const progress = (remainingTime / totalTime) * 100; // Calculate the percentage
    progressBar.style.width = `${progress}%`;
}

// Apply settings from the input fields
function applySettings() {
    workTime = parseInt(document.getElementById('work-time').value);
    breakTime = parseInt(document.getElementById('break-time').value);
    
    // Update the timer display with new settings
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = "00";

    // Reset Pomodoro count
    pomodoroCount = 0;
    updatePomodoroCount();
}

// Start timer
function start() {
    // Change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // Reset seconds
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;
    totalTime = (workTime * 60);

    // Clear any existing interval
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Countdown function
    const timerFunction = () => {
        const remainingTime = workMinutes * 60 + seconds;

        // Update progress bar
        updateProgressBar(remainingTime);

        // Change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds; 

        // Start countdown
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // Start break
                    workMinutes = breakMinutes;
                    breakCount++;
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    totalTime = breakTime * 60; 
                } else {
                    // Continue work
                    workMinutes = workTime;
                    breakCount++;
                    pomodoroCount++;
                    updatePomodoroCount();
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                    totalTime = workTime * 60; 
                }
            }
            seconds = 59;
        }
    };

    // Start countdown
    timerInterval = setInterval(timerFunction, 1000); // 1000 = 1s
}

// Toggle 
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon for light mode
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon for dark mode
    }
}

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
    updatePomodoroCount();
    document.getElementById('work-time').value = workTime;
    document.getElementById('break-time').value = breakTime;
    document.getElementById('save-settings').addEventListener('click', applySettings);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
};





//-------------------------------------------------------------//



// //variables

// let workTitle=document.getElementById('work');
// let breakTitle=document.getElementById('break');

// let workTime=1;
// let breakTime=1;

// let seconds= "00";
// let pomodoroCount = 0;

// //display 
// window.onload=()=>{
//     document.getElementById('minutes').innerHTML=workTime;
//     document.getElementById('seconds').innerHTML=seconds;

//     workTitle.classList.add('active');
//     updatePomodoroCount(); 
//     // Load settings from inputs
//     document.getElementById('work-time').value = workTime;
//     document.getElementById('break-time').value = breakTime;

//     // Save settings event listener
//     document.getElementById('save-settings').addEventListener('click', () => {
//         workTime = parseInt(document.getElementById('work-time').value);
//         breakTime = parseInt(document.getElementById('break-time').value);
//         updatePomodoroCount(); // Update counter display with new settings
//     });
// };

// // function updatePomodoroCount() {
// //     document.getElementById('pomodoro-count').innerText = pomodoroCount;
// // }

// //start timer
// function start(){

// //change button
// document.getElementById('start').style.display="none";
// document.getElementById('reset').style.display="block";

//     //change the time
//     seconds=59;

//     let workMinutes=workTime - 1;
//     let breakMinutes=breakTime - 1;

//     breakCount=0;

//     //countdown 
//     let timerFunction=()=>{
//       //change the display
//       document.getElementById('minutes').innerHTML=workMinutes;
//       document.getElementById('seconds').innerHTML=seconds; 

//       //start
//       seconds=seconds-1;

//       if(seconds ===0){
//            workMinutes = workMinutes-1;
//            if(workMinutes===-1){
//             if(breakCount%2 ===0){
//            //start break
//            workMinutes=breakMinutes;
//            breakCount++;
 
//            //change the panel
//            workTitle.classList.remove('active');
//            breakTitle.classList.add('active');
//             }
//             else{
//                 //continue work
//                 workMinutes=workTime;
//                 breakCount++;

//                  // Incrementing pomodoro counter
//                  pomodoroCount++;
//                  updatePomodoroCount();

//                 //change the panel
//            breakTitle.classList.remove('active');
//            workTitle.classList.add('active');
//             }
//            }
//            seconds=59;
//       }
//     }

//     //start countdown
//     setInterval(timerFunction,1000); //1000=1s
// }

// window.onload = () => {
//     document.getElementById('minutes').innerHTML = workTime;
//     document.getElementById('seconds').innerHTML = seconds;
//     workTitle.classList.add('active');
//     updatePomodoroCount(); 
// };