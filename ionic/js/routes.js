angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('classProjectAssistant', {
      url: '/home',
      templateUrl: 'templates/classProjectAssistant.html',
      controller: 'classProjectAssistantCtrl'
    })
        
      
    
      
        
    .state('classInfo', {
      url: '/classes/class',
      templateUrl: 'templates/classInfo.html',
      controller: 'classInfoCtrl'
    })
        
      
    
      
        
    .state('studentInfo', {
      url: '/classes/class/student',
      templateUrl: 'templates/studentInfo.html',
      controller: 'studentInfoCtrl'
    })
        
      
    
      
        
    .state('myProjects', {
      url: '/projects',
      templateUrl: 'templates/myProjects.html',
      controller: 'myProjectsCtrl'
    })
        
      
    
      
        
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })
        
      
    
      
        
    .state('guide', {
      url: '/guide',
      templateUrl: 'templates/guide.html',
      controller: 'guideCtrl'
    })
        
      
    
      
        
    .state('myClasses', {
      url: '/classes',
      templateUrl: 'templates/myClasses.html',
      controller: 'myClassesCtrl'
    })
        
      
    
      
        
    .state('projectTasks', {
      url: '/projects/project/tasks',
      templateUrl: 'templates/projectTasks.html',
      controller: 'projectTasksCtrl'
    })
        
      
    
      
        
    .state('projectTeams', {
      url: '/projects/project/teams',
      templateUrl: 'templates/projectTeams.html',
      controller: 'projectTeamsCtrl'
    })
        
      
    
      
        
    .state('teamInfo', {
      url: '/projects/project/teams/team',
      templateUrl: 'templates/teamInfo.html',
      controller: 'teamInfoCtrl'
    })
        
      
    
      
        
    .state('projectDescription', {
      url: '/projects/project/description',
      templateUrl: 'templates/projectDescription.html',
      controller: 'projectDescriptionCtrl'
    })
        
      
    
      
        
    .state('projectInfo', {
      url: '/projects/project',
      templateUrl: 'templates/projectInfo.html',
      controller: 'projectInfoCtrl'
    })
        
      
    
      
        
    .state('taskInfo', {
      url: '/projects/project/tasks/task',
      templateUrl: 'templates/taskInfo.html',
      controller: 'taskInfoCtrl'
    })
        
      
    
      
        
    .state('teamMemberInfo', {
      url: '/projects/project/teams/team/members/member',
      templateUrl: 'templates/teamMemberInfo.html',
      controller: 'teamMemberInfoCtrl'
    })
        
      
    
      
        
    .state('rating-ResourceManager', {
      url: '/projects/project/teams/team/members/member/rating/resourcemanager',
      templateUrl: 'templates/rating-ResourceManager.html',
      controller: 'rating-ResourceManagerCtrl'
    })
        
      
    
      
        
    .state('rating-Team', {
      url: '/projects/project/teams/team/rating',
      templateUrl: 'templates/rating-Team.html',
      controller: 'rating-TeamCtrl'
    })
        
      
    
      
        
    .state('rating-Reporter', {
      url: '/projects/project/teams/team/members/member/rating/reporter',
      templateUrl: 'templates/rating-Reporter.html',
      controller: 'rating-ReporterCtrl'
    })
        
      
    
      
        
    .state('rating-Organizer', {
      url: '/projects/project/teams/team/members/member/rating/organizer',
      templateUrl: 'templates/rating-Organizer.html',
      controller: 'rating-OrganizerCtrl'
    })
        
      
    
      
        
    .state('rating-Editor', {
      url: '/projects/project/teams/team/members/member/rating/editor',
      templateUrl: 'templates/rating-Editor.html',
      controller: 'rating-EditorCtrl'
    })
        
      
    
      
        
    .state('rating-Helper', {
      url: '/projects/project/teams/team/members/member/rating/helper',
      templateUrl: 'templates/rating-Helper.html',
      controller: 'rating-HelperCtrl'
    })
        
      
    
      
        
    .state('teamMembers', {
      url: '/projects/project/teams/team/members',
      templateUrl: 'templates/teamMembers.html',
      controller: 'teamMembersCtrl'
    })
        
      
    
      
        
    .state('', {
      url: '/',
      templateUrl: 'templates/.html',
      controller: 'Ctrl'
    })
        
      
    
      
        
    .state('report', {
      url: '/projects/projects/project/report',
      templateUrl: 'templates/report.html',
      controller: 'reportCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});