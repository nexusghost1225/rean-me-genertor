const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Project name",
            name: "README",
        },
        {
            type: "Project decription",
            message: "what is your project about",
            name: "description",
        },
        {
            type: "input",
            message: "What is your preferred method of communication",
            name: "comunication",
        },
    ])
    .then((response) => {
        console.log(response);

        fs.writeFile(`${response.README}.md`, JSON.stringify(response), (err) =>
            err ? console.error(err) : console.log("success")
        );
    });