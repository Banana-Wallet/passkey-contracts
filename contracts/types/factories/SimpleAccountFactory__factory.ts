/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../SimpleAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_encodedId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_publicKeyX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_publicKeyY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_encodedId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_publicKeyX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_publicKeyY",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "gettAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161338a38038061338a83398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b6126a180610ce983390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610c0a6100df60003960008181604b0152818160eb01526101f20152610c0a6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780631d05a4e6146100965780632a1d36c4146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a43660046102f4565b6100bc565b61006d6100b73660046102f4565b6101b4565b60006101a88260001b604051806020016100d5906102e7565b6020820181038252601f19601f820116604052507f000000000000000000000000000000000000000000000000000000000000000089898989604051602401610121949392919061037c565b60408051601f19818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663025df42360e61b179052905161016f939291016103ec565b60408051601f198184030181529082905261018d929160200161043c565b604051602081830303815290604052805190602001206102a9565b90505b95945050505050565b6000806101c487878787876100bc565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156101ec575090506101ab565b8360001b7f000000000000000000000000000000000000000000000000000000000000000089898989604051602401610228949392919061037c565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663025df42360e61b17905251610271906102e7565b61027c9291906103ec565b8190604051809103906000f590508015801561029c573d6000803e3d6000fd5b5098975050505050505050565b60006102b68383306102bd565b9392505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107698061046c83390190565b60008060008060006080868803121561030c57600080fd5b853567ffffffffffffffff8082111561032457600080fd5b818801915088601f83011261033857600080fd5b81358181111561034757600080fd5b89602082850101111561035957600080fd5b60209283019a909950918801359760408101359750606001359550909350505050565b606081528360608201528385608083013760006080858301015260006080601f19601f870116830101905083602083015282604083015295945050505050565b60005b838110156103d75781810151838201526020016103bf565b838111156103e6576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104278160608501602087016103bc565b601f01601f1916919091016060019392505050565b6000835161044e8184602088016103bc565b8351908301906104628183602088016103bc565b0194935050505056fe60806040526040516107693803806107698339810160408190526100229161031e565b61002e82826000610035565b505061043b565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610742602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ec565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a0578251610299576001600160a01b0385163b6102995760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102aa565b6102aa83836102b2565b949350505050565b8151156102c25781518083602001fd5b8060405162461bcd60e51b81526004016101489190610408565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561030d5781810151838201526020016102f5565b838111156100645750506000910152565b6000806040838503121561033157600080fd5b82516001600160a01b038116811461034857600080fd5b60208401519092506001600160401b038082111561036557600080fd5b818501915085601f83011261037957600080fd5b81518181111561038b5761038b6102dc565b604051601f8201601f19908116603f011681019083821181831017156103b3576103b36102dc565b816040528281528860208487010111156103cc57600080fd5b6103dd8360208301602088016102f2565b80955050505050509250929050565b600082516103fe8184602087016102f2565b9190910192915050565b60208152600082518060208401526104278160408501602087016102f2565b601f01601f19169190910160400192915050565b6102f88061044a6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e838360405180606001604052806027815260200161029c602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051610107919061024c565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101e05782516101d95773ffffffffffffffffffffffffffffffffffffffff85163b6101d95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101ea565b6101ea83836101f2565b949350505050565b8151156102025781518083602001fd5b8060405162461bcd60e51b81526004016101d09190610268565b60005b8381101561023757818101518382015260200161021f565b83811115610246576000848401525b50505050565b6000825161025e81846020870161021c565b9190910192915050565b602081526000825180602084015261028781604085016020870161021c565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212209fd27e992350476650049e4ce1e666b3d389f9121584e5cdffd3f7c54ca2fdf464736f6c634300080c0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122054f860298b1bde29b588b86090abf3d65e871611f37a04cd4ae3125bfda4d26164736f6c634300080c003360c0604052306080523480156200001557600080fd5b50604051620026a1380380620026a1833981016040819052620000389162000117565b6001600160a01b03811660a0526200004f62000056565b5062000149565b600254610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60025460ff9081161462000115576002805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012a57600080fd5b81516001600160a01b03811681146200014257600080fd5b9392505050565b60805160a0516124e5620001bc600039600081816103bd0152818161088a0152818161092401528181610db101528181610e62015281816111aa0152818161145c015261177601526000818161069301528181610718015281816109cf01528181610a540152610b3e01526124e56000f3fe6080604052600436106101785760003560e01c806352d1902d116100cb578063b61d27f61161007f578063d087d28811610059578063d087d2881461045e578063f23a6e6114610473578063fbc79d09146104b957600080fd5b8063b61d27f6146103e1578063bc197c8114610401578063c399ec881461044957600080fd5b8063977d08c0116100b0578063977d08c01461036e578063981b69b31461038e578063b0d691fe146103ae57600080fd5b806352d1902d1461031b5780638da5cb5b1461033057600080fd5b80633659cfe61161012d5780634a58db19116101075780634a58db19146102e05780634d44560d146102e85780634f1ef2861461030857600080fd5b80633659cfe6146102735780633a871cdd1461029357806349e894d8146102b357600080fd5b8063150b7a021161015e578063150b7a02146101e057806318dfb3c7146102255780632a9e679b1461024557600080fd5b806223de291461018457806301ffc9a7146101ab57600080fd5b3661017f57005b600080fd5b34801561019057600080fd5b506101a961019f366004611ceb565b5050505050505050565b005b3480156101b757600080fd5b506101cb6101c6366004611d9c565b6104d9565b60405190151581526020015b60405180910390f35b3480156101ec57600080fd5b5061020c6101fb366004611dc6565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016101d7565b34801561023157600080fd5b506101a9610240366004611e7e565b61055d565b34801561025157600080fd5b50610265610260366004611eea565b610667565b6040519081526020016101d7565b34801561027f57600080fd5b506101a961028e366004611f03565b610688565b34801561029f57600080fd5b506102656102ae366004611f20565b610804565b3480156102bf57600080fd5b506102d36102ce366004611eea565b610821565b6040516101d79190611fa0565b6101a9610888565b3480156102f457600080fd5b506101a9610303366004611fd3565b61091a565b6101a9610316366004612015565b6109c4565b34801561032757600080fd5b50610265610b31565b34801561033c57600080fd5b50600254610356906201000090046001600160a01b031681565b6040516001600160a01b0390911681526020016101d7565b34801561037a57600080fd5b506101a96103893660046120d9565b610bf6565b34801561039a57600080fd5b506101a96103a93660046120d9565b610d1d565b3480156103ba57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610356565b3480156103ed57600080fd5b506101a96103fc36600461212a565b610d2f565b34801561040d57600080fd5b5061020c61041c36600461217a565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561045557600080fd5b50610265610d78565b34801561046a57600080fd5b50610265610e22565b34801561047f57600080fd5b5061020c61048e366004612218565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b3480156104c557600080fd5b506101a96104d4366004612294565b610e91565b60006001600160e01b03198216630a85bd0160e11b148061052357506001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061055757506001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b61056561119f565b8281146105b95760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156106605761064e8585838181106105d9576105d96122d6565b90506020020160208101906105ee9190611f03565b6000858585818110610602576106026122d6565b905060200281019061061491906122ec565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061123492505050565b8061065881612349565b9150506105bc565b5050505050565b6001818154811061067757600080fd5b600091825260209091200154905081565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107165760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016105b0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107717f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146107dc5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016105b0565b6107e5816112a4565b60408051600080825260208201909252610801918391906112ac565b50565b600061080e611451565b50600061081a826114c9565b9392505050565b606061082c82611516565b610839608084901b611516565b6040517f30780000000000000000000000000000000000000000000000000000000000006020820152602281019290925260428201526062016040516020818303038152906040529050919050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b15801561090657600080fd5b505af1158015610660573d6000803e3d6000fd5b6109226116e6565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156109a857600080fd5b505af11580156109bc573d6000803e3d6000fd5b505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610a525760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016105b0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610aad7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610b185760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016105b0565b610b21826112a4565b610b2d828260016112ac565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bd15760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016105b0565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b600254610100900460ff1615808015610c165750600254600160ff909116105b80610c305750303b158015610c30575060025460ff166001145b610ca25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016105b0565b6002805460ff191660011790558015610cc5576002805461ff0019166101001790555b610cd185858585611750565b8015610660576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b610d29848484846117c3565b50505050565b610d3761119f565b610d29848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061123492505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d9190612364565b905090565b6040517f35567e1a000000000000000000000000000000000000000000000000000000008152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610ddc565b333014610ee05760405162461bcd60e51b815260206004820152601960248201527f504d30312063616c6c6572206973206e6f742057616c6c65740000000000000060448201526064016105b0565b6001805411610f315760405162461bcd60e51b815260206004820152601b60248201527f504d30332063616e6e6f742072656d6f7665206c617374206b6579000000000060448201526064016105b0565b60008282604051602001610f4692919061237d565b60408051601f198184030181528282528051602091820120600081815280835283812060608601855280548652600181015493860193909352600283018054929650909493840191610f979061238d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc39061238d565b80156110105780601f10610fe557610100808354040283529160200191611010565b820191906000526020600020905b815481529060010190602001808311610ff357829003601f168201915b505050919092525050815191925050158015906110305750602081015115155b61107e5760405162461bcd60e51b81526004016105b09060208082526004908201527f504d303500000000000000000000000000000000000000000000000000000000604082015260600190565b600082815260208190526040812081815560018101829055906110a46002830182611bba565b505060005b6001548110156111555782600182815481106110c7576110c76122d6565b9060005260206000200154141561114d57600180546110e79082906123c8565b815481106110f7576110f76122d6565b906000526020600020015460018281548110611115576111156122d6565b6000918252602090912001556001805480611132576111326123df565b60019003818190600052602060002001600090559055611155565b6001016110a9565b50805160208201516040517fe21423841bbca413b89d7851e2dd81a44bfea36e6689ea217958e06ef8288af592611191928892889291906123f5565b60405180910390a150505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806111e657506002546201000090046001600160a01b031633145b6112325760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016105b0565b565b600080846001600160a01b031684846040516112509190612435565b60006040518083038185875af1925050503d806000811461128d576040519150601f19603f3d011682016040523d82523d6000602084013e611292565b606091505b50915091508161066057805160208201fd5b6108016116e6565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156112e4576112df8361193f565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561133e575060408051601f3d908101601f1916820190925261133b91810190612364565b60015b6113b05760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016105b0565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146114455760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016105b0565b506112df838383611a15565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146112325760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016105b0565b801561080157604051600090339060001990849084818181858888f193505050503d8060008114610660576040519150601f19603f3d011682016040523d82523d6000602084013e610660565b7aff00000000000000ff00000000000000ff00000000000000ff00006bffffffff0000000000000000604083901c9081167bffffffff00000000000000000000000000000000000000000000000084161760201c6fffffffff000000000000000000000000919091166001600160e01b031984161717601081901c9182167eff00000000000000ff00000000000000ff00000000000000ff000000000000821617600890811c7bff00000000000000ff00000000000000ff00000000000000ff000000939093167fff00000000000000ff00000000000000ff00000000000000ff000000000000009290921691909117919091179081901c7e0f000f000f000f000f000f000f000f000f000f000f000f000f000f000f000f167f0f000f000f000f000f000f000f000f000f000f000f000f000f000f000f000f00600492831c161790611682827f0606060606060606060606060606060606060606060606060606060606060606612451565b901c7f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f1660076116b29190612469565b6116dc827f3030303030303030303030303030303030303030303030303030303030303030612451565b6105579190612451565b6002546201000090046001600160a01b031633148061170457503330145b6112325760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016105b0565b61175c84848484610d1d565b6002546040516001600160a01b03620100009092048216917f000000000000000000000000000000000000000000000000000000000000000016907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350505050565b600084846040516020016117d892919061237d565b60408051601f19818403018152918152815160209283012060008181529283905291205490915015801561181b5750600081815260208190526040902060010154155b6118695760405162461bcd60e51b81526004016105b09060208082526004908201527f504d303400000000000000000000000000000000000000000000000000000000604082015260600190565b6000604051806060016040528085815260200184815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093909452505084815260208181526040918290208451815581850151600182015591840151805194955085949293506118f69260028501929190910190611bf4565b509050507f9d497b4ea3f21a6a726508afee07fb039fecd01368e75ef2f607eb7274284e8b8686868660405161192f94939291906123f5565b60405180910390a1505050505050565b6001600160a01b0381163b6119bc5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016105b0565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b611a1e83611a3a565b600082511180611a2b5750805b156112df57610d298383611a7a565b611a438161193f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061081a8383604051806060016040528060278152602001612489602791396060600080856001600160a01b031685604051611ab79190612435565b600060405180830381855af49150503d8060008114611af2576040519150601f19603f3d011682016040523d82523d6000602084013e611af7565b606091505b5091509150611b0886838387611b12565b9695505050505050565b60608315611b7e578251611b77576001600160a01b0385163b611b775760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105b0565b5081611b88565b611b888383611b90565b949350505050565b815115611ba05781518083602001fd5b8060405162461bcd60e51b81526004016105b09190611fa0565b508054611bc69061238d565b6000825580601f10611bd6575050565b601f0160209004906000526020600020908101906108019190611c78565b828054611c009061238d565b90600052602060002090601f016020900481019282611c225760008555611c68565b82601f10611c3b57805160ff1916838001178555611c68565b82800160010185558215611c68579182015b82811115611c68578251825591602001919060010190611c4d565b50611c74929150611c78565b5090565b5b80821115611c745760008155600101611c79565b6001600160a01b038116811461080157600080fd5b60008083601f840112611cb457600080fd5b50813567ffffffffffffffff811115611ccc57600080fd5b602083019150836020828501011115611ce457600080fd5b9250929050565b60008060008060008060008060c0898b031215611d0757600080fd5b8835611d1281611c8d565b97506020890135611d2281611c8d565b96506040890135611d3281611c8d565b955060608901359450608089013567ffffffffffffffff80821115611d5657600080fd5b611d628c838d01611ca2565b909650945060a08b0135915080821115611d7b57600080fd5b50611d888b828c01611ca2565b999c989b5096995094979396929594505050565b600060208284031215611dae57600080fd5b81356001600160e01b03198116811461081a57600080fd5b600080600080600060808688031215611dde57600080fd5b8535611de981611c8d565b94506020860135611df981611c8d565b935060408601359250606086013567ffffffffffffffff811115611e1c57600080fd5b611e2888828901611ca2565b969995985093965092949392505050565b60008083601f840112611e4b57600080fd5b50813567ffffffffffffffff811115611e6357600080fd5b6020830191508360208260051b8501011115611ce457600080fd5b60008060008060408587031215611e9457600080fd5b843567ffffffffffffffff80821115611eac57600080fd5b611eb888838901611e39565b90965094506020870135915080821115611ed157600080fd5b50611ede87828801611e39565b95989497509550505050565b600060208284031215611efc57600080fd5b5035919050565b600060208284031215611f1557600080fd5b813561081a81611c8d565b600080600060608486031215611f3557600080fd5b833567ffffffffffffffff811115611f4c57600080fd5b84016101608187031215611f5f57600080fd5b95602085013595506040909401359392505050565b60005b83811015611f8f578181015183820152602001611f77565b83811115610d295750506000910152565b6020815260008251806020840152611fbf816040850160208701611f74565b601f01601f19169190910160400192915050565b60008060408385031215611fe657600080fd5b8235611ff181611c8d565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561202857600080fd5b823561203381611c8d565b9150602083013567ffffffffffffffff8082111561205057600080fd5b818501915085601f83011261206457600080fd5b81358181111561207657612076611fff565b604051601f8201601f19908116603f0116810190838211818310171561209e5761209e611fff565b816040528281528860208487010111156120b757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600080606085870312156120ef57600080fd5b843567ffffffffffffffff81111561210657600080fd5b61211287828801611ca2565b90989097506020870135966040013595509350505050565b6000806000806060858703121561214057600080fd5b843561214b81611c8d565b935060208501359250604085013567ffffffffffffffff81111561216e57600080fd5b611ede87828801611ca2565b60008060008060008060008060a0898b03121561219657600080fd5b88356121a181611c8d565b975060208901356121b181611c8d565b9650604089013567ffffffffffffffff808211156121ce57600080fd5b6121da8c838d01611e39565b909850965060608b01359150808211156121f357600080fd5b6121ff8c838d01611e39565b909650945060808b0135915080821115611d7b57600080fd5b60008060008060008060a0878903121561223157600080fd5b863561223c81611c8d565b9550602087013561224c81611c8d565b94506040870135935060608701359250608087013567ffffffffffffffff81111561227657600080fd5b61228289828a01611ca2565b979a9699509497509295939492505050565b600080602083850312156122a757600080fd5b823567ffffffffffffffff8111156122be57600080fd5b6122ca85828601611ca2565b90969095509350505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261230357600080fd5b83018035915067ffffffffffffffff82111561231e57600080fd5b602001915036819003821315611ce457600080fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561235d5761235d612333565b5060010190565b60006020828403121561237657600080fd5b5051919050565b8183823760009101908152919050565b600181811c908216806123a157607f821691505b602082108114156123c257634e487b7160e01b600052602260045260246000fd5b50919050565b6000828210156123da576123da612333565b500390565b634e487b7160e01b600052603160045260246000fd5b606081528360608201528385608083013760006080858301015260006080601f19601f870116830101905083602083015282604083015295945050505050565b60008251612447818460208701611f74565b9190910192915050565b6000821982111561246457612464612333565b500190565b600081600019048311821515161561248357612483612333565b50029056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c293d80e3a5143564d85b07e055f7646cc5c7067ac01ee4f94531436da5ab61d64736f6c634300080c0033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: string,
    overrides?: Overrides & { from?: string }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}