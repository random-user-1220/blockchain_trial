// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EducatorReputationNFT {
    string public name = "Educator Reputation NFT";
    string public symbol = "ERNFT";

    struct Token {
        address owner;
        string uri;
    }

    uint256 private _tokenIdCounter;
    mapping(uint256 => Token) private _tokens;
    mapping(address => uint256[]) private _ownedTokens;

 
    function mint(address to, string memory uri) external {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter += 1;

        _tokens[tokenId] = Token(to, uri);
        _ownedTokens[to].push(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory uri) external {
        require(_tokens[tokenId].owner == msg.sender, "Not the token owner");
        _tokens[tokenId].uri = uri;
    }

    function getTokenURI(uint256 tokenId) external view returns (string memory) {
        return _tokens[tokenId].uri;
    }
