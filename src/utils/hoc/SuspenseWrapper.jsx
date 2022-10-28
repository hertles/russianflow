import React from "react";
import Preloader from "../../components/Common/Preloader/Preloader";

const SuspenseWrapper = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div className={"backgroundBlock"} style={{width:"fit-content"}}><Preloader/></div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}
export default SuspenseWrapper