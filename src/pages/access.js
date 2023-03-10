import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/record.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Record() {
  return (
    <div>
      <h1>
        <center>Medaverse</center>
      </h1>
      <h3>
        <center>A Easy and Secure Healthcare Solution</center>
      </h3>
      <line></line>

      <br></br>
      <h1>
        <bold>
          <center>Allow Access</center>
        </bold>
      </h1>
      <br></br>
      <div className={styles.container_login}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            <bold>Enter The Ethereum address For The Doctor</bold>
          </label>
          <br></br>
          <input
            type="Text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Ethereum address For The Doctor"
          />
        </div>
        <div id="emailHelp" className="form-text">
          Allows the doctor to view your previous medical records
        </div>
        <button type="button" class="btn btn-primary">Allow Access</button>
      </div>
    </div>
  );
}
