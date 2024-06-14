# adventure_game_ts_project07

A thrilling command-line adventure game where you, the player, face off against formidable opponents like Skeletons, Assassins, and Zombies. Choose your actions wisely—attack, drink a health potion, or run for your life. Manage your fuel levels to survive and emerge victorious.

## Features

- **Interactive Gameplay**: Built with `inquirer` for a seamless interactive experience.
- **Vibrant Console Messages**: Enhanced with `chalk` for colorful and bold game notifications.
- **Dynamic Opponents**: Challenge different opponents, each with unique attributes.
- **Strategic Decisions**: Make critical decisions to attack, heal, or escape.

## Installation

To install and run the game, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/hassanali38/adventure_game_ts_project07.git
    cd adventure-game
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run the Game**
    ```bash
    node index.js
    ```

4. **Running with NPX**
   ```bash
   npx adventure-game-byhassanali
   ```

## How to Play

1. **Start the Game**
   - Upon running the game, you will be prompted to enter your name.
   
2. **Choose Your Opponent**
   - Select your opponent from the list of available choices: Skeleton, Assassin, or Zombie.
   
3. **Take Action**
   - Choose your action from the available options: Attack, Drink Portion, or Run For Your Life.
   - Your fuel and your opponent's fuel will be displayed after each action.
   - The game ends when either you or your opponent's fuel reaches zero.

## Game Actions

- **Attack**: Decreases either your or your opponent's fuel randomly.
- **Drink Portion**: Restores your fuel to 100.
- **Run For Your Life**: Ends the game with your defeat.

## Example

```bash
$ npm start
Please Enter Your Name: John
Choose Your Opponent: Skeleton, Assassin, Zombie: Skeleton
John VS Skeleton
Select the Action: Attack, Drink Portion, Run For Your Life: Attack
John fuel is 75
Skeleton fuel is 100
...
```

## Author

Hassan Ali
