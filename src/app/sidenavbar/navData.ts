export const navData=[

  {
    routeLink :'dashboard',
    icon: "fa-solid fa-house",
    label: 'Dashboard'
  },
  {
    routeLink : "settings",
    icon: 'fa fa-wrench',
    label: 'Settings'
  },
  {
    routeLink : "items",
    icon: 'fa fa-sitemap',
    label: 'Items',
    items:[
      { routeLink: 'items/actuel',
        label:'Actuel'
      },
      { routeLink: 'items/archive',
       label: 'Archives'},
    ]
  }


]

export interface  sideNavToggle{
  screenWidth : number;
  collapsed : boolean;
}
// export interface  Inavbar{
//   routeLink: string;
//   icon?:string
//   label: string;
//   expanded? : string
//
// }

