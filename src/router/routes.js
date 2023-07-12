import Main from '@/views/main/Main.vue'

export default [
    {
        name: '菜单1',
        path: '/menu1',
        component: Main,
        children: [
            {
                name: '菜单1-1',
                path: 'menu1-1',
                component: () => import('@/views/HomeView.vue')
            }
        ]
    }
]
