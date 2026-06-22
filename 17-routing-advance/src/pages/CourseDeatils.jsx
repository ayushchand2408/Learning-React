import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails(){

    const params = useParams();
    console.log(params);
    return <div className="">
        <h1> {params.id} CourseDetails Page</h1>
    </div>
}

export default CourseDetails;