função  FilmesService ( $ http ) {
    
        // var uri = "https://api.github.com/users";
        var uri =  " https://academiaangular.herokuapp.com/ " ;
    
        var service = {
            getApiGit        : _getApiGit,
            getApiList       : _getApiList,
            findUserApi      : _findUserApi,
            createUserApi    : _createUserApi,
            updateUserApi    : _updateUserApi,
            deleteUserApi    : _deleteUserApi
        };
    
        serviço de retorno ;
    
        função  _getApiGit () {
            retornar  $ http . obter (uri);
        }
    
        função  _getApiList () {
            retornar  $ http . obter (uri);
        }
    
        função  _findUserApi ( id ) {
            retornar  $ http . obter (uri +  ' users / '  + id);
        }
    
        função  _createUserApi ( dados ) {
            retornar  $ http ({
                Método :  ' POST ' ,
                url : uri +  ' users ' ,
                dados : dados
            });
        }
    
        função  _updateUserApi ( id , data ) {
            retornar  $ http ({
                Método :  ' PUT ' ,
                url : uri +  ' users / '  + id,
                dados : dados
            });
        }
    
        função  _deleteUserApi ( id ) {
            retornar  $ http ({
                método :  ' DELETE ' ,
                url : uri +  ' users / '  + id
            });
        }
    
    
    }
    
    
    angular . módulo ( " filmes " ). serviço ( " FilmesService " , FilmesService);
    