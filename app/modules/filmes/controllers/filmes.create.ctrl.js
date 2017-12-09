function FilmesCreateCtrl( $state, FilmesService, FilmesFactory ) {
    var vm = this;
    vm.pageTitle = 'Filmes <small>Create</small>';   
    vm.user = { };
    vm.createUser = _createUser;

    _init();

    function _init() {
        
    }
    
    function _createUser(){
        TodoService.createUserApi( vm.user ).then(_successPost, _errorPost );
    }

    function _successPost(response){
        $state.go('main.filmes');
    }

    function _errorPost(error){
        alert(error);
    }
    


}

angular.module("filmes")
    .controller('FilmesCreateCtrl', FilmesCreateCtrl);