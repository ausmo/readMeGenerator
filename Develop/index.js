const fs = require("fs");
const inquirer = require("inquirer");



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

let readMeText = (answers) => {
  console.log(answers);
  return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Contributing](#contributions)
* [Usage](#usage)
* [Contact](#contact)

## License
${generateBadgeForLicense()}

## contributions
${answers.contributors}

## usage
${answers.usage}

## contact
${answers.contact}
`;
};

// fs.writeFile("readme.md", readMeText, function (err) {
//   if (err) console.log(err);
// });

const questions = [
  {
    type: "input",
    name: "title",
    message: "What would you like your repo name to be?",
  },
  {
    type: "input",
    name: "description",
    message: "What would you like the description to be?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Were there any contributors?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the uses of this application?",
  },
  {
    type: "checkbox",
    message: "licenses if any?",
    name: "licenses",
    choices: ["MIT", "BSD", "CCO", "IBM"],
  },

  {
    type: "input",
    name: "contact",
    message: "What contact info would you like to display?",
  },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile("readme.md", readMeText(answers), function (err) {
      if (err) console.log(err);
    });
  });
}

// // Function call to initialize app
init();
