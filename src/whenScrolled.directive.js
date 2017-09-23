const whenScrolled = () =>
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      const raw = element[0];
      const offset = attrs.wsOffset ? parseInt(attrs.wsOffset) : 5;
      const scrollEvt = attrs.wsMobile === true ? 'scroll' : 'mousewheel';

      if (attrs.wsUnbind) {
        scope.$watch(attrs.wsUnbind, function(val) {
          if (val === true) {
            return element.unbind(scrollEvt, onScroll);
          }
        });
      }

      // apply whenScrolled fn when scrolled past limit
      var onScroll = function(evt) {
        if ((raw.scrollTop + raw.offsetHeight + offset) >= (raw.scrollHeight + 200)) {
          scope.loading = true;
          scope.$apply(attrs.whenScrolled);
          evt.preventDefault();
        }
      };

      return element.bind(scrollEvt, onScroll);
    }
  }

export default whenScrolled;