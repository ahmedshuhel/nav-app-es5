define(['aurelia-http-client'], function(hc) {
  "use strict";

  var VM = function (http) {
    this.heading = 'Flickr';
    this.images = [];
    this.http = http;
  }

  VM.prototype.activate = function() {
    var self = this;

    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
    return self.http.jsonp(url).then(function(response) {
      self.images = response.content.items;
    });
  };

  VM.prototype.canDeactivate = function() {
    return confirm('Are you sure you want to leave?');
  };

  VM.inject = [hc.HttpClient];

  return VM;
});
