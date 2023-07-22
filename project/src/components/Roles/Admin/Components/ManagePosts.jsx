import React, { useEffect, useState } from "react";
import axiosadminInstance from "../../../Axios/AdminAxios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ManagePosts() {
  const [Posts, setPosts] = useState([]);
  const [Id, setID] = useState();
  const [show, setShow] = useState(false);
  const [show_edit_modal, setshow_edit_modal] = useState(false);

  const handleClose = () => setShow(false);
  const [detail, setDetail] = useState();
  const [modifiedData, setModifiedData] = useState({});
  const [Addpost, setAddpost] = useState(false);
  const [formData, setFormData] = useState({
    planName: "",
    no_of_count: "",
    amount: "",
    feature_one: "",
    feature_two: "",
    feature_three: "",
    feature_four: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosadminInstance.get("admin/view-post-plans/");
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleAddpostPlan = () => {
    setAddpost(true);
    setshow_edit_modal(true);
  };

  const HandleEdit = async (id) => {
    try {
      setID(id);
      const response = await axiosadminInstance.get(
        `admin/view-post-plans/${id}/`
      );
      setDetail(response.data.data);
      console.log(response.data.data);
      setshow_edit_modal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdate = async (event) => {
    event.preventDefault();

    if (Addpost) {
      const response = await axiosadminInstance.post(
        "admin/add-post-plans/",
        formData
      );
      console.log(response);
      console.log(response.data.message);
      setshow_edit_modal(false);
      setModifiedData(null);
      setDetail(null);
      fetchData();
      setFormData({});
      toast.success(response.data.message);
      setAddpost(false);
    } else {
      try {
        const response = await axiosadminInstance.patch(
          `admin/edit-post-plans/${Id}/`,
          modifiedData
        );
        console.log("update", response);
        fetchData();
        setshow_edit_modal(false);
        setModifiedData(null);
        setDetail(null);
        setFormData({});

        toast.success(response.data.message);
      } catch (error) {
        if (error.response.status === 400) {
          toast.error("Please provide a valid data");
        }
      }
    }
  };

  useEffect(() => {
    if (detail) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        planName: detail.planName,
        no_of_count: detail.no_of_count,
        amount: detail.amount,
        feature_one: detail.feature_one,
        feature_two: detail.feature_two,
        feature_three: detail.feature_three,
      }));
    }
  }, [detail]);

  const ConfirmDelete = async () => {
    try {
      const response = await axiosadminInstance.delete(
        `admin/delete-post-plans/${Id}/`
      );
      console.log("Response", response);
      handleClose();
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = (id) => {
    setID(id);
    setShow(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setModifiedData((prevState) => ({ ...prevState, [name]: value }));
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log("modified", modifiedData);
  };

  const handleEditClose = () => {
    if (Addpost) {
      setAddpost(false);
    } else {
      setDetail(null);
      setFormData({});
      setModifiedData({});
    }
    setshow_edit_modal(false);
  };
  return (
    <div className="4/5 p-5">
      <button
        className="rounded-full border bg-green-50 h-12  w-1/3 mt-4 mb-4 ml-5 hover:bg-gray-300 text-xl font-serif  drop-shadow-lg text-zinc-800 transition"
        onClick={HandleAddpostPlan}
      >
        Create a new plan
      </button>
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
        <div className="grid mb-8   dark:border-gray-700 md:mb-12 md:grid-cols-2">
          {Posts.length > 0 ? (
            Posts.map((item) => (
              <div
                className="w-5/6 mx-auto  m-2 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 place-content-stretch"
                key={item.id}
              >
                <h5 className="mb-4 text-xl font-medium text-gray-500 capitalize">
                  {item.planName}
                </h5>
                <div className="flex items-baseline text-gray-900 }">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {item.amount}
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 ">
                    /plan
                  </span>
                </div>

                <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Check icon</title>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {item.no_of_count} posts{" "}
                    </span>
                  </li>
                  {item.feature_one && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_one}
                      </span>
                    </li>
                  )}

                  {item.feature_two && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_two}
                      </span>
                    </li>
                  )}

                  {item.feature_three && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_three}
                      </span>
                    </li>
                  )}

                  {item.feature_four && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_four}
                      </span>
                    </li>
                  )}
                </ul>
                <button
                  className="rounded-full border bg-slate-100 w-12 h-12 mt-4 mb-4 hover:bg-gray-300 text-lg drop-shadow-lg text-lime-900"
                  onClick={() => HandleEdit(item.id)}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button
                  className="rounded-full border bg-red-200  w-12 h-12 mt-4 mb-4 ml-5 hover:bg-gray-300 text-lg drop-shadow-lg text-rose-800"
                  onClick={() => HandleDelete(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))
          ) : (
            <h1 className="text-2xl font-serif font-semibold text-gray-500">
              Sory You dont have any post plan ....
            </h1>
          )}
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

      {/* edit modal */}

      <Modal
        show={show_edit_modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="h-5/6 mt-6"
      >
        <Modal.Header>
          <Modal.Title>
            <p className="ml-48 font-semibold text-2xl font-serif text-zinc-600">
              {Addpost ? "Create" : "Update"}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={HandleUpdate}
          >
            <div class="mb-4">
              <label
                class="block text-gray-400 text-sm font-bold mb-2"
                for="username"
              >
                Plan
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="planName"
                type="text"
                name="planName"
                value={formData.planName}
                onChange={handleInputChange}
                required={Addpost}
              />
            </div>

            <div className="mb-4 flex ">
              <div className=" ">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Post count
                </label>
                <input
                  className="shadow appearance-none mx-auto border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="no_of_count"
                  type="number"
                  name="no_of_count"
                  value={formData.no_of_count}
                  onChange={handleInputChange}
                  required={Addpost}
                  min={1}
                />
              </div>

              <div>
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Amount
                </label>
                <input
                  className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required={Addpost}
                  min={1}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Featuers
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="feature_one"
                type="text"
                name="feature_one"
                value={formData.feature_one}
                onChange={handleInputChange}
                required={Addpost}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Detail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="feature_two"
                type="text"
                name="feature_two"
                value={formData.feature_two}
                onChange={handleInputChange}
                required={Addpost}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Others
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="feature_three"
                type="text"
                name="feature_three"
                value={formData.feature_three}
                onChange={handleInputChange}
                required={Addpost}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {Addpost ? "ADD" : "EDIT"}
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*  */}
    </div>
  );
}

export default ManagePosts;
