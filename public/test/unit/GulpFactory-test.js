describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))

  describe('Testing AngularJS Factory GulpFactory', function () {
  var scope, httpBackend, timeout, rootScope, GulpFactory;


    beforeEach(inject(function($rootScope, $httpBackend, $timeout, $injector) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            timeout = $timeout;
            GulpFactory = $injector.get('GulpFactory');
          }))


    describe('Testing the existence of properties and methods', function () {

      it('should return an object that has these properties defined', function () {
        expect(GulpFactory.imgMinRecipe).toBeDefined();
        expect(GulpFactory.recipesList).toBeDefined();
        expect(GulpFactory.getRecipesList).toBeDefined();
        expect(GulpFactory.getRecipe).toBeDefined();
      })
    })

    describe('Testing that the function gets called', function () {

      it('should call the functions', function(){
      httpBackend.expectGET('/gulp-tasks').respond({
        "0":"bower.js",
        "1":"connect.js"
      })
      var returnFromFunc;
      GulpFactory.getRecipesList().then(function(data){returnFromFunc = data.data});
      timeout.flush()
      httpBackend.flush();

      expect(returnFromFunc[0]).toBe('bower.js')


    });
  });
  });
});
