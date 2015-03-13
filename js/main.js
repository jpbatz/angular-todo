// Create angular application
var app = angular.module('TodoApp', ['firebase']); // [] module dependencies from index.html

// Create a new controller for the todo input field
app.controller('TodoController', function($scope, $firebaseArray) {

  var ref = new Firebase('https://todos-angular.firebaseio.com/');


  // $scope.coolVariable = "COOL GUY";

  // create input variable
  $scope.myInput = "";

  $scope.myTasks = $firebaseArray(ref);

  // all, complete, and incomplete
  $scope.currentList = "all";

  /**
   * Submits a task
   * @param  {[number]} keyvalue    the key event number (removed)
   * @param  {[String]} description the task descrition
   * @return {[type]}   none
   */
  // $scope.submit = function(keyvalue, description) {
  $scope.submit = function(description) {

    // don't create empty task
    if(description === "") return;

    console.log(description);

    // create a new task
    var newTask  = new Task(description);

    // store in the Tasks array
    // $scope.myTasks.push(newTask);
    $scope.myTasks.$add(newTask);

    // clear out input field
    $scope.myInput = "";

  };

  /**
   * A Task Object
   * @param {[String]}  description of the Task's 
   */
  function Task(description) {
    this.description = description;
    this.complete = false;
  }

  /**
   * Removes a task from the array
   * @param  {[Task]}  task  the task to remove
   */
  // $scope.deleteTask = function(task) {
  $scope.deleteTask = function(taskId) {
    // var taskIndex = $scope.myTasks.indexOf(task);
    // $scope.myTasks.splice(taskIndex, 1);
    $scope.myTasks.$remove(taskId);
  };

});