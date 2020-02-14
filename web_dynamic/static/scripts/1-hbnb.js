$(document).ready( () => {
    
    let amenList = []
    $('input').click(function () {
        
        
        if($(this).prop('checked')) {
            amenList.push($(this).attr('data-id'))
        } 

        console.log($(this).prop('checked'))
        
        console.log($(amenList)
    })






    

} )