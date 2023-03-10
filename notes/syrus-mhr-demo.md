# Syrus MHR demo notes

## Prerequisties
- NodeJS
- Git
- VS code
- Github account
- Vercel account
- 

## Creating a next js app
- install nodejs
- run `npx create-react-app appname`
- run it on localserver using `npm run dev`

## Linking bootstrap in the nextjs app
- `npm install bootstrap` in the main app directory
- goto `pages/_app.js` and add the following line `import 'bootstrap/dist/css/bootstrap.css'` 

Links:
- https://medium.com/nextjs/how-to-add-bootstrap-in-next-js-de997371fd9c


## To create pages with a url in nextjs
- goto `/pages` directory
- create a new page `new.js` and copy the basic structure of a next js page

    
## To deploy nextjs app to vercel
- create a vercel account
- push your code to the github repo
- create a new repo on github
- initialize local repo and add the origin to the repo on github
- push the code to the repo
- connect your github repo with the vercel app
- select repo to deploy by choosing new project and deploy


## ReactJS/NextJs

- using `Link` tag will allow props to display the page

### Static Assest

- place all the static assets in the public directory,( images, videos, files, etc)

## CSS

- Create a `component.js` and a `componet.module.css` in root level `component` directory

## Smart Contract/Solidity

- set the pragma for the contract
- import openzeppelin ERC721 and other files
    - https://docs.openzeppelin.com/contracts/4.x/erc721
- create a new contract 
- create data structures
- write functions for the contract
- 

## Web3js and metamask injector

- https://github.com/javedblch/metamask-integration-nextjs-web3js

### mint vs mine

- https://101blockchains.com/crypto-minting-vs-crypto-mining/

