



(function(){  angular.module('filmesApp')
    .controller('FilmesController', function(vm, MeusFilmes) {
    var vm = this;
      vm.titulo = "Filmes que jรก assisti";
  
      vm.filmes = [];
  
      var carregarFilmes = function(){
        MeusFilmes.listar().then(function(filmes){
            vm.filmes = filmes;
        });
      }
  
      vm.novoFilme = {};
  
      vm.criarFilme = function() {
        var filme = {
          id: Date.now() + "",
          titulo: vm.novoFilme.titulo,
          ano: vm.novoFilme.ano,
          produtora: vm.novoFilme.produtora,
          sinopse: vm.novoFilme.sinopse,
          cartaz: vm.novoFilme.cartaz
        };
  
        MeusFilmes.inserir(filme).then(carregarFilmes);
  
        vm.novoFilme = {};
      }
  
      vm.removerFilme = function(id) {
        MeusFilmes.remover(id).then(carregarFilmes);
      }
  
      carregarFilmes();
  
    });
  })();