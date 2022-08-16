// all functions run as part of whole document
$(document).ready(function() {

    let timeValue = $('#9').attr('data-time');
    console.log(timeValue + " = hardcoded") 
    console.log(timeValue) //log time value


//issue 1: timeValue === doesn't work
//issue 2: red won't appear; stays grey so not understanding current hour. Tricked it 



//functions
function saveText(event) {  
    timeValue = $(this).parent().attr('data-time');
    let notesValue = $(this).siblings('.hour_notes').val()
    console.log(notesValue + " = notes");
    console.log(timeValue + " = hour notes inputted");
    //save text area to localStorage
    localStorage.setItem(timeValue, notesValue);           
    }

// change box alerts by time    
function setHourAlert() {
    //establish current time
    let hourNow = moment().hours();
    console.log(hourNow + " = current hour");
    //bring in schedule time
    //let timeValue = timeValueAll;
    console.log(timeValue + " = schedule hour");
    
    //determine status
    $('.hour_box').each(function() {
        //let entryHour = $(this).parent().attr('data-time');
        if (timeValue > hourNow) {
            $(this).addClass('future');
            console.log('future')
        } else if (timeValue < hourNow) {
            $(this).addClass('past');
            console.log('past')
        } else { 
            $(this).addClass('present');
            console.log('present')
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