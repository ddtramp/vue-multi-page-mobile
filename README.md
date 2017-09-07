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

## test on virsual device
yarn run gray
cordova run --list
cordova emulate ios --target="iPhone-7"
cordova run android --emulate --target="Nexus_6_API_25"
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

## Cordova test 

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
    
    cordova run --list or cordova run ios --list
    cordova emulate ios --list      // availble devices
    cordova run ios --emulate --target="iPhone-7-Plus"    
    cordova run android --emulate --target="Nexus_6_API_25"
    
Gradle config
    
    change at location /platforms/android/gradle/../
    
    1  先下载gradle-3.3-all.zip包。 
    2. 把下载好的zip包放到{project.dir}\gradle\wrapper目录下（也就是跟gradle-wrapper.properties同一个目录）
    3. 修改{project.dir}\gradle\wrapper\gradle-wrapper.properties文件。如下：
        # change this line
        #distributionUrl=https\://services.gradle.org/distributions/gradle-2.2.1-all.zip 
        distributionUrl=gradle-3.3-all.zip

AVD
    use Android studio or command-line
    
    /Users/wangxichao/Library/Android/sdk/tools/bin/avdmanager 
     
    yzdHybridApp jack  /Users/wangxichao/Library/Android/sdk/tools/android target
    *************************************************************************
    The "android" command is deprecated.
    For manual SDK, AVD, and project management, please use Android Studio.
    For command-line tools, use tools/bin/sdkmanager and tools/bin/avdmanager
    *************************************************************************


## Notice

1. 公共组件 do not use import("") load component , because multi-page use common public component，
   when use ExtractTextPlugin plugin of webpack, only one page will load common public component style
            
2. Hybrid app use 内联 style

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
