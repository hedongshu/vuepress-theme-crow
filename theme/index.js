const path = require('path')

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-theme-hds',
        head: [
            ['script', { src: 'http://at.alicdn.com/t/font_1182506_c9xtn5bx6iq.js' }]
        ],
        plugins: [
            '@vuepress/back-to-top',
            '@vuepress/pagination',
            ['@vuepress/blog'],
            ['@vuepress/active-header-links'],
            [
                '@vuepress/search', {
                    searchMaxSuggestions: 10
                }
            ],
            [
                '@vuepress/register-components', {
                    componentsDir: [
                        path.resolve(__dirname, './components')
                    ]
                }
            ],
            [
                '@vuepress/last-updated',
                {
                    transformer: (timestamp) => {
                        // 不要忘了安装 moment
                        const moment = require('moment')
                        // moment.locale(lang)
                        return moment(timestamp).fromNow()
                    }
                }
            ]
        ],
        // extendCli(cli) {
        //     cli
        //         .command('new [targetDir]', '')
        //         .option('--debug', 'display info in debug mode')
        //         .action((name) => {
        //             console.log('新文章', name)
        //         })
        // }

    }

}


