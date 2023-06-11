# Passkey Signer Smart Contract Library

The following library is a collection of smart contracts that can be used to verify signatures of secp256R1 curves. 

## Usage

The library is used specifically by our "Passkey Signer", which helps Account Abstraction based Smart Contract Wallets and SDKs to verify secp256R1 signatures. These signatures are generated by the Passkeys, which are cryptographically generated keys which are kept inside the device hardware.

```
import "@rize-labs/passkey-verifier-contracts/contracts/PasskeyVerifierContract.sol";

contract YourSmartContractWallet{

    

    function validateUserOp(
        UserOperation calldata userOp,
        bytes32 ,
        .
        .
    ) external virtual override returns (uint256 validationData) {
        .
        .
        .
        validationData = PasskeyVerifierContract.validateUserOp(userOp.signature, publicKey, userOp.requestId);

    }
}


```