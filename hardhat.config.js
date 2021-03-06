require("@nomicfoundation/hardhat-toolbox");

const privateKey =
    "fb810f4d6c526159ebb447c7c4aa2eeadf3b291c5e203f52225928a1dec09d4b";

module.exports = {
    defaultNetwork: "hardhat",
    paths: {
        artifacts: "./src/artifacts",
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        bscTestnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            accounts: [privateKey],
        },
        polygon: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/1IISvtbO2J8Uz_s2akC4cdk9qm6rnrY0",
            accounts: [privateKey],
        },
        rinkeby: {
            url: "https://eth-rinkeby.alchemyapi.io/v2/kAPtSA_EMLRedffB6D1Ehre3rQQ2pmn2",
            accounts: [privateKey],
        },
        goerli: {
            url: "https://eth-goerli.alchemyapi.io/v2/sNcf8L4HbcXGz_93jNm2TvvhqZ0b6kRp",
            accounts: [privateKey],
        },
    },
    solidity: "0.8.4",
};
