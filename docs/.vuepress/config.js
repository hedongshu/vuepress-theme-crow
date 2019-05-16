const path = require('path')

module.exports = {
    title: 'blog',
    description: 'hds的博客',
    theme: require.resolve('../../theme'),
    head: [
        ['script', { src: 'http://at.alicdn.com/t/font_1182506_c9xtn5bx6iq.js' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}