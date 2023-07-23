import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
import Daysago from "./Daysago";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function AppliedJobs() {
  const [myjobs, setmyjobs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Id, SetId] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("applied-jobs/");
      console.log(response);
      setmyjobs(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleCancel = (id) => {
    SetId(id);
    setShow(true);
  };

  const CancelApplication = async () => {
    try {
      const response = await axiosInstance.delete(`decline-apply/${Id}/`);
      console.log(response);
      fetchData();
      setShow(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.error);
    }
  };
  return (
    <div className="w-full md:w-10/12 border-2 rounded-lg mx-auto  p-2 h-96  md:h-[36rem] overflow-y-scroll no-scrollbar">
      {myjobs.length > 0 ? (
        myjobs.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-3/5 p-4   border border-gray-200 rounded-lg  hover:shadow-xl drop-shadow-md sm:p-8 mt-2 mx-auto mb-4"
          >
            <div className="flex justify-between text-gray-900">
              <div>
                <span className="text-md md:text-xl text-start item-baseline w-full  flex justify-between font-bold tracking-tight hover:underline decoration-1 font-sans capitalize">
                  {item.job}
                </span>
                <div className="flex items-baseline text-slate-700 p-1">
                  <span className="text-md md:text-lg  tracking-tight hover:underline decoration-1 capitalize">
                    {item.recruiter}
                  </span>
                </div>
                <div className="flex items-baseline text-slate-700 ms-1">
                  <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
                  <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
                    {item.location}
                  </span>
                </div>
              </div>
              <span className="me-2 font-normal font-serif ">
                <Daysago created={item.created} />
              </span>
            </div>

            <div className="flex justify-between">
              <p className={`capitalize font-normal shadow-md  text-md  font-serif border rounded-full w-auto mt-4 px-2 ${
                            item.status === "applied"
                              ? "bg-cyan-100 text-cyan-800"
                              : item.status === "intervied"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.status === "shortlisted"
                              ? "bg-yellow-50 text-yellow-900 "
                              : item.status === "selected"
                              ?"bg-green-400 text-lime-900"
                              :item.status ==='rejected'
                              ?"bg-rose-100 text-rose-900" :' '
                              
                          } `}>
                {item.status}
              </p>

              {item.status === "rejected" && (
                <span>
                  <p
                    className="p-1 rounded-full shadow-md font-normal  font-serif hover:shadow-lg px-2 text-md bg-red-400 text-red-950"
                    type="button"
                    onClick={() => HandleCancel(item.id)}
                  >
                    Delete
                  </p>
                </span>
              )}

              {item.status === "applied" && (
                <span>
                  <p
                    className="p-1 rounded-full shadow-md font-normal  font-serif hover:shadow-lg px-2 text-md bg-rose-200 text-rose-800"
                    type="button"
                    onClick={() => HandleCancel(item.id)}
                  >
                    Withdraw 
                  </p>
                </span>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="p-5">
            <p className="text-4xl font-serif font-medium text-lime-950">
              No applications yet
            </p>
          </div>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure Cancel this application</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={CancelApplication}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AppliedJobs;
