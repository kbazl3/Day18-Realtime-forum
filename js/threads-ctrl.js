angular.module("rtfmApp")
    .controller("threadsCtrl", function($scope, $firebaseArray, threadsRef) {//threadsRef passed in from the resolve property. see line 19 on app.js

        $scope.threads = $firebaseArray(threadsRef);//We synchronize a list of messages into a read-only array by using the $firebaseArray service and then assigning the array to $scope:


        $scope.createThread = function(username, title) {
            $scope.threads.$add({//$add is saving the data to firebase
                username: username,//username is passed in from ng click line 9 on thread.html
                title: title //title is passed in from ng click line 9 on thread.html
            });

        }


    })
