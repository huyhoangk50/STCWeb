pragma solidity ^0.4.2;
import "./lib/Ownable.sol";
import "./ProductCategory.sol";

contract Supplier is Ownable {
    string name;
    string code;    //include supplier code + category code
    int256 sumRating;
    int256 numOfRating;
    string comment;
    string location;
    string description;

    event AddNewCategory(string _name, string _code, string _description, address _owner);

    ProductCategory[] lstCategory;

    constructor(string _name, string _code, string _location, string _description) public {
        name = _name;
        code = _code;
        location = _location;
        description = _description;
        owner = msg.sender;
    }

    function getInfo() public view returns(string, string, int256, int256, string, string, string){
        return(name, code, sumRating, numOfRating, comment, location, description);
    }

    function addCategory(string _name, string _imgUrl, string _description) public onlyOwner{
        ProductCategory newCategory = new ProductCategory(_name, _imgUrl, _description, address(this));
        lstCategory.push(newCategory);
        emit AddNewCategory(_name, _imgUrl, _description, msg.sender);
    }

    function rate (uint8 _rating, address _supplier) public {
        require (address(this) == _supplier);
        sumRating = sumRating + _rating;
        numOfRating = numOfRating + 1;
    }
}