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

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/status/',
        crossDomain: true
    }).done((data) => {
        if (data.status === 'OK') {
            $('.api_status').addClass('avaliable')
        } else {
            $('.api_status').removeClass('avaliable')
        }
        
        console.log(data)
    })

    const appendData = (objs) => {
        for (obj of objs.resposeJSON) {
            $.ajax({
                url: `http://0.0.0.0:5001/api/v1/users/${obj.user_id}/`,
                async: false,
                complete: (user) => {
                    user = user.resposeJSON;
                    $('.places').append(`
                    <article>
                        <div class="title">
                            <h2> ${obj.name} </h2>
                            div class="price_by_night">$
                                ${obj.price_by_night}
                            </div>
                        </div>
                        <div class="information">
                            <div class="max_guest">
                                <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                                <br /> ${obj.max_guest} Guests
                            </div>
                            <div class="number_rooms">
                                <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
                                <br /> ${obj.number_rooms} Bedrooms
                            </div>
                            <div class="number_bathrooms">
                                <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
                                <br /> ${obj.number_bathrooms} Bathroom
                            </div>
                        </div>
                        <div class="user">
                            <strong>Owner: ${user.first_name} ${user.last_name}</strong>
                        </div>
                        <div class="description">
                            ${ obj.description }
                        </div>
                    </article>`
                    )
                }
            })
        }
    }

    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5000/api/v1/places_search',
        data: {},
        contentType: 'application/json',
        dataType: 'json',
        complete: appendData
    })
});