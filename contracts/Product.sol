pragma solidity ^0.4.24;
import "./lib/Ownable.sol";
import "./ProductCategory.sol";

contract Product is Ownable {
    address categoryAddress;
    string name;
    bytes32 code;    //include supplier code + category code
    uint8 rating1;
    uint8 rating2;
    uint8 rating3;
    uint8 rating4;
    string comment;
    bool isCheck;
    bool isRated;
    string description;

    event Rate(address _from, address _product, address _category, uint _rating1, uint _rating2, uint _rating3, uint _rating4);
    event CheckCode(address from, uint256 value);

    constructor(
        string _name, 
        bytes32 _code, 
        string _description, 
        address _categoryAddress
    ) public {
        name = _name;
        code = _code;
        categoryAddress = _categoryAddress;
        owner = msg.sender;
        description = _description;
        isCheck = false;
        isRated = false;
    }

    // function getCategoryAddress() public view returns(address){
    //     return categoryAddress;
    // }
    
    function getCode() public view returns(bytes32){
        return code;
    }

    function getInfo() public view returns(string, uint8, uint8, uint8, uint8, string, bool, bool, string){
        return(name, rating1, rating2, rating3, rating4, comment, isCheck, isRated, description);
    }

    function getHashCode(string _code) public view returns(bytes32){
        return(sha256(_code));
    }

    function rate(uint8 _rating1, string _comment, string _code) public returns (bool){
        // , uint8 _rating2, uint8 _rating3, uint8 _rating4
        require(isRated == false);
        // require(sha256(_code) == code);
        // ProductCategory productCategory = ProductCategory(categoryAddress);
        // productCategory.rate(_rating1, categoryAddress);
        // require(msg.value > 0);
        rating1 = _rating1;
        // rating2 = _rating2;
        // rating3 = _rating3;
        // rating4 = _rating4;
        comment = _comment;
        isRated = true;
        return true;
    }

    function getIsRated() public view returns(bool){
        return isRated;
    }

    function checkCode() payable public returns (bool){
        require(isCheck == false);
        isCheck = true;
        emit CheckCode(msg.sender, msg.value);
        return false;
    }
}
