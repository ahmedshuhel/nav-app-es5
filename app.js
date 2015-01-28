define(['aurelia-router'], function(ar){
  "use strict";

  var App = function App (router){
     this.router = router;
     this.router.configure(function(config){
        config.title = 'Aurelia';
        config.map([
           {route: ['', 'welcome'], moduleId: 'welcome', nav: true, title: 'Welcome'},
           {route: 'flickr', moduleId : 'flickr', nav: true},
           {route: 'child-router', moduleId : 'child-router', nav: true, title: 'Child Router'}
        ]);
     });
  }

  App.inject = [ar.Router];

  return App;
})
