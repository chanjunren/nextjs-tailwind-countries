(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9966:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(e){var t=e.field,n=e.value;return(0,r.jsxs)("div",{className:"container flex w-full",children:[(0,r.jsxs)("h2",{className:"font-semibold pr-2 text-sm",children:[t,": "]}),(0,r.jsx)("p",{className:"text-sm",children:n})]})}},8662:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(9008),o=n(7294),s=n(5154),i=n(5893);function a(e){var t=e.regionName,n=e.setFilter,r=e.toggleDropDown;return(0,i.jsx)("button",{className:"p-3 shadow-sm w-full text-left hover:bg-orange-500 rounded-sm hover:text-white",onClick:function(){n(t),r()},children:t})}function c(e){var t=e.regions,n=e.dropdownActive,r=e.toggleDropDown,o=e.filter,c=e.setFilter,l=e.searchInputHandler;return(0,i.jsxs)("div",{className:"container flex md:flex-row flex-col gap-3 items-center justify-between min-w-full",children:[(0,i.jsxs)("div",{className:"container flex items-center shadow-md pl-3 pt-2 pb-2 rounded-md md:w-2/5 w-full dark:bg-control-dark",children:[(0,i.jsx)(s.U41,{className:"fill-gray-400"}),(0,i.jsx)("input",{className:"focus:outline-none p-2 w-full dark:bg-control-dark",placeholder:"Search for a country...",onInput:l})]}),(0,i.jsxs)("div",{className:"container relative items-center md:w-2/5 w-full",children:[(0,i.jsxs)("button",{className:"dark:bg-control-dark container flex shadow-md p-2 pr-3 rounded-md items-center justify-between",onClick:r,children:[(0,i.jsx)("p",{className:"p-2",children:"".concat(""===o?"Filter by Region":o)}),(0,i.jsx)(s.RiI,{className:"".concat(n?"rotate-180":""," duration-200")})]}),n?(0,i.jsx)("div",{className:"absolute left-0 top-16 w-full shadow-md rounded-lg bg-white dark:bg-control-dark z-10",children:Array.from(t).map((function(e){return(0,i.jsx)(a,{regionName:e,setFilter:c,toggleDropDown:r},"".concat(e,"-dropdown"))}))}):""]})]})}var l=n(9499),d=n(5675),u=n.n(d),f=n(1664),m=n.n(f),p=n(9966);function g(e){return console.log("https://chanjunren.github.io/nextjs-tailwind-countries"),(0,i.jsx)(m(),{href:"/countries/".concat(e.name.official),passHref:!0,children:(0,i.jsxs)("div",{className:"flex flex-col shadow-lg rounded-md w-[200px] h-[360px] pb-20 cursor-pointer hover:scale-[1.02] duration-100 dark:bg-control-dark",children:[(0,i.jsx)(u(),{className:"rounded-md",src:e.flags.png?e.flags.png:"",alt:e.name.common+"_flag",height:120,width:200,objectFit:"cover"}),(0,i.jsxs)("div",{className:"p-5",children:[(0,i.jsx)("h1",{className:"font-bold mt-5 mb-5",children:e.name.common}),(0,i.jsx)(p.Z,{field:"Population",value:e.population.toString()}),(0,i.jsx)(p.Z,{field:"Region",value:e.region}),(0,i.jsx)(p.Z,{field:"Capital",value:e.capital&&e.capital[0]?e.capital[0]:""})]})]})})}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){var t=e.searchFilter,n=e.regionFilter,r=e.countries;return(0,i.jsx)("div",{id:"viewport",className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-28 p-10 w-5/6 m-auto justify-center align-center",children:r.filter((function(e){return!(!e.name.common.toLowerCase().startsWith(t.toLowerCase())||""!=n)||e.region==n})).map((function(e){return(0,i.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.name.common+"_country_card")}))})}var j=n(7498),w=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],s=(0,o.useState)(""),a=s[0],l=s[1],d=(0,o.useState)(""),u=d[0],f=d[1],m=(0,o.useContext)(j.Z);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"My blood sweat and tears"}),(0,i.jsx)("meta",{name:"description",content:"Padlet Take Home Assignment"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"dark:bg-main-dark dark:text-white text-black min-h-screen",children:[(0,i.jsx)("div",{className:"container p-10 flex items-center w-5/6 mt-16 m-auto",children:(0,i.jsx)(c,{regions:m.regions,dropdownActive:t,toggleDropDown:function(){n(!t)},filter:a,setFilter:l,searchInputHandler:function(e){f(e.target.value)}})}),(0,i.jsx)(x,{countries:m.countries,regionFilter:a,searchFilter:u})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8662)}])}},function(e){e.O(0,[247,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);