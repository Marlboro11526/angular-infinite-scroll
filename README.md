# angular-infinite-scroll
minimal infinite scroll library for angularJS

[Plunker Demo](https://embed.plnkr.co/dzrRJRuCRfj442Onak0s/)

## Install
```
npm install angular-infinite-scroll
```

## Usage
```javascript
angular
  .module('myApp', ['angular-infinite-scroll'])
  .controller('myController', function() {
    this.fooBars = (new Array(10)).fill("fooBar");
    this.makeMoreFooBars = () => {
      this.fooBars = this.fooBars.concat((new Array(10)).fill("fooBar"));
    }
    this.loadMoreFooBars = () => {
      console.log("Loading additional foobars!");
      this.makeMoreFooBars();
      this.loading = false;
      if (this.fooBars.length >= 500) {
        this.endOfList = true;
        console.log("End of list reached!");
      }
    }
  });
```

```html
<body ng-app="myApp">
  <div ng-controller="myController as vm">
    <div when-scrolled="vm.loadMoreFooBars()" ws-offset="200" ws-unbind="vm.endOfList">
        <ul>
            <li ng-repeat="foobar in vm.foobars">{{ foobar }}</li>
        </ul>
    </div>
</body>
```

### Full options
```html
<div when-scrolled="vm.loadMoreFooBars()" ws-offset="5" ws-unbind="vm.endOfList" ws-mobile="someMobileDetectionFn()" ws-sh-offset="200"></div>
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
