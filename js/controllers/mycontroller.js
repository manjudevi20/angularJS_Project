app.controller('mycontroller',function($scope){
$scope.title="Contacts";
$scope.description="Full Information";
$scope.contacts=[{name:"Ram",email:"ram@abc.com",phno:"7346379478",age:"28",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
				 {name:"Shyam",email:"shyam@abc.com",phno:"878648465934",age:"26",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
				 {name:"Rohan",email:"rohan@abc.com",phno:"24466756567",age:"30",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
				 {name:"Nikita",email:"nikita@abc.com",phno:"657264564",age:"40",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}];


$scope.currectIssue = $scope.contacts[0];
  
  $scope.showIssue = function(contact){
    $scope.currectIssue = contact;
  };

  $scope.displaymodal=false;
  $scope.showmodal=function(){
  	$scope.displaymodal=!$scope.displaymodal;
  }

  
});