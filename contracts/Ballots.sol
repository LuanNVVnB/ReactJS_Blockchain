// SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.7.0 <0.9.0;

// contract Ballots {
//     struct Voter {
//         uint256 weight; // weight is accumulated by delegation
//         bool voted; // if true, that person already voted
//         address delegate; // person delegated to
//         bytes32[] vote; // index of the voted proposal
//     }

//     struct Proposal {
//         bytes32 name;
//         uint256 voteCount;
//     }

//     Voter[] voterArr;
//     address public chairperson;
//     mapping(address => Voter) public voters;

//     Proposal[] public proposals;

//     function registerProposalNames(bytes32[] memory proposalNames) public {
//         // register Proposal function
//         chairperson = msg.sender;
//         voters[chairperson].weight = 1;
//         for (uint256 i = 0; i < proposalNames.length; i++) {
//             proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
//         }
//     }

//     function getVoted(address voteAddress) public view returns(bytes32[] memory ){
//        return voters[voteAddress].vote;
//     }

//     function registerVote(address voter) external {
//         // register voter function
//         require(
//             msg.sender == chairperson,
//             "Only chairperson can give right to vote."
//         );
//         require(!voters[voter].voted, "The voter already voted.");
//         require(voters[voter].weight == 0);

//         voters[voter].weight = 1;
//         voterArr.push(voters[voter]);
//     }

//     function voteArray(bytes32[] memory proposalNames) public {
//         // vote funtion for voters
//         Voter storage sender = voters[msg.sender];
//         require(sender.weight != 0, "Has no right to vote");
//         require(!sender.voted, "Already voted.");

//         sender.voted = true;
//         for (uint256 j = 0; j < proposalNames.length; j++) {
//             for (uint256 i = 0; i < proposals.length; i++) {
//                 if (proposalNames[j] == proposals[i].name) {
//                     sender.vote.push(proposalNames[j]);
//                     proposals[i].voteCount += sender.weight;
//                 }
//             }
//         }
//     }

//     function vote(bytes32 proposalNames) public {
//         // vote funtion for voters
//         Voter storage sender = voters[msg.sender];
//         require(sender.weight != 0, "Has no right to vote");
//         require(!sender.voted, "Already voted.");

//         sender.voted = true;
//         for (uint256 i = 0; i < proposals.length; i++) {
//             if (proposalNames == proposals[i].name) {
//                 sender.vote.push(proposalNames);
//                 proposals[i].voteCount += sender.weight;
//             }
//         }
//     }

//     function winningProposal() public view returns (uint256 winningProposal_) {
//         uint256 winningVoteCount = 0;
//         uint256 temp = 0;
//         for (uint256 p = 0; p < proposals.length; p++) {
//             if (proposals[p].voteCount > winningVoteCount) {
//                 winningVoteCount = proposals[p].voteCount;
//                 winningProposal_ = p;
//                 temp = p;
//             }
//         }

//         return winningProposal_;
//     }

//     function winnerName() external view returns (bytes32 winnerName_) {
//         winnerName_ = proposals[winningProposal()].name;
//         return winnerName_;
//     }
// }

pragma solidity >=0.7.0 <0.9.0;

contract Ballots {
    struct Voter {
        uint256 weight; // weight is accumulated by delegation
        bool voted; // if true, that person already voted
        address delegate; // person delegated to
        bytes32[] vote; // index of the voted proposal
    }

    struct Proposal {
        bytes32 name;
        uint256 voteCount;
    }

    Voter[] voterArr;
    address public chairperson;
    mapping(address => Voter) public voters;

    Proposal[] public proposals;

    function registerProposalNames(bytes32[] memory proposalNames) public {
        // register Proposal function
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
    }

    function getVoted(address voteAddress) public view returns(bytes32[] memory ){
       return voters[voteAddress].vote;
    }

    function registerVote(address voter) external {
        // register voter function
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(!voters[voter].voted, "The voter already voted.");
        require(voters[voter].weight == 0);

       voters[voter].weight = 1;
        voterArr.push(voters[voter]);
    }

    function voteArray(bytes32[] memory proposalName) public{
        // vote funtion for voters
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");

        bool success = false;
        
        for (uint256 j = 0; j < proposalName.length; j++) {
            for (uint256 i = 0; i < proposals.length; i++) {
                if (proposalName[j] == proposals[i].name) {
                    sender.vote.push(proposalName[j]);
                    proposals[i].voteCount += sender.weight;
                    success = true;
                }
            }
        }

        if(success == true){
            sender.voted = true;
        }else{
             revert("Not proposal null");
        }

    }

    function vote(bytes32 proposalNames) public {
        // vote funtion for voters
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");

        bool success = false;
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposalNames == proposals[i].name) {
                sender.vote.push(proposalNames);
                proposals[i].voteCount += sender.weight;
                 success = true;
            }
        }
        
        if(success == true){
            sender.voted = true;
        }else{
             revert("Not proposal null");
        }
    }

    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        uint256 temp = 0;
        for (uint256 p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
                temp = p;
            }
        }

        return winningProposal_;
    }

    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name;
        return winnerName_;
    }
}

