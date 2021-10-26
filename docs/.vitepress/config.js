module.exports = {
    title: 'zf-ui', //设置网站标题
    description: 'ui 库', //描述
    dest: './build', //设置输出目录
    themeConfig: { // 主题配置
        nav: [
            {
                text: '主页', link: '/'
            },
            {
                text: '联系我', link: '/contact/'
            },
            {
                text: '我的博客', link: 'https://'
            }
        ],
        // 路由添加侧边栏
        sidebar: [
            {
                text: 'Button 按钮', // 必要的
                link: '/button/', // 可选的，跳转路径 绝对路径
                collapsable:false,
                sidebarDepth:1
            },
            {
                text: 'Icon 图标', // 必要的
                link: '/icon/', // 可选的，跳转路径 绝对路径
                collapsable:false,
                sidebarDepth:1
            }
        ]
    }
}