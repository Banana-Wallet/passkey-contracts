import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PassKeyManagerFactoryInterface extends utils.Interface {
    functions: {
        "accountImplementation()": FunctionFragment;
        "createAccount(uint256,string,uint256,uint256)": FunctionFragment;
        "getAddress(uint256,string,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accountImplementation" | "createAccount" | "getAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAccount", values: [BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BigNumberish, string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    events: {};
}
export interface PassKeyManagerFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PassKeyManagerFactoryInterface;
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
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        createAccount(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAddress(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    createAccount(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAddress(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        createAccount(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getAddress(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        createAccount(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAddress(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAccount(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAddress(salt: BigNumberish, encodedId: string, pubKeyX: BigNumberish, pubKeyY: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
