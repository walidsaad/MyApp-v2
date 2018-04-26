var app=angular.module('myapp',[]);
app.controller('myCtrl', function($http,$scope)
		{
		
		$scope.afficher=function(){
		$http.get('http://41.229.35.212/MyApp-v2/listeetudiantsJSON.php')
		  .success(function(response){
                    $scope.etudiants=[];
		    console.log(response);
		   $scope.etudiants.push(response);
		  });}
		})
