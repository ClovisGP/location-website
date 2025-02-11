import SVGHome from '@/src/components/SVGComponents/SVGHome';

const RoutesList = {
    home : {
        label: 'home.home',
        icon: <SVGHome />,
        path:'/',
        displayOnNav: true,
    },
    bergerie : {
        label: 'bergerie.label',
        icon: <SVGHome />,
        path:'/bergerie',
        displayOnNav: true,
    },
    clos : {
        label: 'clos.label',
        icon: <SVGHome />,
        path:'/clos',
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