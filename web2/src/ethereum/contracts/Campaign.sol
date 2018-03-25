pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign (uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool ) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        // require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        /* require(msg.value > minimumContribution); */

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createMultipleRequests() public {
      requests.length = 0;

      Request memory newRequest = Request({
         description: "We want to save multiple lives 1",
         value: 300000000000000000,
         recipient: 0x7d32B45fA00d38971c6b145C6Ad6fC76F954fE69,
         complete: false,
         approvalCount: 0
      });

      Request memory newRequest2 = Request({
         description: "We want to save multiple lives 2",
         value: 300000000000000000,
         recipient: 0x7d32B45fA00d38971c6b145C6Ad6fC76F954fE69,
         complete: false,
         approvalCount: 0
      });
      Request memory newRequest3 = Request({
         description: "We want to save multiple lives 3",
         value: 300000000000000000,
         recipient: 0x7d32B45fA00d38971c6b145C6Ad6fC76F954fE69,
         complete: false,
         approvalCount: 0
      });
      requests.push(newRequest);
      requests.push(newRequest2);
      requests.push(newRequest3);

    }

    function createRequest(string description, uint value, address recipient)
        public {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        /* require(approvers[msg.sender]); */
        /* require(!request.approvals[msg.sender]); */

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        /* require(request.approvalCount > (approversCount / 2)); */
        /* require(!request.complete); */

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
      return requests.length;
    }
}
