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

/*9.4.3 Spread and Rest

These two actions are often necessary in programming:

Create a copy of a dataset so that we don't affect the original.

Create a single piece of data based on a combination of other pieces of data.

In the JavaScript ES6 specification, a new operator appeared to carry out both of 
these actions. The operator, ..., always looks the same, but its usage dictates what 
we call it.*/

module.exports = templateData => {

    //destructure page data by section
    const {projects, about, ...header} = templateData;

    console.log(templateData);

    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
    `;
};