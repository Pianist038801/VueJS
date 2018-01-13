# How build project (Mac OS)

### Dependencies 
Install Node.js (I use nvm manager. I recomend it.) https://github.com/creationix/nvm

In termimal.app

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
Then re-open terminal.app    

    nvm install 6.9.2
    
Add alias for this version NODE (make it default)

    nvm alias default v6.9.2
    
Installing the necessary packages to Global
    
    npm install cross-env  webpack@2.6.1 webpack-dev-server@2.6.1 --global

### Rename file for SFTP access and deploy
Rename file _accessDeployExample.json to _accessDeploy.json

### Install dependencies
Open folder project in terminal.app and install dependencies

    npm install

### Main command
Open folder project in terminal.app

Command to build project. New files will be add to "build" folder.    
    
    npm run build
 
Developing project (run local server http://YouIP:8000). Any cange automatic build new version project.

    npm run dev
