# OpenRCT2 No-Go Zone Mod
This mod allows you to create no-go zones in your park. Not only will these areas not be accessible by guests, but they won't be accessible to staff either.
This allows you to create areas that are completely off-limits to guests and staff.

## Installation
- Run `npm install` to install all the required packages (Download [Node.js](https://nodejs.org/) if npm is not recognized).
- In the package.json, replace `OPENRCT2PATH` with the path to your OpenRCT2 directory.

## Build
You can build your project using the following commands:
- `npm run build` Manually build the project
- `npm run watch build` Automatically build everytime a source file is updated
If the installation was done correctly the transpiled JS file can be found in both the `build` directory and in the `plugin` directory of OpenRCT2. 
With hotreloading enabled and the watch command being used you no longer have to restart the game, and move files around manually.
