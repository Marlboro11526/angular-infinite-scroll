const infiniteScroll = () => {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      const raw = element[0];
      let options = {
        so: 5,
        sho: 200,
        m: (typeof window.orientation !== 'undefined')
      }
      const so = attrs.scrollOffset;
      const sho = attrs.scrollShOffset;
      const m = attrs.isMobile;
      if (so) options.so =  parseInt(so);
      if (sho) options.sho = parseInt(sho);
      if (m) options.m = m;
      const scrollEvt = options.m === true ? 'scroll' : 'mousewheel';

      if (attrs.scrollUnbind) {
        scope.$watch(attrs.scrollUnbind, function(val) {
          if (val === true) {
            return element.unbind(scrollEvt, onScroll);
          }
        });
      }

      // apply infiniteScroll fn when scrolled past limit
      let onScroll = function(evt) {
        if (scope.scrollLoading) return;
        if ((raw.scrollTop + raw.offsetHeight + options.so) >= (raw.scrollHeight + options.sho)) {
          scope.scrollLoading = true;
          scope.$apply(attrs.alInfiniteScroll);
          evt.preventDefault();
        }
      };

      return element.bind(scrollEvt, onScroll);
    }
  }
}

export default infiniteScroll;