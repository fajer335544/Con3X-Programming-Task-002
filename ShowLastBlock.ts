var { Web3 } = require("web3");
exports.ShowLastBlock= async()=>{
var provider = "https://mainnet.infura.io/v3/7914ee22554e4ecfad2ebae308652de9";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
var data;
// I used Await here because we can't get the response from web3 in test case(ethereumFunctions.test.ts) without Asyncronus mode
await web3.eth.getBlockNumber().then((result) => {
  data=result

});
return data

}

