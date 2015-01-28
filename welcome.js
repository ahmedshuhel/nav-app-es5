define(function () {
  "use strict";

  var Welcome = function () {
    this.heading = "Welcome to the Aurelia Navigation App!";
    this.firstName = "John";
    this.lastName = "Doe";
  };


  Welcome.prototype.welcome = function () {
    alert("Welcome, " + this.fullName + "!");
  };

  Welcome.computed({fullName : function() {  
      return this.firstName + " " + this.lastName;
  }});

 return Welcome;
});
