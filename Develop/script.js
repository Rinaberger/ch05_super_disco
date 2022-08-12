// all functions run as part of whole document
$(document).ready(function() {

//variables







//functions
function saveText(event) {
    let notesValue = $(this).siblings('.hour_notes').val()
    let timeValue = $(this).parent().attr('data-time');
    console.log(notesValue);
    console.log(timeValue);
    //save text area to localStorage
    localStorage.setItem(timeValue, notesValue);           
    }


    
//events

//save button event
$('#hour_btn').on('click', saveText);



//runs on page load
// populate textarea with localStorage
//loop through rows and add a class (grey, red, green)

setHourAlert()

});