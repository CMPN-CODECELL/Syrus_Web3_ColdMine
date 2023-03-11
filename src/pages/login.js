import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/record.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <form>
      <h1><center>Medaverse</center></h1>
        <h3><center>A Easy and Secure Healthcare Solution</center></h3>
        <line></line>
        <br></br>
        <h1><bold><center>Login</center></bold></h1>
        <br></br>
        <div className={styles.container_login}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Verify your credentials
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick="LoginSubmit()">
          Submit
        </button>
        </div>
      </form>
    </>
  );
}
