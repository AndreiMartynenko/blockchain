const Client = require('bitcoin-core');

// 🔹 Configure the Bitcoin Core RPC Client
const client = new Client({
  network: 'testnet',  // Ensure we are using Testnet
  host: 'localhost',
  port: 18443,         // Testnet RPC port
  username: 'leeloo',  // Your Bitcoin Core username
  password: 'multipass'  // Your Bitcoin Core password
});

/**
 * Retrieve the total value transferred in a transaction.
 * @param {string} txid - The transaction ID (hash).
 * @returns {Promise<number>} - The total transaction value in BTC.
 */
async function retrieveTransactionValue(txid) {
  try {
    // 🔹 Get the full transaction details
    const transaction = await client.command('getrawtransaction', txid, true);

    // 🔹 Extract outputs and sum their values
    const totalValue = transaction.vout.reduce((sum, output) => sum + output.value, 0);

    return totalValue; // Return the total BTC value
  } catch (error) {
    console.error("Error retrieving transaction value:", error);
    throw error;
  }
}

// 🔹 Export the function
module.exports = { retrieveTransactionValue };

// 🔹 Example Usage
retrieveTransactionValue('d030023d96b9170af9ec2fe5d9b62a5eacbcbf144c68f3f45d68bca72d1d3649')
  .then(console.log)
  .catch(console.error);
