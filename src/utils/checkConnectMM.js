import { Notification } from "element-react";


export const doConnectMetaMask = async() => {
    if (!window.ethereum) {
        Notification({
            title: 'Errors',
            message: "Connect Meta Mask",
            type: 'error'
        });
        return null;
    }else{
        try{
            return await window.ethereum.request({ method: "eth_requestAccounts" });
        }
        catch(err){ return null}
    }
   
}

export const GetAccountMetaMask = async (userInfo) => {
    const wallet = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("wallet", wallet[0])
    if (userInfo?.code_meta_mask === 0) {
        Notification({
            title: 'Errors',
            message: "you can resgister Account MetaMask",
            type: 'error'
        });
        return null;
    }
    else if (wallet[0].toLowerCase() != userInfo?.code_meta_mask.toLowerCase()) {
        Notification({
            title: 'Errors',
            message: "you can Check account Metamask",
            type: 'error'
        });
        return null;
    } else {
        return wallet[0];
    }
}



