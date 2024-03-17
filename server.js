const express = require('express');
const { Web3 } = require('web3');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
// Define the ShowLastBlock function
/*const showLastBlock = async () => {
  const provider = 'https://mainnet.infura.io/v3/7914ee22554e4ecfad2ebae308652de9';
  const web3Provider = new Web3.providers.HttpProvider(provider);
  const web3 = new Web3(web3Provider);
  let data;

  await web3.eth.getBlockNumber().then((result) => {
    data = result;
  });

  return data;
};
*/
var {ShowLastBlock}= require( './ShowLastBlock')
// Define the route to get the last block
app.get('/ShowLastBlock', async (req, res) => {
  const result = await ShowLastBlock();
  res.send(result.toString());
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});