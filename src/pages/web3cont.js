import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Web3 from "web3";
import Web3Modal from "web3modal";

const inter = Inter({ subsets: ["latin"] });

const provider_options = {

}
if(typeof window !== "undefined"){

    const web3modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        provider_options
    });
}


export default function Metaconnect() {
  return (
<>
<button onClick={async () => {
    const provider = await web3modal.connect();
    const web3 = new Web3(provider);
}}>Click me to connect</button>
</>
  );}
