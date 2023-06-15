/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface PasskeyManagerInterface extends utils.Interface {
  functions: {
    "AddedHashedEncodedIds(uint256)": FunctionFragment;
    "addPasskey(string,uint256,uint256)": FunctionFragment;
    "removePasskey(string)": FunctionFragment;
    "toHex(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AddedHashedEncodedIds"
      | "addPasskey"
      | "removePasskey"
      | "toHex"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AddedHashedEncodedIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addPasskey",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removePasskey",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "toHex", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "AddedHashedEncodedIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPasskey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePasskey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toHex", data: BytesLike): Result;

  events: {
    "PasskeyAdded(string,uint256,uint256)": EventFragment;
    "PasskeyRemoved(string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PasskeyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PasskeyRemoved"): EventFragment;
}

export interface PasskeyAddedEventObject {
  encodedId: string;
  publicKeyX: BigNumber;
  publicKeyY: BigNumber;
}
export type PasskeyAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  PasskeyAddedEventObject
>;

export type PasskeyAddedEventFilter = TypedEventFilter<PasskeyAddedEvent>;

export interface PasskeyRemovedEventObject {
  encodedId: string;
  publicKeyX: BigNumber;
  publicKeyY: BigNumber;
}
export type PasskeyRemovedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  PasskeyRemovedEventObject
>;

export type PasskeyRemovedEventFilter = TypedEventFilter<PasskeyRemovedEvent>;

export interface PasskeyManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PasskeyManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AddedHashedEncodedIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addPasskey(
      _encodedId: string,
      _publicKeyX: BigNumberish,
      _publicKeyY: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removePasskey(
      _encodedId: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    toHex(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  AddedHashedEncodedIds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  addPasskey(
    _encodedId: string,
    _publicKeyX: BigNumberish,
    _publicKeyY: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removePasskey(
    _encodedId: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  toHex(data: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    AddedHashedEncodedIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    addPasskey(
      _encodedId: string,
      _publicKeyX: BigNumberish,
      _publicKeyY: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removePasskey(_encodedId: string, overrides?: CallOverrides): Promise<void>;

    toHex(data: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "PasskeyAdded(string,uint256,uint256)"(
      encodedId?: null,
      publicKeyX?: null,
      publicKeyY?: null
    ): PasskeyAddedEventFilter;
    PasskeyAdded(
      encodedId?: null,
      publicKeyX?: null,
      publicKeyY?: null
    ): PasskeyAddedEventFilter;

    "PasskeyRemoved(string,uint256,uint256)"(
      encodedId?: null,
      publicKeyX?: null,
      publicKeyY?: null
    ): PasskeyRemovedEventFilter;
    PasskeyRemoved(
      encodedId?: null,
      publicKeyX?: null,
      publicKeyY?: null
    ): PasskeyRemovedEventFilter;
  };

  estimateGas: {
    AddedHashedEncodedIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addPasskey(
      _encodedId: string,
      _publicKeyX: BigNumberish,
      _publicKeyY: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removePasskey(
      _encodedId: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    toHex(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AddedHashedEncodedIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addPasskey(
      _encodedId: string,
      _publicKeyX: BigNumberish,
      _publicKeyY: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removePasskey(
      _encodedId: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    toHex(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
