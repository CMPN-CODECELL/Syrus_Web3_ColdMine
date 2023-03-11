import { useEffect } from 'react';
import Web3 from 'web3';
const contractAddress="0xE18F4CB9f1152dcc3e3200d5C8680d2c2708e8eb"
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_bloodGroup",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_allergies",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_medications",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_medicalHistory",
				"type": "string"
			}
		],
		"name": "createPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_patientId",
				"type": "uint256"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
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
		"inputs": [],
		"name": "getPatientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "bloodGroup",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "allergies",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medications",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicalHistory",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var myContract;
var accounts;
export default function MyPage() {
async function getDetails() {
        await myContract.methods.getPatient(1).call(function(err, res) {
            if(!err) {
                console.log(res)
               
            }
        })
        console.log(accounts[0])
      }
  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        accounts=await window.ethereum.request({
            method:"eth_requestAccounts",
        });
        console.log("Web3 enabled");
        myContract = await new web3.eth.Contract(
          contractABI,
          contractAddress
        );
        console.log(myContract);
        getDetails();
      } else {
        alert("Metamask Not detected");
      }
    }
    loadWeb3();
  }, []);

  return (

    <div>
      <h1><center>Get Patient Data</center></h1>
      <center><button type="button" class="btn btn-dark" onClick={getDetails}>Get Patient Details</button></center>
    </div>
  );
}
