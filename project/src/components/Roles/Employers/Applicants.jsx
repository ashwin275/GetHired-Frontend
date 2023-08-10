import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios/Axios";
import Table from "react-bootstrap/Table";
import Daysago from "../Users/Daysago";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import iconmsg from "../../../images/msgiconblack.png"
function Applicants() {
  const navigate = useNavigate()
  const { postId } = useParams();

  const [show, setShow] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState("");
  const [ID, SetID] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [hasPrev, setHasprev] = useState(false);
  const [reject, SetReject] = useState(false);
  const [RoomId,setRoomId] = useState(12)
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const base_url = import.meta.env.VITE_FILES_BASE_URL
  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `recruiters/applicants/${postId}/?limit=${limit}&offset=${offset}`
      );
      console.log(response);
      setApplicants(response.data.results);

      if (response.data.next == null) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      if (response.data.previous == null) {
        setHasprev(false);
      } else {
        setHasprev(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = async (resumeUrl,itemId) => {
    console.log('application id',itemId)
    
    try {
      const downloadUrl = `${base_url}${resumeUrl}`;
      const response = await fetch(downloadUrl);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "resume.pdf";
      anchor.click();

      URL.revokeObjectURL(url);

      await callbackeapi_send_mail(itemId);
    } catch (error) {
      console.log("Error downloading the resume:", error);
    }
  };

  const callbackeapi_send_mail = async(itemId)=>{
    try{
     const response = axiosInstance.post(`recruiters/resume-downloaded/${itemId}/`)
     console.log(response)
    }catch(error){
      console.log(error)
    }
  }
  const HandlePerv = () => {
    setHasMore(true);
    setOffset(offset - limit);
  };

  const HandleNext = () => {
    setOffset(offset + limit);
  };
  const handleChangeStatus = (Status, id) => {
    SetID(id);
    if (Status === "applied") {
      setStatus("Shortlisted");
    } else if (Status === "shortlisted") {
      setStatus("Intervied");
    }else if (Status ==="intervied"){
      setStatus("selected")
    }

    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setStatus("");
    SetID(null);
    SetReject(false);
  };

  const handleReject = (id) => {
    SetID(id);
    SetReject(true);
  };

  const ConfirmReject = async () => {
    try {
      const response = await axiosInstance.patch(
        `recruiters/reject-application/${ID}/`
      );
      console.log(response);
      fetchData();
      SetReject(false);
    } catch (error) {
      console.log(error);
    }
  };
  const ConfirmChangeStatus = async () => {
    try {
      const response = await axiosInstance.patch(
        `recruiters/change-status/${ID}/`
      );
      console.log(response);
      fetchData();
      setShow(false);
      setStatus("");
      SetID(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handlechat=(SeekerId)=>{
    
    navigate(`/employers/home-view/chat/${SeekerId}/${postId}/`)

  }
  return (
    <>
      <div className="w-full p-3  ">
        {applicants.length > 0 ? (
          <>
            <div className="md:h-[20rem] ">
              <Table bordered hover responsive="sm" className="">
                <thead>
                  <tr className="text-lime-950 font-serif">
                    <th>#</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Status</th>
                    <th>Applied on</th>
                    <th>Resume</th>
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((item, index) => (
                    <tr key={index} className={`text-sm font-serif `}>
                      <td>{index + offset + 1}</td>
                      <td>{item.user}</td>
                      <td>{item.mobile}</td>
                      <td className="capitalize  ">
                        <span
                          className={`p-1 border rounded-lg ${
                            item.status === "applied"
                              ? "bg-cyan-50 text-cyan-800"
                              : item.status === "intervied"
                              ? "bg-emerald-50 text-emerald-700"
                              : item.status === "shortlisted"
                              ? "bg-yellow-50 text-yellow-900 "
                              : item.status === "selected"
                              ?"bg-green-100 text-lime-900"
                              :item.status ==='rejected'
                              ?"bg-rose-50 text-rose-900" :' '
                              
                          } `}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <Daysago created={item.created} />
                      </td>
                      <td>
                        <span>
                          <a
                            href={`${base_url}${item.resume}`}
                            target="blank"
                            className="text-lime-950 "
                          >
                            <i className="fa-solid fa-eye "></i> 
                          </a>{" "}
                        </span>{" "}
                        <button
                          onClick={() => handleDownload(item.resume,item.id)}
                          className="ms-3"
                        >
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </td>
                      <td className="w-20">
                        {item.status != "rejected" && (
                          <button
                            className={`text-lime-900 me-2 ${
                              item.status === "selected"
                                ? "cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() =>
                              handleChangeStatus(item.status, item.id)
                            }
                            disabled={item.status === "selected"}
                          >
                            <i className="fa-solid fa-file-pen"></i>
                          </button>
                        )}
                      </td>
                      <td>
                        {item.status === "applied" ? (
                          <button
                            className="ms-2 border px-2 rounded-md bg-red-100"
                            onClick={() => handleReject(item.id)}
                          >
                            Reject
                          </button>
                        ):(<><div className="w-10 h-6 mx-auto flex item-center " type='button' onClick={()=>handlechat(item.user_id)}>
                        <img className="" src={iconmsg}></img></div></>)}{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="w-full  mt-3">
              {" "}
              {hasPrev && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 me-1 font-bold py-1 px-1 rounded"
                  onClick={HandlePerv}
                >
                  Prev
                </button>
              )}
              {hasMore && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 ms-1 font-bold py-1 px-1 rounded"
                  onClick={HandleNext}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <p>loading</p>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm </Modal.Title>
          </Modal.Header>
          <Modal.Body className="font-semibold font-serif text-lime-950">
            Are you sure Change this status to {status}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={ConfirmChangeStatus}>
              Change to {status}
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={reject} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm </Modal.Title>
          </Modal.Header>
          <Modal.Body className="font-semibold font-serif text-lime-950">
            Are you sure Reject this application
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={ConfirmReject}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Applicants;
