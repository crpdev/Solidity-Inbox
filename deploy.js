const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'find foam girl wool pair movie false share kite inspire hotel strike',
    'https://rinkeby.infura.io/v3/70cd5a2d9ad44d978d4bed86907fa7cd'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();
 
    console.log('attemping to deploy from account', accounts[0]);

    const outcome = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi There!']})
    .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ', outcome.options.address);
};

deploy();