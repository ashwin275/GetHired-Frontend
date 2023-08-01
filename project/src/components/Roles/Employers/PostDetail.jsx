import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios/Axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [detail, setDetail] = useState(null); // Initialize `detail` state to null

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `recruiters/post-detail/${postId}/`
      );
      setDetail(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = () => {
    setShow(true);
  };

  const HandleEdit = () => {
    navigate(`/employers/home-view/edit-post/${postId}/`);
  };

  const ConfirmDelete = async () => {
    setShow(false);

    try {
      const response = await axiosInstance.delete(
        `recruiters/delete-post/${postId}/`
      );
      console.log("delete:", response);

      navigate("/employers/home-view/");

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleApplicants = () => {
    console.log(detail.applicants);
    navigate(`/employers/home-view/applicants/${postId}/`);
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3">
      <div className="w-full  p-8 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <h5 className="mb-2 text-xl lg:text-3xl font-medium text-sky-900 uppercase ">
          {detail.desgination}
        </h5>
        <div className="flex flex-col lg:flex-row  lg:justify-between lg:p-8">
          <div className="text-center justify-space">
            <span
              className={`text-xl font-medium mr-2 px-2.5 py-0.5 rounded border ${
                detail.is_active
                  ? "bg-green-100 text-green-800 border-green-400"
                  : "bg-red-100 text-red-800 border-red-400"
              } my-5`}
            >
              {detail.is_active ? "Active" : "Not Active"}
            </span>

            <p className="mb-2 mt-3  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                skills :
              </span>{" "}
              {detail.skills}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Vacancies :
              </span>{" "}
              {detail.vaccancies}
            </p>
            <p className="mb-2 text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                location :
              </span>{" "}
              {detail.location}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Type :
              </span>{" "}
              {detail.Type}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Work Mode :
              </span>{" "}
              {detail.workmode}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Experience from :
              </span>{" "}
              {detail.experience_from}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Experience to :
              </span>{" "}
              {detail.experience_to}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Requirement :
              </span>{" "}
              {detail.criteria}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Pay Scale from:
              </span>{" "}
              {detail.payscale_from}
            </p>
            <p className="mb-2  text-start text-gray-600 sm:text-lg ">
              <span className="text-slate-400 uppercase font-serif text-base">
                Pay Scale to:
              </span>{" "}
              {detail.payscale_to}
            </p>

            <button
              className="rounded-full border bg-slate-100 w-20 mt-4 mb-4 hover:bg-gray-300 text-lg drop-shadow-lg text-lime-900"
              onClick={HandleEdit}
            >
              Edit
            </button>
            <button
              className="rounded-full border bg-red-300  w-20 mt-4 mb-4 ml-5 hover:bg-gray-300 text-lg drop-shadow-lg text-rose-800"
              onClick={HandleDelete}
            >
              Delete
            </button>
          </div>
          <div className="">
            <button
              disabled={detail.applicants === 0}
              onClick={handleApplicants}
              className={`${
                detail.applicants === 0 ? "cursor-not-allowed" : ""
              }`}
            >
              <div
                className={`rounded-lg border bg-cyan-50 drop-shadow-lg p-4 `}
              >
                <p className="text-2xl font-serif">Total Applicants</p>
                <p className="mt-6 text-xl">{detail.applicants}</p>
              </div>
            </button>
            <div className="rounded-lg border bg-green-50 drop-shadow-lg p-4 mt-5">
              <p className="text-2xl font-serif">Hired</p>
              <p className="mt-6 text-xl">{detail.hired_count}</p>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting this post will remove it permanently. Proceed with deletion?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={ConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ........... */}
    </div>
  );
}

export default PostDetail;
