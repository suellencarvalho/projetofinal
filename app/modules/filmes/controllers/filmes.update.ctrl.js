function FilmesUpdateCtrl( $state, $stateParams, FilmesService, FilmesFactory ) {
    var vm = this;
    vm.pageTitle    = 'Filmes <small>Update</small>';   
    vm.user         = {};
    vm.updateUser   = _updateUser;

    _init();

    function _init() {
        // Valida se existe o ID se nao vai redirecionanr para lista
        if( angular.isUndefined( $stateParams.id ) ){
            $state.go('main.filmes');
        }
        // caso contrario vai buscar o usuario no servidor
        FilmesService.findUserApi($stateParams.id).then( _successFind, _errorFind );
    }
    
    function _successFind( response ){
        vm.user = FilmesFactory.getUserApiToView(response);
    }

    function _errorFind(error){
        alert(error);
    }

    function _updateUser(){
        // Trata o obj do user para enviar para o servidor
        var user = FilmesFactory.setUserViewToApi( vm.user );
        // Enviar o dado tratado pela fac
        FilmesService.updateUserApi( user._id, user ).then(_successUpdate, _errorUpdate );
    }

    function _successUpdate(response){
        $state.go('main.filmes');
    }

    function _errorUpdate(error){
        alert(error);
    }
    


}

angular.module("filmes")
    .controller('FilmesUpdateCtrl', FilmesUpdateCtrl);