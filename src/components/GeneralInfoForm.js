import React from "react";
import { useState } from "react";

function GeneralInfoForm({setGeneralInfo}) {

    const [formData , setFormData] = useState({
        firstName: '' , lastName: '' , title:'' , email: '' ,
        phone: '' , address: '' , description: ''
    })

    
    function handleChange(e) {
        setFormData(prev => {
            return {
                ...prev ,
                [e.target.name]: e.target.value
                
            }
        })
    }

    function sendData (e) {
        e.preventDefault()
        setGeneralInfo(formData)
    }

    console.log(formData)

    return (
        <div >
            <form autoComplete="off" className="general-form">

                <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                />

                <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                />

                <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                />

                <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                />

                <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
                />

                <input
                type="text"
                placeholder="Address"
                name="address"
                onChange={handleChange}
                />

                <textarea
                placeholder="Description"
                name="description"
                onChange={handleChange}
                >
                </textarea>

                <button onClick={sendData}>Send</button>

            </form>

        </div>
    )
}

export {GeneralInfoForm}