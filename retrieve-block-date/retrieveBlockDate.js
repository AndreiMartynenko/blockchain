const Client = require('bitcoin-core');

const client = new Client({
  network: 'testnet', // Connect to Testnet
  host: 'localhost',
  port: 18443,
  username: 'leeloo',
  password: 'multipass'
});

/**
 * Retrieve the timestamp of a block using its height.
 * @param {number} blockHeight - The height of the block.
 * @returns {Promise<number>} - The timestamp of the block.
 */
async function retrieveBlockDate(blockHeight) {
  try {
    // 1️⃣ Get block hash from height
    const blockHash = await client.command('getblockhash', blockHeight);

    // 2️⃣ Get block details using block hash
    const block = await client.command('getblock', blockHash);

    // 3️⃣ Return the block time (Unix timestamp)
    return block.time;
  } catch (error) {
    console.error("Error retrieving block date:", error);
    throw error;
  }
}

// Export the function for use in other files
module.exports = retrieveBlockDate;

// Example usage
retrieveBlockDate(1881467).then(console.log).catch(console.error);
