const HomePage = () => import('./components/HomePage.vue' /* webpackChunkName: "resource/js/components/homepage" */);
// star components
const ListOfStars = () => import('./components/star/ListOfStars.vue' /* webpackChunkName: "resource/js/components/star/listofstars" */);
const AddStar = () => import('./components/star/AddStar.vue' /* webpackChunkName: "resource/js/components/star/addstar" */) ;
const EditStar = () => import('./components/star/EditStar.vue' /* webpackChunkName: "resource/js/components/star/editstar" */);

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