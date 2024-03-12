var {ShowLastBlock}= require( './ShowLastBlock')
var {ShowUSDT_Balance}= require( './ShowUSDT_Balance')
//console.log("the Last Block is : "+ShowLastBlock())

async function run(){
  var addressToCheck = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; 
var result1 = await ShowLastBlock()
var result2 = await ShowUSDT_Balance(addressToCheck)
console.log("Latest Ethereum Block is"+result1)
console.log(`usdt balance of this address ${addressToCheck} is :  :+ ${result2}`)
}
run()




