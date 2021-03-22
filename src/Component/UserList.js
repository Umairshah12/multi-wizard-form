import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { CBadge, CDataTable } from "@coreui/react";
import { withRouter, useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function UserList(props) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(`http://localhost:3000/users`);
      const json = await response.json();
      setUserList(json);
    }
    fetchMyAPI();
  }, []);

  const DeleteEntry = async (id) => {
    const data = userList.filter((item) => item.id !== id);
    setUserList(data);
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const res = await response.json();
        console.log("data deleted successfully!");
      } else {
        //
      }
    } catch (error) {
      //
    }
  };

  const fields = [
    { key: "jobtitle", label: "JOB TITLE", _style: { width: "15%" } },
    { key: "jobExperiance", label: "JOB EXPERIANCE", _style: { width: "15%" } },
    { key: "education", label: "EDUCATION", _style: { width: "15%" } },
    { key: "skills", label: "SKILLS", _style: { width: "15%" } },
    { key: "description", label: "JOB DESCRIPTION", _style: { width: "15%" } },
    { key: "hourlyRate", label: "HOURLY RATE", _style: { width: "15%" } },
    {
      key: "experianceStartDate",
      label: "EXPERIANCE STARTING DATE",
      _style: { width: "15%" },
    },
    { key: "carrerLevel", label: "CARRER LEVEL", _style: { width: "15%" } },
    { key: "gender", label: "Gender", _style: { width: "15%" } },
    {
      key: "equipmentSpecification",
      label: "EQUPMENT SPECIFICATION",
      _style: { width: "15%" },
    },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "70%" },
    },
  ];

  const getBadge = (gender) => {
    switch (gender) {
      case "Male":
        return "success";
      case "Female":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <>
      <div className="Home">
        <Link to={`/`}>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="card-body">
        <CDataTable
          items={userList}
          fields={fields}
          columnFilter
          tableFilter
          // footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            gender: (item) => (
              <td>
                <CBadge color={getBadge(item.gender)}>{item.gender}</CBadge>
              </td>
            ),
            show_details: (item, index) => {
              return (
                <td
                  className="py-2"
                  style={{
                    display: "-webkit-box",
                    verticalAlign: "Top",
                    padding: "0.75rem",
                  }}
                >
                  <DeleteOutlineIcon
                    className="actions-delete"
                    onClick={(e) => {
                      if (window.confirm("Do You Want to delete this Entry?"))
                        DeleteEntry(item.id);
                    }}
                    color="secondary"
                  />
                  <Link to={`/updateuser/${item.id}`}>
                    <EditIcon className="actions-edit" color="primary" />
                  </Link>
                </td>
              );
            },
          }}
        />
      </div>
    </>
  );
}

export default UserList;
