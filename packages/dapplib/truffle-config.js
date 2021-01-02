require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note sad mixed install entire olympic song'; 
let testAccounts = [
"0x7e1e17a9ebec7e8738223559b6cce7162046f3bf1961683496927f937bdfc013",
"0x8f2238f0de9116a61ac31e3103fed4e4adce983c4380ec195a64400c5593e687",
"0x223befd9c95444c42205b781f3d6065bb173954113c4892c50cc4b0357c34c01",
"0x69e55bb26d9c13bb9732a2ec3a31fc79ddbadf3d929ddbc83f20cfad0ae74bbe",
"0x4372f5cd15fe4ca9ca05b14979e1b3022e2fb577144ecf8a764df83358cbf982",
"0xd91acb3d50400e6463bd3c3429b9b41e1480eb8386eeafc70f7977f75ca81438",
"0x051292be1d3d66e626dd11cfe50bc04f5a476aade925914e9538c1e02405655e",
"0xde34ef35d00ea96a5c46a4bc8cb0b018dd074fec8a11efa55f0d1d077281ff81",
"0xc0e689e0c85740041e44cb31bacfc5a90c6657c137b8b8029482a084635c1d75",
"0x1405f9e8145fa4bfec35f0df848e44f776bf8258e150da578a5a5cf071d8bdd0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
