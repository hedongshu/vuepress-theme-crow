const path = require('path')

module.exports = {
    base: '/',
    title: 'blog',
    description: 'hds的博客',
    theme: require.resolve('../../theme'),
    head: [
        ['script', { src: 'http://at.alicdn.com/t/font_1182506_3lea0gbd86a.js' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', icon: 'diannao', link: '/' },
            { text: 'Tag', icon: 'biaoqian', link: '/tag/' },
            { text: 'Category', icon: 'gaojian', link: '/category/' },
            { text: 'About', icon: 'geren', link: '/about' },
        ],

        // 侧栏的数据
        sideInfo: {
            picturePath: '/imgs/IMG_0001.JPG', //头像
            infoText: '', //显示头像下面的文字,默认是网站标题

            // 社交
            social: [
                {
                    icon: 'GitHub',
                    name: 'Gihub',
                    link: ''
                },
                {
                    icon: 'Email',
                    name: 'Email',
                    link: ''
                },
                {
                    icon: 'weibo',
                    name: 'WeiBo',
                    link: ''
                },
            ]

        }
    }
}