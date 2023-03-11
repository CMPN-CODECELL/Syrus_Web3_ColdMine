import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {ethers} from "ethers";
import Web3 from 'web3';
import { useState, useEffect } from "react";
//import //PrimaryButton from "../components/primary-button";
export default function Home() {
  const [ethereum, setEthereum] = useState(undefined);
  const [connectedAccount, setConnectedAccount] = useState(undefined);
  const [patientData, setPatientData] = useState([])

  const contractAddress = "0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99";
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
  //const [web3, setWeb3] = useState(null);
  const [myContractInstance, setMyContractInstance] = useState(null);

  useEffect(() => {
    async function setup() {
      // create an instance of the web3 provider
      const provider = new Web3.providers.HttpProvider('https://polygon-rpc.com/');
      setWeb3(new Web3(provider));

      // create an instance of the contract
      const myContract = new web3.eth.Contract(MyContractABI, MyContractAddress);
      setMyContractInstance(myContract);
    }
    setup();
  }, []);

  async function callContractFunction() {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const result = await myContractInstance.methods.myFunction(param1, param2).send({ from: account });
    console.log(result);
  }

  
  const handleAccounts = (accounts) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('We have an authorized account: ', account);
      setConnectedAccount(account);
    } else {
      console.log("No authorized accounts yet")
    }
  };
  
  const getConnectedAccount = async () => {
    if (window.ethereum) {
      setEthereum(window.ethereum);
    }
  
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      handleAccounts(accounts);
    }
  };
  
  useEffect(() => {
    getConnectedAccount();
  }, []);
  
  const connectAccount = async () => {
    if (ethereum) {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        handleAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // get patient data
  // const getPatientData = async (patientAddress) => {
  //   if (ethereum && connectedAccount) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
  //     const patientData = await contract.get_patient(patientAddress);
  //     console.log('Retrieved patient data...', patientData);
  //     setPatientData(patientData);
  //   } else {
  //     console.log('Not connected to MetaMask');
  //   }
  // };
  var accounts;
  const CheckConnection = async (patientId) => {
    if (ethereum) {
      web3=new Web3(window.ethereum);
      accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
      });
      console.log("Done");
      return true;
    }
  }
  useEffect(async () => getPatientData(), [connectedAccount])
  
    // console.log(window)
    var IsMetaMask = await CheckMetamaskConnection();

    if (IsMetaMask) {
      console.log("IsMetamask = true");
      myContract = await new web3.eth.Contract(
        SmartContractABI,
        SmartContractAddress
      );
      console.log(myContract);
      totalNFTsMinted();
    } else {
      alert("Metamask Not detected");
    }
  });

  if (!ethereum) {
    return <p>Please install MetaMask to connect to this site</p>
  }

  if (!connectedAccount) {
    return <button onClick={connectAccount}>Connect MetaMask Wallet</button>
  }
  return (
    <div>
      <button onClick={callContractFunction}>Call Contract Function</button>
    </div>
  );
}


const inter = Inter({ subsets: ["latin"] });


