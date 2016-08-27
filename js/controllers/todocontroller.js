app.controller('todocontroller',function($scope){
  $scope.x1 = "THIS IS AN test app";
  $scope.x2 = angular.lowercase($scope.x1);
  $scope.x3 = angular.uppercase($scope.x1);
  $scope.x4 = angular.isString($scope.x1);
  $scope.x5 = angular.isNumber($scope.x1);
  $scope.contact_details=[{name:"Ram",email:"ram@abc.com",phno:"7346379478",age:"28",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Shyam",email:"shyam@abc.com",phno:"878648465934",age:"26",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Rohan",email:"rohan@abc.com",phno:"24466756567",age:"30",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Nikita",email:"nikita@abc.com",phno:"657264564",age:"40",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}];
});
