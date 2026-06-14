import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Page1Content(props){
    return (
        <div className="pb-16 pt-6 flex items-content gap-10 h-[90vh] px-18 ">
            <LeftContent />
            <RightContent user={props.user}/>
        </div>
    );
}

export default Page1Content;