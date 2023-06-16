import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface PasskeyManagerInterface extends utils.Interface {
    functions: {
        "KnownEncodedIdHashes(uint256)": FunctionFragment;
        "addDeposit()": FunctionFragment;
        "addPasskey(string,uint256,uint256)": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "execute(address,uint256,bytes)": FunctionFragment;
        "executeBatch(address[],bytes[])": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "getNonce()": FunctionFragment;
        "initialize(string,uint256,uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "removePasskey(string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "toHex(bytes32)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "withdrawDepositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "KnownEncodedIdHashes" | "addDeposit" | "addPasskey" | "entryPoint" | "execute" | "executeBatch" | "getDeposit" | "getNonce" | "initialize(string,uint256,uint256)" | "initialize(address)" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "owner" | "proxiableUUID" | "removePasskey" | "supportsInterface" | "toHex" | "tokensReceived" | "upgradeTo" | "upgradeToAndCall" | "validateUserOp" | "withdrawDepositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "KnownEncodedIdHashes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "addDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPasskey", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize(string,uint256,uint256)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "removePasskey", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toHex", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [string, string, string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawDepositTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "KnownEncodedIdHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPasskey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(string,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePasskey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toHex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDepositTo", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "PasskeyAdded(string,uint256,uint256)": EventFragment;
        "PasskeyRemoved(string,uint256,uint256)": EventFragment;
        "SimpleAccountInitialized(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PasskeyAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PasskeyRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SimpleAccountInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
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
export interface SimpleAccountInitializedEventObject {
    entryPoint: string;
    owner: string;
}
export type SimpleAccountInitializedEvent = TypedEvent<[
    string,
    string
], SimpleAccountInitializedEventObject>;
export type SimpleAccountInitializedEventFilter = TypedEventFilter<SimpleAccountInitializedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface PasskeyManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PasskeyManagerInterface;
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
        KnownEncodedIdHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addPasskey(_encodedId: string, _publicKeyX: BigNumberish, _publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeBatch(dest: string[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        "initialize(string,uint256,uint256)"(_encodedId: string, _pubKeyX: BigNumberish, _pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "initialize(address)"(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        toHex(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    KnownEncodedIdHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    addDeposit(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addPasskey(_encodedId: string, _publicKeyX: BigNumberish, _publicKeyY: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeBatch(dest: string[], func: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    "initialize(string,uint256,uint256)"(_encodedId: string, _pubKeyX: BigNumberish, _pubKeyY: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "initialize(address)"(anOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    removePasskey(_encodedId: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    toHex(data: BytesLike, overrides?: CallOverrides): Promise<string>;
    tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<void>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        KnownEncodedIdHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        addDeposit(overrides?: CallOverrides): Promise<void>;
        addPasskey(_encodedId: string, _publicKeyX: BigNumberish, _publicKeyY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(dest: string[], func: BytesLike[], overrides?: CallOverrides): Promise<void>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize(string,uint256,uint256)"(_encodedId: string, _pubKeyX: BigNumberish, _pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "initialize(address)"(anOwner: string, overrides?: CallOverrides): Promise<void>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        removePasskey(_encodedId: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        toHex(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "PasskeyAdded(string,uint256,uint256)"(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyAddedEventFilter;
        PasskeyAdded(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyAddedEventFilter;
        "PasskeyRemoved(string,uint256,uint256)"(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyRemovedEventFilter;
        PasskeyRemoved(encodedId?: null, publicKeyX?: null, publicKeyY?: null): PasskeyRemovedEventFilter;
        "SimpleAccountInitialized(address,address)"(entryPoint?: string | null, owner?: string | null): SimpleAccountInitializedEventFilter;
        SimpleAccountInitialized(entryPoint?: string | null, owner?: string | null): SimpleAccountInitializedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        KnownEncodedIdHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        addPasskey(_encodedId: string, _publicKeyX: BigNumberish, _publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeBatch(dest: string[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        "initialize(string,uint256,uint256)"(_encodedId: string, _pubKeyX: BigNumberish, _pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "initialize(address)"(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        toHex(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        KnownEncodedIdHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addPasskey(_encodedId: string, _publicKeyX: BigNumberish, _publicKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeBatch(dest: string[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "initialize(string,uint256,uint256)"(_encodedId: string, _pubKeyX: BigNumberish, _pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "initialize(address)"(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePasskey(_encodedId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toHex(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}