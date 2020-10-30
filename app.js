const inquirer = require("inquirer");
/*
const fs = require("fs");
const generatePage = require("./src/page-template.js");
const pageHTML = generatePage(name, github);
*/

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
/*
 fs.writeFile("./index.html", pageHTML, err => {
     if (err) throw err;

     console.log("Portfolio complete!  Check out index.html to see the output!")
 });
*/

/*9.3.5 Place the call to inquirer.prompt() in a function so that it can be invoked on 
demand within the flow of the application.*/
/*9.3.5 Notice that the function returns a running of inquire.prompt(), thus returning 
what it returns, which is a Promise. Just like fetch(), which we covered previously, 
the Promise will resolve with a .then() method.*/
/*9.3.5 So, here we're calling a function that returns the result of inquire.prompt, 
which is a Promise. We therefore append the .then() method to the function call, 
since it returns a Promise, and we put into .then() whatever we wish to take place 
after the Promise is resolved.*/
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your GitHub Username!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some information about yourself for an 'About' section?",
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]);
};

 const promptProject = portfolioData => {
     console.log(`
        =================
        Add a New Project
        =================
     `);

     //If there's no "projects" array property, create one
     if (!portfolioData.projects) {
        portfolioData.projects = [];
     }

     return inquirer.prompt([
         {
             type: "input",
             name: "name",
             message: "What is the name of your project?",
             validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your project name!");
                    return false;
                }
            }
         },
         {
             type: "input",
             name: "description",
             message: "Provide a description of the project (Required)",
             validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide a project description!");
                    return false;
                }
            }
         },
         {
             type: "checkbox",
             name: "languages",
             message: "What did you build this project with? (Check all that apply)",
             choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
         },
         {
             type: "input",
             name: "link",
             message: "Enter the GitHub link to your project. (Required)",
             validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the GitHub link to your project!");
                    return false;
                }
            }
         },
         {
             type: "confirm",
             name: "feature",
             message: "Would you like to feature this project?",
             default: false
         },
         {
             type: "confirm",
             name: "confirmAddProject",
             message: "Would you like to enter another project?",
             default: false
         }
     ])
     .then(projectData => {
         portfolioData.projects.push(projectData);
         if (projectData.confirmAddProject) {
             return promptProject(portfolioData);
         }
         else {
             return portfolioData;
         }
         /*9.3.5 In this condition, we're evaluating the user response to whether 
         they wish to add more projects. This response was captured in the answer 
         object, projectData, in the property confirmAddProject. If the user wishes 
         to add more projects, then this condition will evaluate to true and call 
         the promptProject(portfolioData) function.*/
     });
 };

 promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
