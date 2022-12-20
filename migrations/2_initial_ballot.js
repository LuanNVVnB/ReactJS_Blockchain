const Ballots = artifacts.require("Ballots");

module.exports = function (deployer) {
  deployer.deploy(Ballots);
};
