import React from "react";

export default function ShowGeneralInfo (props) {
    
    return(



        <div className="show-general-info">

            <div className="general-top">
                <div className="general-full-name">{props.firstName} {props.lastName}</div>
                <div className="general-title">{props.title}</div>
            </div>

            <div className="general-left">
                <div>{
                    props.description !== '' ?
                    <div>
                        <div className="general-left-header">Description</div> 
                        <div className="general-left-data">{props.description}</div>
                    </div>:
                ''   
                }</div>
            </div>

            <div className="general-right">
                <div className="general-right-header">Personal Details</div>
                <div className="general-right-title">Email</div>
                <div className="general-right-data">{props.email}</div>
                <div className="general-right-title">Phone</div>
                <div className="general-right-data">{props.phone}</div>
                <div className="general-right-title">Address</div>
                <div className="general-right-data">{props.address}</div>
            </div>
                 
        </div>

    )
}