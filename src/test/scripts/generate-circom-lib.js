const fs = require("fs");
const { poseidon_gencontract } = require("circomlibjs");

function main() {
	const poseidonT3Bytecode = poseidon_gencontract.createCode(2);
	const poseidonT3Abi = poseidon_gencontract.generateABI(2);

	fs.writeFileSync(
		"./out/Hashes.sol/PoseidonT3.json",
		JSON.stringify({
			abi: poseidonT3Abi,
			bytecode: {
				object: poseidonT3Bytecode,
				sourceMap: "",
				linkReferences: {},
			},
			deployedBytecode: {
				object: poseidonT3Bytecode,
				sourceMap: "",
				linkReferences: {},
			},
		})
	);

	console.log("Updated.");
}

main();
