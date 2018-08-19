pragma solidity ^0.4.2;
import "./lib/Ownable.sol";
import "./Product.sol";
import "./ProductCategory.sol";

contract ProductCategory is Ownable {
    string name;
    string imgUrl;        //include supplier code
    int256 sumRating;
    int256 numOfRating;
    string description;
    address supplierAddress;

    event AddNewProduct(string _name, bytes32 _code, string _description, address _category, address _supplier);

    Product[] lstProduct;

    constructor(string _name, string _imgUrl, string _description, address _supplierAddress) public {
        name = _name;
        imgUrl = _imgUrl;
        description = _description;
        supplierAddress = _supplierAddress;
        owner = msg.sender;
    }
    // function getSupplierAddress() public view returns(address){
    //     return supplierAddress;
    // }

    function getInfo() public view returns(string, string, string, int256, int256){
        return(name, imgUrl, description, sumRating, numOfRating);
    }

    function addProduct(string _name, bytes32 _code, string _description) public onlyOwner {
        Product newProduct = new Product(_name, _code, _description, address(this));
        lstProduct.push(newProduct);
        emit AddNewProduct(_name, _code, _description, address(this), msg.sender);
    }

    function rate(uint8 rating, address _category) public {
        require (address(this) == _category);
        sumRating = sumRating + rating;
        numOfRating = numOfRating + 1;
    }
}