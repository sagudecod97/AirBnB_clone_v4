$(document).ready( () => {
    
    let amenList = []
    let amenListNam = []
    $('input').click(function () {
         
        if($(this).prop('checked')) {
            amenList.push($(this).attr('data-id'));
            amenListNam.push($(this).attr('data-name'));
        } else {
            amenList = amenList.filter(amenity => amenity != $(this).attr('data-id'))
            amenListNam = amenListNam.filter(name => name != $(this).attr('data-name'))
        }

    

        $('.amenities h4').text(amenListNam.join(', '))
        console.log($(this).prop('checked'));
        console.log(amenList)
    })

});