$(document).ready( () => {
    let amenList = []
    if($('input').prop('checked', true)) {
        amenList.push($(this).attr('data-id'))
    } else if ($('input').prop('checked', false)) {
        amenList = amenList.filter( ameni => ameni != $(this).attr('data-id') )
    }
    $('.amenities h4').text(amenList)
    console.log(amenList)

} )