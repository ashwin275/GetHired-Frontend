import React, { useEffect, useState, useMemo } from "react";
import axiosadminInstance from "../../../Axios/AdminAxios";
import Table from "react-bootstrap/Table";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { COLUMNS, GROUPED_COLUMNS } from "./column";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SortingTable(props) {
  const [userlist, setUserlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [action, setAction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchData = async () => {
    try {
      console.log(props.title, "tiellllllllllllllllll");
      let url_role = "";
      if (props.title === "Users") {
        url_role = "user";
      } else if (props.title === "Employers") {
        url_role = "employers";
      }
      const response = await axiosadminInstance.get(
        `admin/${url_role}-manage/`
      );
      setUserlist(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.title]);

  useEffect(() => {
    console.log("Updated userlist:", userlist);
  }, [userlist]);

  const columns = useMemo(
    () => [
      ...GROUPED_COLUMNS,
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleDelete(row.original.id)} className="">
              Delete
            </button>
            <button
              onClick={() =>
                handleBlock(row.original.id, row.original.is_active)
              }
              className=""
            >
              {row.original.is_active ? "Block" : "UnBlock"}
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => userlist, [userlist]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  const renderCell = (cell, index) => {
    if (cell.column.id === "id") {
      return index + 1;
    } else if (typeof cell.value === "boolean") {
      return cell.value ? (
        <p className="text-green-500">Yes</p>
      ) : (
        <p className="text-orange-600">No</p>
      );
    }
    return cell.value;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setGlobalFilter(value);
  };

  const handleDelete = (id) => {
    setSelectedUserId(id);
    setAction("DELETE");
    setShowModal(true);
    console.log("Delete user with ID:", id);
  };

  const confirmDelete = async () => {
    try {
      const response = await axiosadminInstance.delete(
        `admin/delete-user/${selectedUserId}/`
      );
      console.log(response);

      setUserlist((prevUserlist) =>
        prevUserlist.filter((user) => user.id !== selectedUserId)
      );
    } catch (error) {
      console.log(error);
    }

    console.log("Delete user with ID:", selectedUserId);

    setShowModal(false);
    setSelectedUserId(null);
    setAction(null);
  };

  const handleBlock = (id, isActive) => {
    setSelectedUserId(id);

    if (isActive) {
      setAction("BLOCK");
    } else {
      setAction("UN-BLOCK");
    }

    setShowModal(true);
    console.log("Block user with ID:", id);
  };

  const confirmBlock = async () => {
    try {
      const response = await axiosadminInstance.patch(
        `admin/status-user/${selectedUserId}/`
      );

      console.log(response);
      fetchData();
      console.log("Block user with ID:", selectedUserId);

      setShowModal(false);
      setSelectedUserId(null);
      setAction(null);
    } catch (error) {
      console.log(error);
    }
  };

  const ConfirmAction = () => {
    if (action === "DELETE") {
      confirmDelete();
    } else if (action === "BLOCK" || action === "UN-BLOCK") {
      confirmBlock();
    }
  };

  return (
    <div className="container mx-auto m-4 p-4 mb-4">
      <div className="	flex justify-center items-center ">
        <h1 className="text-3xl font-serif text-dark-purple mb-4 mr-3">
          {props.title}
        </h1>
        &nbsp;&nbsp;
        <div className="mb-4 ml-3">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>

      {userlist.length > 0 ? (
        <Table responsive="sm" striped bordered hover variant="dark">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                  >
                    {column.render("Header")}
                    <span className="ml-3">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa-solid fa-sort-down text-red-500"></i>
                        ) : (
                          <i className="fa-solid fa-sort-up text-green-500"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <td {...cell.getCellProps()} key={cellIndex}>
                        {cell.column.id === "actions" ? (
                          <div>
                            <button
                              onClick={() => handleDelete(row.original.id)}
                              className="btn btn-outline-danger me-3"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() =>
                                handleBlock(
                                  row.original.id,
                                  row.original.is_active
                                )
                              }
                              className={
                                row.original.is_active
                                  ? "btn btn-outline-info w-32"
                                  : "btn btn-outline-success w-32"
                              }
                            >
                              {row.original.is_active ? "Block" : "UnBlock"}
                            </button>
                          </div>
                        ) : (
                          renderCell(cell, rowIndex)
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>Loading data...</p>
      )}

      <div className="flex justify-center mt-4">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span className="mx-2">
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm {action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to {action} this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={ConfirmAction}>
            {action}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SortingTable;
