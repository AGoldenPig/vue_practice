export default{
    path:'/',
    component: ()=>import('@/views/Home'),
    children:[
        {
            path:'p1',
            component: ()=>import('@/views/PageOne')
        },{
            path:'p2',
            component: ()=>import('@/views/PageTwo')
        },{
            path:'p3',
            component: ()=>import('@/views/PageThree')
        }
    ]
}