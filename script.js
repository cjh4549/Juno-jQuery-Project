$(document).ready(function () { 
    
    // Array of greetings to randomize
    const timeofDayGreetings = ["Good Morning!", "Good Afternoon", "Good Night"]

    // Time of the day
    const test = new Date();
    const hour = test.getHours();

    // Post submit animation
    const $form = $('form').on('submit', function (e) {
        e.preventDefault();

        const $submitFill = $('.submit-fill');
        $submitFill.css('z-index', '10');
        $submitFill.toggleClass('changed')

        const $username = $('input[type="text"]').val();

        if (hour < 12) {
            $submitFill.html(`<h2 class="greeting">${timeofDayGreetings[0]} ${$username}</h2>`)
        } 
        
        else if (hour >= 12 && hour < 17) {
            $submitFill.html(`<h2 class="greeting">${timeofDayGreetings[1]} ${$username}</h2>`)
        } 

        else if (hour >= 17 && hour < 24) {
            $submitFill.html(`<h2 class="greeting">${timeofDayGreetings[2]} ${$username}</h2>`)
        }
    })
})


