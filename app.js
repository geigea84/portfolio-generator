const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

/*9.1
const printProfileData = (profileDataArr) => {
    //This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log("================");

    //Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/

/*9.2.5 The fs.writeFile() function definition has three arguments. The first argument
 is the name of the file that's being created. The next argument is the data that will 
 write onto the file, in this case the HTML template literal. The last parameter is a 
 callback function that will be used for error handling.*/

 fs.writeFile("./index.html", generatePage(name, github), err => {
     if (err) throw err;

     console.log("Portfolio complete!  Check out index.html to see the output!")
 });