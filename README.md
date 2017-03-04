# node-es6-tdd
node.js + es6 project scaffold for test driven development (tdd)

## developer machine setup
### mac operating system
* open the terminal
* install [nvm], [node], [npm], [yarn] using the following commands:
```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
source ~/.bash_profile
nvm install v7.5.0
npm install -g npm
npm install -g yarn
```

## install
* note: `project-name` is the name of your project/library.
```bash
git clone https://github.com/cleancodedojo/node-es6-tdd.git project-name
cd project-name
yarn
```

## test
```bash
npm test
```

## automatic test
```bash
npm run test-auto
```

## build
```bash
npm run build
```

## usage
* note: `project-name` is the name of your project/library.
```js
import App from "project-name"
```

## shell scripts
### test
```bash
./test.sh
```

### build
```bash
./build.sh
```

### clear original project scaffold git history
* note: you should only do this once, after cloning the repo. you will loose all your git history if you run this script.
* after clearing the original git history, run `git init` + `git add .` to add the project scaffold files to a new git repo
```bash
./clear-git-history.sh
```

## technologies
* javascript
* es6 + babel
* mocha + chai
* nvm + node + npm + yarn
* gulp

## license
MIT

## team
* [ray joseph de castro]. software architect. 

[nvm]: https://github.com/creationix/nvm#install-script
[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[ray joseph de castro]: https://github.com/raydecastro/
