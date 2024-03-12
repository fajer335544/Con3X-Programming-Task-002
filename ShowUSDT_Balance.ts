var{ Web3} = require("web3");
exports.ShowUSDT_Balance=async(addressToCheck)=>{
//async function ShowUSDT_Balance (){
var infuraProjectId = '7914ee22554e4ecfad2ebae308652de9'; 
var usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'; 
var providerUrl = `https://mainnet.infura.io/v3/${infuraProjectId}`;

//var addressToCheck = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; 

 
    try {
        var web3 = new Web3(providerUrl);
        var usdtContract = new web3.eth.Contract([
            {
                "constant": true,
                "inputs": [{"name": "_owner", "type": "address"}],
                "name": "balanceOf",
                "outputs": [{"name": "balance", "type": "uint256"}],
                "type": "function"
            }
        ], usdtContractAddress);

       // I used Await here because we can't get the response from web3 in test case(ethereumFunctions.test.ts) without Asyncronus mode
        var balance = await usdtContract.methods.balanceOf(addressToCheck).call();
        // i used return value to call this function in test case(ethereumFunctions.test.ts) 
          return balance.toString();
          //the console.log is also run in this function correctly , but it not if we call this function  in test case(ethereumFunctions.test.ts)
       // console.log(`usdt balance of address ${addressToCheck} = ${balance}`);
    } catch (error) {
        console.error('error getting usdt balance:', error);
    }
}


