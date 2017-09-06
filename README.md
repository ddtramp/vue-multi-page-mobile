# scaffold-vue-multi

> vue、scaffold multi page

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

## Environment

修改:

    config/
        dev.env.js
        gray.env.js
        prod.env.js
        test.env.js
        
at .js or .vue file, you can use `envConfig` variable, such as:
    
    let environment = envConfig.development
    console.log(environment)    

## cordova test 

    /
        hooks/
        platforms/
        plugins/
        res/
        .npmignore
        config.xml
  
[see](https://stackoverflow.com/questions/22310526/cordova-start-specific-ios-emulator-image)  
    
    cd  platform/ios/cordova/node_modules/
    rm -R ios-sim
    npm install ios-sim@5.1.0
    
    npm run build && cordova prepare

    cordova emulate ios --list      // availble devices
    cordova emulate ios --target="iPhone-7-Plus"    


## Notice

do not use 异步组件 import("")
           
use 内联 style

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
