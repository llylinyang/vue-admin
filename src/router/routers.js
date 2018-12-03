import Main from '@/view/main'
import ContentTable from '../components/ContentTable.vue'
import SiderMenu from '../components/SiderMenu.vue'

export default [
    {        
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    hideInMenu: true,
                    title: '首页',
                    notCache: true
                },
               //component: () => import('@/view/home/home.vue')
               components: {
                   sider: () => import('@/view/sider/sider-index.vue'),
                   main: () => import('@/view/home/home.vue')
               }
            },
            {
                path: '/users',
                name: 'users',
                meta: {
                    hideInMenu: true,
                    title: '用户管理',
                    notCache: true
                },
                components: {
                    sider: () => import('@/view/sider/sider-users.vue'),
                    main: () => import('@/view/list/list.vue')
                },
                children: [
                    {
                        path: '/users/list',
                        name: 'usersList',
                        meta: {
                            hideInMenu: true,
                            title: '用户管理',
                            notCache: true
                        },
                        component: () => import('@/view/users/users-list.vue')
                    }
                ]
            },
            {
                path: '/content',
                name: 'content',
                meta: {
                    hideInMenu: true,
                    title: '内容管理',
                    notCache: true
                },
                components: {
                    sider: () => import('@/view/sider/sider-content.vue'),
                    main: () => import('@/view/list/list.vue')
                }
            }
        ]

    }   
]