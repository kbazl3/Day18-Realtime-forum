angular.module("rtfmApp")
    .service("threadService", function(fb) {

        // var firebaseRef = new firebaseRef("https://boiling-fire-4735.firebaseio.com/")

        this.getThreads = function() {
            return new Firebase(fb.url + /threads/)


        }

        this.getComments = function (threadId) {
            return new Firebase(fb.url + '/threads/' + threadId + '/comments');
        }

        this.getThread = function(threadId) {
            return new Firebase(fb.url + /threads/ + threadId)


        }


    })
