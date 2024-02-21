import { Loader } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import './ServerBox.css';
import { useState } from "react";

export const ServerBox = () => {

    const [loadingStates, setLoadingStates] = useState([false, false, false]); // initial loading state for each divcontainer

    const startLoader = (index) => {
        const newLoadingStates = [...loadingStates];
        newLoadingStates[index] = true;
        setLoadingStates(newLoadingStates);
    }

    const stopLoader = (index) => {
        const newLoadingStates = [...loadingStates];
        newLoadingStates[index] = false;
        setLoadingStates(newLoadingStates);
    }

    return (
        <>
            <div className="serverBoxDiv">
                <span className="server1Txt">Server 1: </span>
                {loadingStates[0] && <Loader className="loader1" variation="linear" speed={50}/>}
                <div className="buttonContainer">
                    <button className="button1" onClick={() => startLoader(0)}>Button1</button>
                    <button className="button2" onClick={() => stopLoader(0)}>Button2</button>
                </div>
            </div>

            <div className="serverBoxDiv2">
                <span className="server2Txt">Server 2: </span>
                {loadingStates[1] && <Loader className="loader2" variation="linear"/>}
                <div className="buttonContainer">
                    <button className="button1" onClick={() => startLoader(1)}>Button1</button>
                    <button className="button2" onClick={() => stopLoader(1)}>Button2</button>
                </div>
            </div>

            <div className="serverBoxDiv3">
                <span className="server3Txt">Server 3: </span>
                {loadingStates[2] && <Loader className="loader3" variation="linear"/>}
                <div className="buttonContainer">
                    <button className="button1" onClick={() => startLoader(2)}>Button1</button>
                    <button className="button2" onClick={() => stopLoader(2)}>Button2</button>
                </div>
            </div>
        </>
    );
}
export default ServerBox;