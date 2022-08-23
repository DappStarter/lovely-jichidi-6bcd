require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name release pitch home harvest cash equal ghost'; 
let testAccounts = [
"0xa47922fe1a1662de3a6107c6c9d5eb841f8621358f19789a01f95040c82352a3",
"0x07834d21e0fe03597b23172fbd8b6b204862476e68912d5805a0c2cb64c7de31",
"0x6e02beb848c6d1b9674740bb885638dddc7bbd42f79b3ff12069b7f6b91cf8bd",
"0x30ab02f2457e000e8981fe899bbcd57c9269c51a21f6d741cfde13736b3e63cd",
"0x67e1bc199f845af4d4bd709a6d150363326347a1d20acd1de7a171c3ed1e1169",
"0x54ac9f4c673718fa85461309ca407dea77299be92b467ab8029e9d5541fd93e6",
"0x0744ee8cc87b9e2125a4a5ae4ef19edb7711fbaa155078361c17f61a5985bd08",
"0x058f53146eed6ac57f6d4b3bedf7b24b8421ec932742c11a585aeabafc98bf19",
"0xb8f99fb4ceca91b025064e03b1caeb12a2add7694d7e153c24996acd16a5c891",
"0xbe22f668a61d302d7bd68d07b206785180e0793c39aacc2ff11572b1b468c135"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


