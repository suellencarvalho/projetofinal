função  FilmesCtrl ( FilmesService , FilmesFactory ) {
    var vm =  this ;
    vm . pageTitle  =  ' Filmes <small> list </ small> ' ;   
    vm . users  = {};

    vm . deleteUserApi  = _deleteUserApi;

    _init ();

    function  _init () {
        FilmesService . getApiList (). então (_apiSuccess, _apiError);
    }

    função  _apiSuccess ( response ) {
        vm . usuários  =  FilmesFactory . getApiToView (resposta);
    }

    função  _apiError ( erro ) {
        
    }

    função  _deleteUserApi ( item ) {
        FilmesService . deleteUserApi ( item . id ). então ( função ( resposta ) {
            // Pega o parametro para escolher uma linha que vai remover da view
            // Por isso só esta parte nao estar com um método anônimo
            _deleteSuccess (item);
        }, _apiError);
    }

    function  _deleteSuccess ( item ) {
        var index =  vm . usuários . indexOf (item);
        vm . usuários . emenda (índice, 1 );
    }

}

angular . módulo ( "filmes" )
    . controlador ( ' FilmesCtrl ' , FilmesCtrl);