# blockchain_trial
# Educator Reputation NFT Smart Contract

## Overview

The `EducatorReputationNFT` smart contract is a simple NFT (Non-Fungible Token) system designed for managing reputation tokens for educators. Each token has a unique ID and associated metadata URI that can be used to store additional information about the educator.

## Contract Details

- **Name**: Educator Reputation NFT
- **Symbol**: ERNFT

## Data Structures

- **Token**: A struct containing:
  - `owner`: The address of the token's owner.
  - `uri`: The metadata URI associated with the token.

- **State Variables**:
  - `_tokenIdCounter`: Counter to generate unique token IDs.
  - `_tokens`: Mapping from token IDs to `Token` structs.
  - `_ownedTokens`: Mapping from owner addresses to arrays of token IDs.

## Functions

### `mint(address to, string memory uri)`

- **Description**: Mints a new NFT with a unique token ID and assigns it to the specified address. The token is initialized with the provided metadata URI.
- **Parameters**:
  - `to`: Address of the new token owner.
  - `uri`: Metadata URI for the token.

### `setTokenURI(uint256 tokenId, string memory uri)`

- **Description**: Updates the metadata URI of an existing token. Only the current owner of the token can update its URI.
- **Parameters**:
  - `tokenId`: ID of the token to be updated.
  - `uri`: New metadata URI.

### `getTokenURI(uint256 tokenId)`

- **Description**: Retrieves the metadata URI of a specific token.
- **Parameters**:
  - `tokenId`: ID of the token to query.
- **Returns**:
  - `string memory`: The metadata URI of the token.

## Usage

### Deploy the Contract

Deploy the `EducatorReputationNFT` contract to your desired Ethereum network using a deployment tool like Truffle, Hardhat, or Remix IDE.

### Interact with the Contract

- **Minting Tokens**:
  ```javascript
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  await contract.methods.mint('0xRecipientAddress', 'https://metadata.example.com/token/1').send({ from: '0xYourAddress' });
# Deployment:
Chain Name :Educhain Open Contract
Contract Id:
0x1F19aC159F41BB88822123D84bBaF781bBAe123A
![alt text](image.png)
