(function() {
var app = angular.module('store',[]);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      canPurchase: false,
      soldOut: false,
      images:
        [
        'http://placehold.it/400x400',
        'http://placehold.it/50x50',
        'http://placehold.it/50x50',
        'http://placehold.it/50x50',
        'http://placehold.it/50x50'
        ],
    },
    {
      name: 'Jake',
      price: 5.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Money',
      price: 6.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      canPurchase: true,
      soldOut: false,
    },

  ];
})();
