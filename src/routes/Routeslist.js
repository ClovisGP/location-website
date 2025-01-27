import SVGHome from '@/src/components/SVGComponents/SVGHome';

const RoutesList = {
    home : {
        label: 'home.home',
        icon: <SVGHome />,
        path:'/',
        displayOnNav: true,
    },
    mauragne : {
        label: 'mauragne.label',
        icon: <SVGHome />,
        path:'/mauragne',
        displayOnNav: true,
    },
};

export default RoutesList;