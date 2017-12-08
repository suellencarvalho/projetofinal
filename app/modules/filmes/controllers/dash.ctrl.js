function DashCtrl() {
    var vm = this;
    vm.pageTitle = 'Dashboard <small>subtitle</small>';

    _init();

    function _init() {

    }
}

angular.module("filmes")
    .controller('DashCtrl', DashCtrl);