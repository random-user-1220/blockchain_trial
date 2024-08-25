// Replace with your contract address and ABI
const contractAddress = '0x1F19aC159F41BB88822123D84bBaF781bBAe123A';
const contractABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "getOwnedTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getTokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "setTokenURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

let web3;
let contract;
let accounts;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        accounts = await web3.eth.getAccounts();
        contract = new web3.eth.Contract(contractABI, contractAddress);
        document.getElementById('status').innerText = 'Connected to Ethereum!';
    } else {
        document.getElementById('status').innerText = 'Please install MetaMask!';
    }
});

async function mintNFT() {
    const to = document.getElementById('mintAddress').value;
    const uri = document.getElementById('mintURI').value;
    try {
        await contract.methods.mint(to, uri).send({ from: accounts[0] });
        alert('NFT Minted!');
    } catch (error) {
        console.error(error);
        alert('Failed to mint NFT.');
    }
}

async function updateTokenURI() {
    const tokenId = document.getElementById('updateTokenId').value;
    const uri = document.getElementById('updateURI').value;
    try {
        await contract.methods.setTokenURI(tokenId, uri).send({ from: accounts[0] });
        alert('Token URI Updated!');
    } catch (error) {
        console.error(error);
        alert('Failed to update Token URI.');
    }
}

async function getTokenURI() {
    const tokenId = document.getElementById('getTokenId').value;
    try {
        const uri = await contract.methods.getTokenURI(tokenId).call();
        document.getElementById('tokenURIResult').innerText = uri;
    } catch (error) {
        console.error(error);
        alert('Failed to get Token URI.');
    }
}

async function getOwnedTokens() {
    const owner = document.getElementById('ownerAddress').value;
    try {
        const tokens = await contract.methods.getOwnedTokens(owner).call();
        document.getElementById('ownedTokensResult').innerText = tokens.join(', ');
    } catch (error) {
        console.error(error);
        alert('Failed to get owned tokens.');
    }
}
