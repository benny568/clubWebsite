describe('Unit testing league republic display', function() {
  var $compile,
      $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('publicApp'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.lrcode = 12345;
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<lr-display></lr-display>")($rootScope);
    $rootScope.$digest();
    $rootScope.lrcode = 12345;
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("<div id=\"lrep\"></div>");
  });
});