/* 9.2.4 This function returns a string. Let's break it down further to compare 
it to the arrow functions we created in the previous lesson. You might remember 
that parentheses are unnecessary in arrow functions when there is one parameter. 
In this function, which has no parameters, we need parentheses to hold the place 
where parameters would've been.

Also notice the conspicuous absence of the return keyword. Normally, to return 
something from a function, we'd need a return statement to explicitly state the 
return value; otherwise, undefined would be returned. But in the special case 
when a function has only a single statement, the curly braces, {}, are unnecessary 
and the return statement is implied.*/

/*9.2.4 With template literals, we can wrap the string in backticks and interpolate 
the variables with the ${<variable>} syntax.*/

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>
  
  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">GitHub</a></h2>
  </body>
  </html>
    `;
};

module.exports = generatePage;