function config($stateProvider, $httpProvider, $urlRouterProvider) {
    
      
        $httpProvider.defaults.useXDomain = true;
       
        $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */**"};
        $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
      
    
    
        $urlRouterProvider.otherwise('dashboard');
    
        $stateProvider
            .state('main', {
                url: '/',
                abstract: true,
                controller: 'MainCtrl as vm',
                templateUrl: 'modules/commons/views/main.html'
            })
            .state('main.dashboard', {
                url: 'dashboard',
                controller: 'DashCtrl as vm',
                templateUrl: 'modules/filmes/views/dash.html'
            })
            .state('main.filmes', {
                url: 'filmes',
                controller: 'FilmesCtrl as vm',
                templateUrl: 'modules/filmes/views/filmes.html'
           
            });
    }
    
    angular.module("filmes").config(config);