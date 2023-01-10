// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

/* var globalArray;
export{globalArray, otherFunctionsYouExport};
import * as chooseName from './path of your JS file you export from';
to use it write this
chooseName.globalArray // put here the rest of your code */

// import{
//     web_techs as web_tech_array
// } from './web_techs.js';

const web_tech_array = require(`./web_techs`);
const countriesArray = require(`./countries`);
console.log(web_tech_array.web_techs);
console.log(countriesArray.countryList);
