const Client = require('bitcoin-core');

const client = new Client({
  network: 'testnet', // Change 'regtest' to 'testnet'
  host: 'localhost',
  port: 18443,
  username: 'leeloo',
  password: 'multipass'
});

async function retrieveBlockDate(blockHeight) {
  try {
    // Get block hash from height
    const blockHash = await client.command('getblockhash', blockHeight);
    
    // Get block data using block hash
    const block = await client.command('getblock', blockHash);
    
    // Return block time (Unix timestamp)
    return block.time;
  } catch (error) {
    console.error('Error retrieving block date:', error);
    throw error;
  }
}

// Export the function
module.exports = retrieveBlockDate;

// Example usage
retrieveBlockDate(1881467).then(console.log).catch(console.error);
