import Web3 from "web3";
import React, { useState, useEffect } from "react";
import styles from "@/styles/record.module.css";

const contractAddress = "0xE18F4CB9f1152dcc3e3200d5C8680d2c2708e8eb";
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_bloodGroup",
        type: "string",
      },
      {
        internalType: "string",
        name: "_allergies",
        type: "string",
      },
      {
        internalType: "string",
        name: "_medications",
        type: "string",
      },
      {
        internalType: "string",
        name: "_medicalHistory",
        type: "string",
      },
    ],
    name: "createPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_patientId",
        type: "uint256",
      },
    ],
    name: "getPatient",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPatientCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "patientCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "patients",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "bloodGroup",
        type: "string",
      },
      {
        internalType: "string",
        name: "allergies",
        type: "string",
      },
      {
        internalType: "string",
        name: "medications",
        type: "string",
      },
      {
        internalType: "string",
        name: "medicalHistory",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

var myContract;
var accounts;
export default function MyPage() {
  const [patientID, setPatientID] = useState("");
  const [record, setRecord] = useState("");


  async function getDetails(patientID) {
    await myContract.methods.getPatient(patientID).call(function (err, res) {
      if (!err) {
        console.log(res);
        setRecord(res);
      }
    });
    console.log(accounts[0]);
  }
  const [bloodGroup, setBloodgroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  function handleChangeblood(event) {
      setBloodgroup(event.target.value);
    }
  function handleChangeallerg(event) {
      setAllergies(event.target.value);
    }
  function handleChangemedic(event) {
      setMedications(event.target.value);
    }
  function handleChangemedh(event) {
      setMedicalHistory(event.target.value);
    }
  

async function setDetails(bloodGroup, allergies, medications,medicalHistory) {
  await myContract.methods
    .createPatient(bloodGroup, allergies, medications, medicalHistory)
    .send({from: accounts[0]}, function (err, res) {
      if (!err) {
        console.log(res);
      }
    });
  console.log(accounts[0]);
}
  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Web3 enabled");
        myContract = await new web3.eth.Contract(contractABI, contractAddress);
        console.log(myContract);
        getDetails();
      } else {
        alert("Metamask Not detected");
      }
    }
    loadWeb3();
  }, []);

  function handleChange(event) {
    setPatientID(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(patientID); // do something with the input value
  }

  return (
    <div>
        <div className={styles.container_login}>
        <h1><center>Medaverse</center></h1>
        <h3><center>A Easy and Secure Healthcare Solution</center></h3>
        <line></line>
        <br></br>
        <h1><bold><center>Patient History</center></bold></h1>
        <br></br>
        <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Blood Group:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Blood group" value={bloodGroup} onChange={handleChangeblood} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Medical History:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" value={medicalHistory} onChange={handleChangemedh} placeholder="Medical History (Any past surgeries or tretments you have undergone)" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Any Allergies:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={allergies} onChange={handleChangeallerg} placeholder="Allergies"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Medications Done In Past:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={medications} onChange={handleChangemedic} placeholder="Any Medication like Chemotherapy , Laser etc. received in the past"></textarea>
            </div><center><button type="button" class="btn btn-dark" onClick={() => setDetails(bloodGroup, allergies, medications,medicalHistory)}>Submit</button></center>
      <hr />
<br />
      <h1>
        <center>Get Patient Data</center>
      </h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Patient ID
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          value={patientID}
          onChange={handleChange}
          placeholder="Enter Patient ID"
        />
      </div>
      <center>
        <button
          type="button"
          class="btn btn-dark"
          onClick={getDetails(patientID)}
        >
          Get Patient Details
        </button>
      </center>
   
       

      {record && <p>Patient ID: {record[0]}</p>}
      {record && <p>Blood group: {record[1]}</p>}
      {record && <p>Allergies: {record[2]}</p>}
      {record && <p>Medications: {record[3]}</p>}
      {record && <p>Medical History: {record[4]}</p>}
    </div>
    </div>

  );
}
