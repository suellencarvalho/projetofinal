function FilmesFactory(){
    var factory = {
        
        getApiToView        : _getApiToView,
        getUserApiToView    : _getUserApiToView,
        setUserViewToApi    : _setUserViewToApi
    };

    return factory;


    function _getApiToView(res){
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.filme) ){
            return;
        }
        if( angular.isUndefined(res.filme.users) ){
            return;
        }
        var filme   = res.filme.users;
        var result = [];

        angular.forEach(filme, function(item){
            result.push( _convertApi( item ) );
        });

        return result;
    }

    function _convertApi( filme ){
        var result = {};
        if( angular.isUndefined(filme) ){
            return;
        }
        if( angular.isDefined(filme.titulo) ){
            result.titulo = filme.titulo;
        }
        if( angular.isDefined(filme.ano) ){
            result.ano = filme.ano;
        }
        if( angular.isDefined(filme.produtora) ){
            result.produtora = filme.produtora;
        }
        if( angular.isDefined(filme.cartaz) ){
            result.cartaz = filme.cartaz;
        }
        if( angular.isDefined(filme.sinopse) ){
            result.sinopse = filme.sinopse;
               return result;
    }

    function _getUserApiToView( res ){
        var filme = {};
        var result = {};
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.filme) ){
            return;
        }
        if( angular.isUndefined(res.filme.user) ){
            return;
        }
        // Atribuindo o valor 
        filme = res.filme.user;

        if( angular.isDefined(filme.titulo) ){
            result.titulo = filme.titulo;
        }
        if( angular.isDefined(filme.ano) ){
            result.ano = filme.ano;
        }
        if( angular.isDefined(filme.produtora) ){
            result.produtora = filme.produtora;
        }
        if( angular.isDefined(filme.cartaz) ){
            result.cartaz = filme.cartaz;
        }
        if( angular.isDefined(filme.sinopse) ){
            result.sinopse = filme.sinopse;
        }
      
        return result;
    }

    function _setUserViewToApi( filme ){
        var result = {};
        if( angular.isDefined(filme.titulo) ){
            result._titulo = filme.titulo;
        }
        if( angular.isDefined(filme.ano) ){
            result.ano = filme.ano;
        }
        if( angular.isDefined(filme.produtora) ){
            result.produtora = filme.produtora;
        }
        if( angular.isDefined(filme.cartaz) ){
            result.cartaz = filme.cartaz;
        }
        if( angular.isDefined(filme.sinopse) ){
            result.sinopse = filme.sinopse;
        }
       
        return result;
    }
  
}

angular.module("filmes").factory("FilmesFactory", FilmesFactory);