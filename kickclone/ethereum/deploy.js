const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/campaignFactory.json');

const provider = new HDWalletProvider(
	'lens exercise bone ask health all lecture impose senior actual stone major',
	'https://rinkeby.infura.io/vA3ydrt3H4EbCydVMFRg'
);
let masterAccount = '0xb9A1b152D057d66719609cBAE415cf1DB8bec63D';

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: masterAccount });

	console.log('Contract deployed tosgsgsg', result.options.address);
};

deploy();
