<<<<<<< HEAD

var {ShowLastBlock}= require( './ShowLastBlock')
var {ShowUSDT_Balance}= require( './ShowUSDT_Balance')
describe('Ethereum Functions', () => {
  describe('ShowLastBlock', () => {
    it('it should return the last block number in Ethereum ', async () => {
      const lastBlock = await ShowLastBlock();
      expect(lastBlock).toBeDefined(); 

    });
  });

  describe('ShowUSDT_Balance', () => {
    it('it should return the USDT balance of a provided address ( inside the function we called )', async () => {
      var addressToCheck = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; 
      const balance = await ShowUSDT_Balance(addressToCheck);
      expect(balance).toBeDefined(); 
   
    });
  });
});
=======

var {ShowLastBlock}= require( './ShowLastBlock')
var {ShowUSDT_Balance}= require( './ShowUSDT_Balance')
describe('Ethereum Functions', () => {
  describe('ShowLastBlock', () => {
    it('it should return the last block number in Ethereum ', async () => {
      const lastBlock = await ShowLastBlock();
      expect(lastBlock).toBeDefined(); 

    });
  });

  describe('ShowUSDT_Balance', () => {
    it('it should return the USDT balance of a provided address ( inside the function we called )', async () => {
      var addressToCheck = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; 
      const balance = await ShowUSDT_Balance(addressToCheck);
      expect(balance).toBeDefined(); 
   
    });
  });
});
>>>>>>> cca5b07c6040c219083f590cb8395430cf6080a1
