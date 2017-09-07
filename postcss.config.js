module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 75,
            unitPrecision: 5,
            propList: [
                // 'font',
                'width',
                'height',
                'border',
                // 'margin',
                'position',
                'right',
                'left',
                'top',
                'line-height',
                'letter-spacing'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ]
}
