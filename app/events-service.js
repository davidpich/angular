angular.module('angularBCN.events', [])

.factory('Events', function($filter, DateUtils){
    
    var events = [
        {
            title: 'Testing with Karma',
            date: new Date(2014, 1, 13, 19,0,0),
            speakers: ['@VictorBjelkholm'],
            description: 'Introduction to testing with Karma and AngularJS is an introductory course to learn the fundamentals about testing,'+
            ' writing testable code, writing tests for AngularJS with Jasmine and run them with Karma.',
        },
        {
            title: 'Testing with Karma',
            date: new Date(2014, 2, 11, 19,30,0),
            speakers: ['@VictorBjelkholm'],
            description: 'Introduction to testing with Karma and AngularJS is an introductory course to learn the fundamentals about testing,'+
            ' writing testable code, writing tests for AngularJS with Jasmine and run them with Karma.'+
            ' Bring your laptop this time and let\'s test some code together.',
            location: {
            	name: 'MOB Barcelona',	
            	link: 'https://plus.google.com/110865344457310720641/about'
            }
        }
    ];


    return {
        nextEvent: function(){
            return events[events.length-1];
        },
        getEventByDate: function(eventDate){
            return $filter('filter')(events, function(evt) {
                return DateUtils.sameDay(eventDate, evt.date);
            })[0];
        }
    }
})

.factory('DateUtils', function() {

    return {
        sameDay: function(date1, date2) {
            return date1.getDate() == date2.getDate() &&
                    date1.getMonth() == date2.getMonth() &&
                    date1.getYear() == date2.getYear();
        }
    }
})

;