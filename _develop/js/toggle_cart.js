$(document).on('click', '#msMiniCart', function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '[[~29]]',
        data: {parent: '[[*id]]'},
        success:  function(data) {
            if (data){
                $('.basket .ajax-data').html(data);
            }else{
                miniShop2.Message.error('Что-то пошло не так, попробуйте позже!');
            }
        }
    });
});