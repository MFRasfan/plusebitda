const menus = [
    {
        id: 1,
        name: 'Home',
        linkmenu: '/',
    },
    {
        id: 2,
        name: 'About',
        linkmenu: '/about-v1',
       
    },
    {
        id: 3,
        name: 'Services',
        linkmenu: '/services-v1',
        namesub:  [
            {
                id: 1,
                sub: 'Services Grid',
                links: '/services-v1',
                submenu: undefined
            },
            {
                id: 2,
                sub: 'Risk Management',
                links: '/services-v2',
                submenu: undefined
            }
        ],
    },
    {
        id: 4,
        name: 'Portfolio',
        linkmenu: '/portfolio-v1',
        
    },
    {
        id: 5,
        name: 'News',
        linkmenu: '/blog-grid',
    
    },
    {
        id: 6,
        name: 'Contact',
        linkmenu: '/contact-v1',
        
    }
]

export default menus;