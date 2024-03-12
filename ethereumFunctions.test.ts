
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
    
      const balance = await ShowUSDT_Balance();
      expect(balance).toBeDefined(); 
   
    });
  });
});
