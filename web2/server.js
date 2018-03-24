const Web3 = require('web3');
const fs = require('fs');
const Campaign = JSON.parse(fs.readFileSync('./Campaign.json', 'utf8'));
const provider = new Web3.providers.HttpProvider(
	'https://rinkeby.infura.io/vA3ydrt3H4EbCydVMFRg'
);

const masterAccount = '0xb9A1b152D057d66719609cBAE415cf1DB8bec63D';
let testInstance = '0xBF666960c17b352242DA1A7D9fBf6c968403428B';

let web3 = new Web3(provider);

const getCampaignInstance = async contractAddress => {
	let campaign = await new web3.eth.Contract(
		JSON.parse(Campaign.interface),
		contractAddress
	);
	return campaign;
};

//Contribute to the campaign
let account1 = '0x6A74130e400231B2c2E3cCed30577EB949D05750';
let value = web3.utils.toWei('0.001', 'ether');
// await campaign.methods.contribute().send({ from: account1, value });

const contributeToCampaign = async (campaign, from, value) => {};

const testCode = async () => {
	let campaign = await getCampaignInstance(testInstance);
	// const requestCount = await campaign.methods.getRequestsCount().call();
	// const approversCount = await campaign.methods.approversCount().call();

	let account1 = '0x6A74130e400231B2c2E3cCed30577EB949D05750';
	let value = web3.utils.toWei('0.001', 'ether');
	await campaign.methods
		.contribute()
		.send({ from: account1, value })
		.on('transactionHash', function(hash) {
			console.log(hash);
		})
		.on('confirmation', function(confirmationNumber, receipt) {
			console.log(confirmationNumber);
		})
		.on('receipt', function(receipt) {
			console.log(receipt);
		})
		.on('error', e => {
			console.log(e);
		}); // If there's an out of gas error the second parameter is the receipt.
};
try {
	testCode();
} catch (err) {
	console.log(err);
}

//Get Amount of Requests
//
// //Get Amount Of Contributors
//

//
// let recipient = '0x7d32B45fA00d38971c6b145C6Ad6fC76F954fE69';
// let value2 = '0.01';
// let description = 'We want to build a wall';
//
// // Create A Request
// // await campaign.methods
// // 	.createRequest(description, web3.utils.toWei(value2, 'ether'), recipient)
// // 	.send({ from: masterAccount });
// // console.log('Finishing Making A New Request')
//
// //Approve A Request
// //We need the request id number and the person who is approving it
// // await campaign.methods.approveRequest(this.props.id).send({
// //   from: accounts[0]
// // });
//
// //Finalize a request
// //We need the request id number and the master account
// // await campaign.methods.finalizeRequest(this.props.id).send({
// //   from: master
// // });
