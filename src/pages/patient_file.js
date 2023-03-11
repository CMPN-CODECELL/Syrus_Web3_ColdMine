import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/record.module.css";
import React, { useState, useEffect } from "react";
import{ myContract, accounts} from "./index2";


const inter = Inter({ subsets: ["latin"] });

export default function Record() {
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

    return (
        <div>

        <h1><center>Medaverse</center></h1>
        <h3><center>A Easy and Secure Healthcare Solution</center></h3>
        <line></line>
        <br></br>
        <h1><bold><center>Patient History</center></bold></h1>
        <br></br>
        <div className={styles.container_login}>
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
        </div>
        </div>
    );
}