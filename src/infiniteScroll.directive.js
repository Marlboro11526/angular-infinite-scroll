const infiniteScroll = () => {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      const raw = element[0];
      const so = attrs.scrollOffset;
      const sho = attrs.scrollShOffset;
      const offset =  so ? parseInt(so) : 5;
      const scrollHeightOffset = sho ? parseInt(sho) : 200;
      let m = attrs.isMobile;
      if (!m && typeof window.orientation !== 'undefined') m = true;
      const scrollEvt = m === true ? 'scroll' : 'mousewheel';

      if (attrs.scrollUnbind) {
        scope.$watch(attrs.scrollUnbind, function(val) {
          if (val === true) {
            return element.unbind(scrollEvt, onScroll);
          }
        });
      }

      // apply infiniteScroll fn when scrolled past limit
      var onScroll = function(evt) {
        if (scope.scrollLoading) return;
        if ((raw.scrollTop + raw.offsetHeight + offset) >= (raw.scrollHeight + scrollHeightOffset)) {
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