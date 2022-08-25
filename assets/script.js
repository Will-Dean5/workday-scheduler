
for (var i = 9; i <= 17; i++) {
    var topEl = $('<div class="row" data-id="' + i + '">');
    var idEl = $('<div class="col-1">' + i + '</div>');
    var textEl = $('<textarea class="col-10 todo">');
    var btnEl = $('<button class="col-1 saved fas fa-bookmark"> Save</button>');
    topEl.append(idEl, textEl, btnEl);
    $('.container').append(topEl);

}

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



// adds date to top of screen
var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

if (idEl = i) {
    textEl.addClass('present')
} else if (idEl <= i) {
    textEl.addClass('past')
} else {
    textEl.addClass('future')
}