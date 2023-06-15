/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Secp256r1, Secp256r1Interface } from "../Secp256r1";

const _abi = [
  {
    inputs: [],
    name: "nn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60d6610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806372a4c30f14604257806391327ec614607a575b600080fd5b60687fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255181565b60405190815260200160405180910390f35b60687fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8156fea26469706673582212204ea99fffde2d45bda4fea30e265653a3d7a1d3f156a388947d8b9c6b2a37072464736f6c634300080c0033";

type Secp256r1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Secp256r1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Secp256r1__factory extends ContractFactory {
  constructor(...args: Secp256r1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Secp256r1> {
    return super.deploy(overrides || {}) as Promise<Secp256r1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Secp256r1 {
    return super.attach(address) as Secp256r1;
  }
  override connect(signer: Signer): Secp256r1__factory {
    return super.connect(signer) as Secp256r1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Secp256r1Interface {
    return new utils.Interface(_abi) as Secp256r1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Secp256r1 {
    return new Contract(address, _abi, signerOrProvider) as Secp256r1;
  }
}