$(document).ready(function(){
    function somFunc(image){
        console.log($(this).data('data-alt-src'));
        var temp = $(this).data('data-alt-src');
        $(this).data('data-alt-src',$(this).attr('src'));
        $(this).attr('src',temp);
    }

    $('img').hover(function somFunc(){
            console.log($(this).data('alt-src'));
            var temp = $(this).data('alt-src');
            $(this).data('alt-src',$(this).attr('src'));
            $(this).attr('src',temp);
        } , function somFunc(){
            console.log($(this).data('alt-src'));
            var temp = $(this).data('alt-src');
            $(this).data('alt-src',$(this).attr('src'));
            $(this).attr('src',temp);
        }
    );
});