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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
