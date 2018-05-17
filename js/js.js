$('document').ready(function () {
    
    var flag = 0;
    $('button.first').on('click', function () {
        $('body').toggleClass('night');
        
        if (flag === 0) {
            $('button.first').text('дневной режим');
            flag = 1;
            } else{
        $('button.first').text('ночной режим');
            flag = 0;
        }
    });        
});