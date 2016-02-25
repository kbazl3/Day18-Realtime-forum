angular.module("rtfmApp", ["ui.router", "firebase"])
    .constant("fb", {
        url: "https://boiling-fire-4735.firebaseio.com/"
    })
    .config(function ($stateProvider, $urlRouterProvider) { //$stateProvider lets you define the new states/views. $urlRouterProvider lets you set the default url on the line below
        $urlRouterProvider.otherwise('/threads')//threads is the url on the browser but it's state is the threads.html


        $stateProvider //you only declare $stateProvider once.  It lets you declare all of your states that you will inject into the ui-view
        .state("threads", { //name of this state is threads
            url: "/threads", //url on the browswer will be www.something.com/threads
            templateUrl: "templates/threads.html", //that path on the url will lead you to the threads.html file
            controller: "threadsCtrl", //this threadsCtrl is specific only to this state
            resolve: {//The resolve property is a map object. The map object contains key/value pairs of:
                                                                                                    //key – {string}: a name of a dependency to be injected into the controller. in this case threadsRef
                                                                                                    //str/function --  str = alias for a service. if function then it is inject and the return value
                                                                                                    //is treated as the dependency. If the result is a promise, it is resolved before the controller is
                                                                                                    //instantiated and its value is injected into the controller.
                threadsRef: function(threadService) {//inject threadService
                    return threadService.getThreads() //threadService.getThreads returns a promise
                }

            }
        })
        .state("thread", { //this is a seperate state which utilizes the $stateParams
            url: "/threads/:threadId", //the /: is for declaring the $stateParams,
            templateUrl: "templates/thread.html", //this state is going to be using this html as its view
            controller: "threadCtrl", //specific controller for this state
            resolve: {
                threadRef: function(threadService, $stateParams) {//inject service as well as $stateParams
                    return threadService.getThread($stateParams.threadId); //invoke getThread function from service
                },
                commentsRef: function (threadService, $stateParams) {//a second resolve object
                return threadService.getComments($stateParams.threadId);
            }
            }
        })




    })
