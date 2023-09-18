import { createContext, useContext, useEffect, useState, useMemo } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const Web3Context = createContext(null)

export default function Web3Provider({children}) {

    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true
    })

    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                const web3 = new Web3(provider);
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoading: false
                })
                console.log("Web3 loaded successfully 2")
            } else {
                console.log('Please install MetaMask!');
                setWeb3Api(api => ({
                    ...api,
                    isLoading: false
                }))
            }
        }
        loadProvider()
    }, [])

    const _web3Api = useMemo(() => {
        const {provider, web3} = web3Api
        return {
            ...web3Api,
            isWeb3Loaded: web3 != null, 
            connect: provider ?
            async () => {
                try {
                    await provider.request({method: "eth_requestAccounts"})
                } catch (error) {
                    console.error(error);
                    window.location.reload()
                }
            } :
            () => console.error("Cannot connect Metamask")
        }
    }, [web3Api])

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
      )

}

export function useWeb3() {
    return useContext(Web3Context)
}

export function useHooks(cb) {
    const {getHooks} = useWeb3()
    return cb(getHooks())
}