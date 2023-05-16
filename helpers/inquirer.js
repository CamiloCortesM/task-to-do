const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "what do you want to do?",
    choices: [
      {
        value: "1",
        name: "1.Create todo",
      },
      {
        value: "2",
        name: "2.List todos",
      },
      {
        value: "3",
        name: "3.List completed todos",
      },
      {
        value: "4",
        name: "4.List pending todos",
      },
      {
        value: "5",
        name: "5.Complete todo(s)",
      },
      {
        value: "6",
        name: "6.Delete todo",
      },
      {
        value: "0",
        name: "0.Exit \n",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".green);
  console.log("   Select an option".green);
  console.log("========================\n".green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  console.log("\n");
  await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: `\nPress ${"ENTER".green} to continuen\n`,
    },
  ]);
};

module.exports = {
  inquirerMenu,
  pause,
};
