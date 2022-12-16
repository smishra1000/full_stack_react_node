import { useSelector, useDispatch } from "react-redux";
function CompanyList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.companies);

  const deleteCompnay = (e, company) => {
    dispatch({ type: "delete_company", payload: company.id });
  };
  return (
    <div className="">
      <h1>Companies List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Company Name</th>
            <th scope="col">Company Address</th>
            <th scope="col"> Action</th>
          </tr>
        </thead>
        <tbody>
          {state.companies.map((company, index) => {
            return (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.companyName}</td>
                <td>{company.companyAddress}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteCompnay(e, company)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
