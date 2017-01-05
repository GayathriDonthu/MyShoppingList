/**
 * 
 */

console.log("Inside shopping script");

(function(){
	
	var app = angular.module("shoppingList",[]);
	
	var shoppingController = function($scope){
		
		console.log("Inside shopping Controller");
		
		$scope.itemList = [];
		$scope.flag = false;
		
		$scope.display = function(){
			
			$scope.count = $scope.itemList.length;
			console.log("count:"+$scope.count);
			$scope.flag = true;
			
		};
		
		$scope.addItem = function(itemname){
			
			console.log("item:"+itemname);
			$scope.flag = false;
			
			if($scope.itemList.indexOf(itemname) == -1){
				console.log("adding item");
				$scope.itemList.push(itemname);
				console.log("Item List:"+$scope.itemList);
				
			}
			else{
				
				$scope.message = "The item is already in your shopping list.";
				console.log($scope.message);
			}
		};
		
		$scope.removeItem = function(itemname){
			
			$scope.flag = false;
			console.log("Removing "+itemname+" from list");
			$scope.itemList.splice(itemname,1);
			
		};
		
	};
	
	app.controller("shoppingController", shoppingController);
	
}());