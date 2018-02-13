//this is how to import modules
// import * as Circle from "./math/circle";
// import calc from "./math/rectangle";

// console.log(Circle.PI);
// console.log(Circle.calculateCirumcumference(10));
// console.log(calc(20, 50));


// must also change the html files
// <body>
// <script>
//     // set our baseURL reference path
//     SystemJS.config({
//         baseURL: '/',
//         defaultJSExtensions: true
//     });
//     SystemJS.import('app.js');
// </script>
// </body>

// And also tsconfig.json - remember to install the plugin from github
// {
//   "compilerOptions": {
//     "module": "commonjs",
//     "target": "es5",
//     "noImplicitAny": false,
//     "sourceMap": false
//   },
//   "exclude": [
//     "node_modules"
//   ]
// }