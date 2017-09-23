# angular-infinite-scroll
super minimal infinite scroll library for angularJS :file_folder:

only 531 bytes minified - used in production :fireworks:

[Plunker Demo](https://embed.plnkr.co/dzrRJRuCRfj442Onak0s/)

## Install
```
npm install angular-infinite-scroll
```

## Usage
```javascript
angular
  .module('myApp', ['angular-infinite-scroll'])
  .controller('myController', ['$scope', function($scope) {
    this.fooBars = (new Array(10)).fill("fooBar");
    console.log(this);
    this.makeMoreFooBars = () => {
      this.fooBars = this.fooBars.concat((new Array(10)).fill("fooBar"));
    }
    this.loadMoreFooBars = () => {
      console.log("Loading additional foobars!");
      this.makeMoreFooBars();
      $scope.scrollLoading = false;
      if (this.fooBars.length >= 500) {
        this.endOfList = true;
        console.log("End of list reached!");
      }
    }
     }]);
```

```html
<body ng-app="myApp">
  <div ng-controller="myController as vm">
    <div al-infinite-scroll="vm.loadMoreFooBars()" scroll-offset="200" scroll-unbind="vm.endOfList">
        <ul>
            <li ng-repeat="foobar in vm.foobars">{{ foobar }}</li>
        </ul>
    </div>
</body>
```

### Full options
```html
<div al-infinite-scroll="vm.loadMoreFooBars()" scroll-offset="5" scroll-unbind="vm.endOfList" scroll-mobile="someMobileDetectionFn()" scroll-sh-offset="200"></div>
```

## Development
```
npm install
npm run dev
```

## Build
```
npm run build
```
