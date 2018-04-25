var Pokemon = angular.module("Pokemon",[]);
//controller creation 
Pokemon.controller("ListadoPokemon",function ($scope,$http) {
	$scope.POKEAPI = "http://www.pokeapi.co/api/v2/pokemon/"
	//llamar la funcion
	$scope.ListaPoke=[];
	$scope.numeros = 0;

	for(var h=0;h<=20;h++){
		$scope.numeros = $scope.numeros +1 

		$http({
		method:"POST",
		url: $scope.POKEAPI + $scope.numeros
		//exito a la funcion con la consola 
		}).then(function successcallback(hello){
			$scope.ListaPoke.push(hello.data)
		})
	}
	

}) 

