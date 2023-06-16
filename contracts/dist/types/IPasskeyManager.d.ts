import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPasskeyManagerInterface extends utils.Interface {
    functions: {
        "addPasskey(string,uint256,uint256)": FunctionFragment;
        "removePasskey(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPasskey" | "removePasskey"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPasskey", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removePasskey", values: [string]): string;
    decodeFunctionResult(functionFragment: "addPasskey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePasskey", data: BytesLike): Result;
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
export type PasskeyAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PasskeyAddedEventObject>;
export type PasskeyAddedEventFilter = TypedEventFilter<PasskeyAddedEvent>;
export interface PasskeyRemovedEventObject {
    encodedId: string;
    publicKeyX: BigNumber;
    publicKeyY: BigNumber;
}
export type PasskeyRemovedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PasskeyRemovedEventObject>;
export type PasskeyRemovedEventFilter = TypedEventFilter<PasskeyRemovedEvent>;
export interface IPasskeyManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPasskeyManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addPasskey(_encodedId: string, publicKeyX: BigNumberish, publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addPasskey(_encodedId: string, publicKeyX: BigNumberish, publicKeyY: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removePasskey(_encodedId: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPasskey(_encodedId: string, publicKeyX: BigNumberish, publicKeyY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removePasskey(_encodedId: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PasskeyAdded(string,uint256,uint256)"(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyAddedEventFilter;
        PasskeyAdded(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyAddedEventFilter;
        "PasskeyRemoved(string,uint256,uint256)"(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyRemovedEventFilter;
        PasskeyRemoved(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyRemovedEventFilter;
    };
    estimateGas: {
        addPasskey(_encodedId: string, publicKeyX: BigNumberish, publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPasskey(_encodedId: string, publicKeyX: BigNumberish, publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
