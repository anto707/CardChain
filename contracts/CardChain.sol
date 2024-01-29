// SPDX-License-Identifier: CC-BY-SA-4.0
pragma solidity >=0.6.0 <0.9.0;

contract CardChainGame {
    address payable public minter;
    uint256 public gameFee;
    uint256 public totalFunds;

    mapping(address => uint256) public balances; // Corrected variable name 'balances'

    event GamePlayed(address indexed player, uint256 amount);
    event WinDeclare(address indexed winner, uint256 prize);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    modifier onlyMinter() {
        require(msg.sender == minter, "Only the owner can call this function");
        _;
    }

    constructor(uint256 _gameFee) public {
        minter = payable(msg.sender);
        gameFee = _gameFee;
    }

    function setGameFee(uint256 _gameFee) external onlyMinter {
        gameFee = _gameFee;
    }

    modifier enoughTokenCheck() {
        require(
            balances[msg.sender] >= gameFee,
            "Not enough tokens to play. Please buy tokens."
        );
        _;
    }

    function playGame() external enoughTokenCheck {
        balances[msg.sender] -= gameFee;

        emit GamePlayed(msg.sender, gameFee);
    }

    function buyGameTokens() public payable {
        balances[msg.sender] += msg.value / 2;
        minter.transfer(msg.value - (msg.value / 2));
    }

    function sendTokens(
        address receiver,
        uint amount
    ) public returns (bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }
}
