;(function(){
    window.addEventListener('load', function() {
    
        var dialog = document.querySelector('.pop-up');
        var closeButton = document.querySelector('.pop-up__close');
        var linksOpenDialog = document.querySelectorAll('[data-show-dialog]');
    

        for (var i = 0; i < linksOpenDialog.length; i++) {
            linksOpenDialog[i].addEventListener('click', function(event) {
                event.preventDefault();
                dialog.classList.add('show');
            });   
        }
    
        closeButton.addEventListener('click', function(event) {
            event.preventDefault();
            dialog.classList.remove('show');
        });
    });
})();