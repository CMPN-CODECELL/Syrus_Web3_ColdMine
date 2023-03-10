import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


// daap nft appraoch for injector
// var accounts;
//       var myContract;

//       async function CheckMetamaskConnection() {
//         if (window.ethereum) {
//           try {
//             // Create a new web3 object
//             web3 = new Web3(window.ethereum);
//             accounts = await window.ethereum.request({
//               method: "eth_requestAccounts",
//             });
//             console.log("Done");
//             return true;
//           } catch (err) {
//             console.log(err);
//             return false;
//           }
//         } else {
//           console.log("Metamask Not Found");
//           return false;
//         }
//       }

//       $(document).ready(async function () {
//         // console.log(window)
//         var IsMetaMask = await CheckMetamaskConnection();

//         if (IsMetaMask) {
//           console.log("IsMetamask = true");
//           myContract = await new web3.eth.Contract(
//             SmartContractABI,
//             SmartContractAddress
//           );
//           console.log(myContract);
//           totalNFTsMinted();
//         } else {
//           alert("Metamask Not detected");
//         }
//       });


// end
// My smart contract code
// var web3;

// var agentContractAddress = "0xe9ea42d7A7EA923fFDcdA4A704f2DB2396B8D88e";

// var abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "addr",
// 				"type": "address"
// 			}
// 		],
// 		"name": "get_patient",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]


// function connect(){
//   web3 = new Web3(window.ethereum)
//   window.ethereum.enable().catch(error => {
//       // User denied account access
//       console.log(error);
//   })
//   AgentContract = web3.eth.contract(abi);
//   contractInstance = AgentContract.at(agentContractAddress);   
//   web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
//   console.log("Web3 Connected:"+ web3.eth.defaultAccount );
//   return web3.currentProvider.selectedAddress;
// }
  
// window.addEventListener('load', async () => {
//   // New web3 provider
//   connect();
//   console.log("Externally Loaded!");
// });
/// end of web3
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
