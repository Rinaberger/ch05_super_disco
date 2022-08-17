// all functions run as part of whole document
$(document).ready(function() {

    let timeValue9 = $('#9').attr('data-time');
    //console.log(timeValue9 + " = hardcoded") 
    console.log(timeValue9) //log time value

    let timeValue10 = $('#10').attr('data-time');
    let setDay = moment().day();
        console.log(setDay)
    

//how to getItem and write to textArea
//issue 2: red won't appear; stays grey so not understanding current hour. Tricked it 



//functions
function saveText(event) {  
    timeValue9 = $(this).parent().attr('data-time');
    let notesValue9 = $(this).siblings('.hour_notes9').val()
    console.log(notesValue9 + " = notes");
    console.log(timeValue9 + " = hour notes inputted");
    //save text area to localStorage
    localStorage.setItem(timeValue9, notesValue9); 
    
    timeValue10 = $(this).parent().attr('data-time');
    let notesValue10 = $(this).siblings('.hour_notes10').val()
    console.log(notesValue10 + " = notes");
    console.log(timeValue10 + " = hour notes inputted");
    //save text area to localStorage
    localStorage.setItem(timeValue10, notesValue10);
    }

function currentDay() {
    document.getElementById('currentDay').innerHTML = 'setDay'
}

// change box alerts by time    
function setHourAlert() {
    //establish current time
    let hourNow = moment().hours();
    console.log(hourNow + " = current hour");
    //bring in schedule time
    //let timeValue = timeValueAll;
    console.log(timeValue9 + " = 9am schedule hour");
    console.log(timeValue10 + " = 10am schedule hour")
    
    //determine status for 9:00am
    $('.hour_box_9').each(function() {
        //let entryHour = $(this).parent().attr('data-time');
        if (timeValue9 > hourNow) {
            $(this).addClass('future');
            console.log('future')
        } else if (timeValue9 < hourNow) {
            $(this).addClass('past');
            console.log('past')
        } else { 
            $(this).addClass('present');
            console.log('present')
        }    
    });

    $('.hour_box_10').each(function() {
        //let entryHour = $(this).parent().attr('data-time');
        if (timeValue10 > hourNow) {
            $(this).addClass('future');
            console.log('future')
        } else if (timeValue10 < hourNow) {
            $(this).addClass('past');
            console.log('past')
        } else { 
            $(this).addClass('present');
            console.log('present')
        }    
    });
}
    
//events

//save button event
$('#hour_btn9').on('click', saveText);
$('#hour_btn10').on('click', saveText);
$('#hour_btn11').on('click', saveText);
$('#hour_btn12').on('click', saveText);
$('#hour_btn13').on('click', saveText);
$('#hour_btn14').on('click', saveText);
$('#hour_btn15').on('click', saveText);
$('#hour_btn16').on('click', saveText);
$('#hour_btn17').on('click', saveText);
$('#hour_btn18').on('click', saveText);



//runs on page load
// populate textarea with localStorage
//loop through rows and add a class (grey, red, green)

setHourAlert()

});