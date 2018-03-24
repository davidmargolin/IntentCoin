import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x433DD0e8f608812E74F0b3c1c8C3B2b454647b13'
);

export default instance;
