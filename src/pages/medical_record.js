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

        <h1><center>Medaverse</center></h1>
        <h3><center>A Easy and Secure Healthcare Solution</center></h3>
        <line></line>
        <br></br>
        <h1><bold><center>General Info</center></bold></h1>
        <br></br>
        <div className={styles.container_login}>
        <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID No.</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ID No." />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Id</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email address" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Full Name:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Full Name"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Contact No.:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Contact No."></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Gender:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Gender"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Date Of Birth:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="DD/MM/YYYY"></textarea>
            </div>
            <center><button type="button" class="btn btn-dark">Submit</button></center>
        </div>
        </div>
    );
}