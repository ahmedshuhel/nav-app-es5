define(['aurelia-router'], function(ar){
  "use strict";

  var VM = function ChildRouter (router){
     this.heading = 'Child Router';
     this.router = router;
     this.router.configure(function(config){

        config.title = 'Aurelia';
        config.map([
           {route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome'},
           {route: 'flickr', moduleId : 'flickr', nav: true},
           {route: 'child-router', moduleId : 'child-router', nav: true, title: 'Child Router'}
        ]);
     });
  };

  VM.inject = [ar.Router];

  return VM;
})
