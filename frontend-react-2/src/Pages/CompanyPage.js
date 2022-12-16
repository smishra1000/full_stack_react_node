import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CompanyList from "./CompanyList";

function CompanyPage() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const dispatch = useDispatch();

  const onCompanyAddressChange = (e) => {
    setCompanyAddress(e.target.value);
  };
  const onCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const saveCompany = (e) => {
    e.preventDefault();
    let companyData = {
        id:new Date().getTime(),
        companyName:companyName,
        companyAddress:companyAddress
    }
    dispatch({type:"save_company",payload:companyData})
    setCompanyAddress("")
    setCompanyName("")
  };

  return (
    <div className="container">
      <form onSubmit={(e) => saveCompany(e)}>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={companyName}
            onChange={(e) => onCompanyNameChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Address</label>
          <input
            type="text"
            className="form-control"
            value={companyAddress}
            onChange={(e) => onCompanyAddressChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <CompanyList/>
    </div>
  );
}

export default CompanyPage;
