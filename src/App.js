import React from "react";
import { useState } from "react";
import './styles.css'
import { GeneralInfoForm } from "./components/GeneralInfoForm";
import ShowGeneralInfo from "./components/ShowGeneralInfo";

function App() {

  const [general, setGeneral] = useState('')

  function setGeneralInfo(generalInfo) {
    setGeneral(generalInfo)
  }

  return (
    <div className="App">

      <div className="main">

        <div className="forms">

          <GeneralInfoForm setGeneralInfo={setGeneralInfo} />
          
        </div>

        <div className="show-info">

          <ShowGeneralInfo
            firstName={general.firstName}
            lastName={general.lastName}
            title={general.title}
            email={general.email}
            phone={general.phone}
            address={general.address}
            description={general.description}
          />

        </div>
      </div>

    </div>
  );
}

export default App;
