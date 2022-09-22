const fs = require("fs");
const inquirer = require("inquirer");

//lines 6 through 16 are nice looking badges that will appear when the user selects a license

function generateBadgeForLicense(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "CCO") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
}

// the following is a template for the readme

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
${generateBadgeForLicense(answers.license)}

## contributions
${answers.contributors}

## usage
${answers.usage}

## contact
${answers.contact}

## gitHub
[Github](https://github.com/${answers.GitHub})
`;
};

// these are the questions that will appear in the terminal

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
    type: "list",
    message: "licenses if any?",
    name: "licenses",
    choices: ["MIT", "BSD", "CCO", "IBM"],
  },

  {
    type: "input",
    name: "contact",
    message: "What contact info would you like to display?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your Github user name?",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile("readme.md", readMeText(answers), function (err) {
      if (err) console.log(err);
    });
  });
}

//Function call to initialize app
init();
