import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x421Cf29b901670A7c5358CCF2165209561CeB21D'
);

export default instance;
