function  FilmesCtrl ( FilmesService , FilmesFactory ) {
    var vm =  this;
    vm.pageTitle  =  ' Filmes <small> list </ small> ' ;   
    vm.users  = {};

    vm.deleteUserApi  = _deleteUserApi;

    _init ();

    function  _init () {
        FilmesService.getApiList().then(_apiSuccess, _apiError);
    }

    function  _apiSuccess(response) {
        vm.usuários  =  FilmesFactory.getApiToView(resposta);
    }

    function _apiError (erro) {
        
    }

    function  _deleteUserApi (item) {
        FilmesService.deleteUserApi ( item . id ).then ( function ( resposta ) {
            // Pega o parametro para escolher uma linha que vai remover da view
            // Por isso só esta parte nao estar com um método anônimo
            _deleteSuccess (item);
        }, _apiError);
    }

    function  _deleteSuccess ( item ) {
        var index =  vm.usuários.indexOf (item);
        vm.usuários.splice (índice, 1 );
    }

}

angular.module( "filmes" ).controller ( ' FilmesCtrl ' , FilmesCtrl);