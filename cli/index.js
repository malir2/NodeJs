#!/usr/bin/env node

const inquirer = require("inquirer");

const moveFinder = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      { timeout: 10000 }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const moves = result.moves.map(({ move }) => move.name);

    console.log(moves.slice(0, 5));
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter the name of the pokemon",
  },
]).then((answer) => {
  const pokemon = answer.pokemon;
  moveFinder(pokemon);
});
