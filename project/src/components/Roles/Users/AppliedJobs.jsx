import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
import Daysago from "./Daysago";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import iconmsg from '../../../images/msgicon.png'
import { useNavigate } from "react-router-dom";
import Loaders from "../../LoadingSpinner/Loaders";
function AppliedJobs() {
  const [isLoading, setLoading] = useState(true);
  const [myjobs, setmyjobs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Id, SetId] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("applied-jobs/");
      console.log("Applied job",response);
      setmyjobs(response.data.payload);
      setTimeout(()=>{
        setLoading(false)
      },2000)
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

  const handleChat = (Emp_ID,JobPostId)=>{
    navigate(`/users/home-view/chats/${Emp_ID}/${JobPostId}/`)
  }
  return (
    <div className="w-full md:w-10/12 border-2 rounded-lg mx-auto  p-2 h-96  md:h-[36rem] overflow-y-scroll no-scrollbar">
      {isLoading?(<><div className="w-full h-full  flex items-center justify-center   "><Loaders/></div></>):( <>{myjobs.length > 0 ? (
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
              <p
                className={`capitalize font-normal shadow-md  text-md  font-serif border rounded-full w-auto mt-4 px-2 ${
                  item.status === "applied"
                    ? "bg-cyan-50 text-cyan-800"
                    : item.status === "intervied"
                    ? "bg-emerald-50 text-emerald-700"
                    : item.status === "shortlisted"
                    ? "bg-yellow-50 text-yellow-900 "
                    : item.status === "selected"
                    ? "bg-green-50 text-lime-900"
                    : item.status === "rejected"
                    ? "bg-rose-50 text-rose-900"
                    : " "
                } `}
              >
                {item.status}
              </p>

              {item.status === "rejected" ? (
  <span>
    <p
      className="p-1 rounded-full shadow-md font-normal font-serif hover:shadow-lg px-2 text-md bg-red-400 text-red-950"
      type="button"
      onClick={() => HandleCancel(item.id)}
    >
      Delete
    </p>
  </span>
) : item.status === "applied" ? (
  <span>
    <p
      className="p-1 rounded-full shadow-md font-normal font-serif hover:shadow-lg px-2 text-md bg-rose-200 text-rose-800"
      type="button"
      onClick={() => HandleCancel(item.id)}
    >
      Withdraw
    </p>
  </span>
) : (
  <>
    <div className="w-10 h-10" type="button" onClick={()=>handleChat(item.Emp_ID,item.JobPostId)}>
      <img className="w-10/12 h-10/12" src={iconmsg} alt="icon"></img>
    </div>{" "}
  </>
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
      )}</> )}
    

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
