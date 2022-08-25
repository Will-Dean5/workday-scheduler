// adds date to top of screen
var currentDay = $('#currentDay').html(moment().format("dddd, MMMM Do"));



// adds text areas to the page and the for loop changes the color of the text bpx depending on what time it is
for (var i = 9; i <= 17; i++) {
    var topEl = $('<div class="row" data-id="' + i + '">');
    var idEl = $('<div class="col-1">' + i + '</div>');
    var textEl = $('<textarea class="col-10 todo">');
    var btnEl = $('<button class="col-1 saved fas fa-bookmark"> Save</button>');
    topEl.append(idEl, textEl, btnEl);
    $('.container').append(topEl);
    if (moment().hour() === i) {
        textEl.addClass('present')
    }
    if (moment().hour() < i) {
        textEl.addClass('future')
    }
    else {
        textEl.addClass('past')
    }
}
// saves the user input to local storage
$('.container').on('click', '.saved', function () {
    var parentId = $(this).parent().attr('data-id');
    var todo = $(this).prev().val();
    localStorage.setItem(parentId, todo);
});

$('.todo').each(function () {
    var parentId = $(this).parent().attr('data-id');
    var todo = localStorage.getItem(parentId);
    $(this).val(todo);
});



// sets the variable of time to moment which is the current time/day
var time = moment();



