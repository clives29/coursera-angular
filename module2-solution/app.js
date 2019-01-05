(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuy = this;
  itemBuy.toBuy = ShoppingListCheckOffService.getItemsBuy();
 
  itemBuy.justBought = function (itemIndex) {
    ShoppingListCheckOffService.justBought(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.bought = ShoppingListCheckOffService.getItemsBought();

}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuy = [
  {
    name: "cookies",
    quantity: 10
  },
  {
    name: "chips",
    quantity: 5
  },
  {
    name: "cookies",
    quantity: 7
  },
  {
    name: "chips",
    quantity: 3
  },
  {
    name: "cookies",
    quantity: 5
  }
  ];

  var bought= [];


  service.justBought = function (itemIndex) {
    bought.push(toBuy[itemIndex])
    toBuy.splice(itemIndex, 1);
  };

  service.getItemsBuy = function () {
    return toBuy;
  };

  service.getItemsBought=function(){
    return bought;
  };
}

})();