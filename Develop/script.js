// all functions run as part of whole document
$(document).ready(function() {

//variables






//functions
function saveText(event) {  
    let timeValue = $(this).parent().attr('data-time');
    let notesValue = $(this).siblings('.hour_notes').val()
    console.log(notesValue);
    console.log(timeValue);
    //save text area to localStorage
    localStorage.setItem(timeValue, notesValue);           
    }

// change box alerts by time    
function setHourAlert() {
    //establish current time
    let hourNow = moment().hours();
    console.log(hourNow);
    //bring in schedule time
    let timeValue = $(this).parent().attr('data-time');
    console.log(timeValue);
    
    //determine status
    $('.hour_box').each(function() {
        //let entryHour = $(this).parent().attr('data-time');
        if (timeValue < hourNow) {
            $(this).addClass('future');
            console.log('future')
        } else if (timeValue === hourNow) {
            $(this).addClass('present');
            console.log('present')
        } else { 
            $(this).addClass('past');
            console.log('past')
        }    
    })
}
    
//events

//save button event
$('#hour_btn').on('click', saveText);



//runs on page load
// populate textarea with localStorage
//loop through rows and add a class (grey, red, green)

setHourAlert()

});