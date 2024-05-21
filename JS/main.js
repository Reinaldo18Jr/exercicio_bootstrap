$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        }
    })
})