const HomePage = () => import('./pages/HomePage.vue' /* webpackChunkName: "resource/js/pages/homepage" */);
// star components
const ListOfStars = () => import('./pages/star/ListOfStars.vue' /* webpackChunkName: "resource/js/pages/star/listofstars" */);
const AddStar = () => import('./pages/star/AddStar.vue' /* webpackChunkName: "resource/js/pages/star/addstar" */) ;
const EditStar = () => import('./pages/star/EditStar.vue' /* webpackChunkName: "resource/js/pages/star/editstar" */);

export const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'ListOfStars',
        path: '/list',
        component: ListOfStars
    },
    {
        name: 'editStar',
        path: '/star/:id/edit',
        component: EditStar
    },
    {
        name: 'AddStar',
        path: '/star/add',
        component: AddStar
    }
]