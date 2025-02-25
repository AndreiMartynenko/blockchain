const txid = '83c9345fc2fb477ad5e656b264f3e8354d1a1a9f8d5c45670dc662c6a32cc8da';

// Export the txid variable
exports.txid = txid;

/*

// ✅ Installed Bitcoin Core and ran it in regtest mode.
✅ Created a wallet and generated addresses for sending and receiving Bitcoin.
✅ Mined 101 blocks to unlock Bitcoin rewards.
✅ Sent 2 BTC from one address to another.
✅ Captured the transaction ID (txid) of your Bitcoin transaction.
✅ Stored the txid in a JavaScript file (send-transaction.js) for future use.



2. Step-by-Step Guide
Step 1: Install Bitcoin Core
Bitcoin Core is the official Bitcoin node software. You can install it manually using:

sh
Copy
Edit
export bitcoinCoreVersion="24.0.1"
wget -q "https://bitcoincore.org/bin/bitcoin-core-$bitcoinCoreVersion/bitcoin-$bitcoinCoreVersion-x86_64-linux-gnu.tar.gz"
tar xzf "bitcoin-$bitcoinCoreVersion-x86_64-linux-gnu.tar.gz"
sudo mv bitcoin-$bitcoinCoreVersion/bin/* /usr/local/bin
rm -rf bitcoin-$bitcoinCoreVersion/
rm "bitcoin-$bitcoinCoreVersion-x86_64-linux-gnu.tar.gz"
Step 2: Start Bitcoin Daemon in Regtest Mode
Regtest (Regression Test Mode) is a local test network that allows you to mine and spend BTC instantly.

sh
Copy
Edit
bitcoind -chain=regtest -daemon -fallbackfee=0.00000003
✅ -chain=regtest: Runs Bitcoin Core in a private test environment.
✅ -daemon: Runs Bitcoin in the background.
✅ -fallbackfee=0.00000003: Sets a low default transaction fee.

Step 3: Create a Wallet and Generate Addresses
Create a wallet
sh
Copy
Edit
bitcoin-cli -regtest createwallet "testwallet"
This creates a new wallet called testwallet.

Generate Two New Addresses
You need two Bitcoin addresses to send funds between them.

sh
Copy
Edit
bitcoin-cli -regtest getnewaddress
Run this command twice and save both addresses:

First address → for mining rewards
Second address → to receive the 2 BTC transaction
Example output:

css
Copy
Edit
bcrt1qxyz123... (First address)
bcrt1qabcd456... (Second address)
Step 4: Mine 101 Blocks to Get BTC
To generate Bitcoin, mine 101 blocks using the first address:

sh
Copy
Edit
bitcoin-cli -regtest generatetoaddress 101 <your first address>
✅ Why 101 blocks?

Bitcoin rewards are locked for 100 blocks before they can be spent.
This ensures your funds are spendable.
Check your balance:

sh
Copy
Edit
bitcoin-cli -regtest getbalance
Step 5: Send 2 BTC to the Second Address
Now, send 2 BTC from your first address to your second address:

sh
Copy
Edit
bitcoin-cli -regtest sendtoaddress <your second address> 2
This will return a transaction ID (txid), which is the unique hash of your transaction.

✅ Save this transaction ID!

Step 6: Verify the Transaction
List all transactions to confirm the 2 BTC transfer:

sh
Copy
Edit
bitcoin-cli -regtest listtransactions
You should see an entry showing that 2 BTC were sent.

Step 7: Create send-transaction.js
Now, create a JavaScript file to export your transaction ID.

sh
Copy
Edit
touch send-transaction.js
Edit send-transaction.js and store the txid:

javascript
Copy
Edit
exports.txid = "your_transaction_id_here";
✅ Make sure your_transaction_id_here is replaced with the actual transaction hash.

*/

