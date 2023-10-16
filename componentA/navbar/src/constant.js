export const routes =[
        {
            name:"Home",
            link:"/",
        },
        {
            name:"Services",
            link:"/Serivces",

            subRoutes:[
                {
                    name:"Web Development",
                    link:"/Services/web-development",
                },
                {
                    name:"Mobile Development",
                    link:"/Services/mobile-development",
                },
                {
                    name:"UI/UX Design",
                    link:"/Services/ui-ux-design",
                },
            ],
        },
        {
            name:"Product",
            link:"/Product",
        },
        {
            name:"Contact",
            link:"/Contact"
        },

];