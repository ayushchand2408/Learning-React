import React from "react";
import { Bookmark } from "lucide-react";

function Card({job}){
    return(
        <div className="card">
            <div>
                <div className="top">
                <img src={job.companyImg} alt={job.companyName}></img>
                <button>Save <Bookmark size={15}/></button>
                </div>
                <div className="center">
                <h3>{job.companyName} <span>{job.postedTime}</span></h3>
                <h2> {job.position}</h2>
                <div className="tag">
                    <h4>{job.jobType}</h4>
                    <h4> {job.positionLevel}</h4>
                </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                <h3>{job.income}</h3>
                <p>{job.location}</p>
                </div>
                <button>Apply Now</button>

            </div>
        </div>
    );
}
export default Card;