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
      <nav class="navbar bg-dark navbar-expand-lg"  data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

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
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  );
}
