import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../Features/Slice/authSlice";
import ProfileStatusBar from "./ProfileStatusBar";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserProfile } = useSelector((state) => state.auth);

  const [experiences, setexperiences] = useState({});
  const [profileComp, setpofileComp] = useState(null);
  const [modifiedData, setModifiedData] = useState({});
  const [addExperience, setAddExperience] = useState(false);
  const [show, setShow] = useState(false);
  const [show_edit_modal, setshow_edit_modal] = useState(false);
  const [Id, setId] = useState(null);

  const [formData, setFormData] = useState({
    designation: "",
    company: "",
    start: "",
    end: "",
    description: "",
  });
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const base_url = import.meta.env.VITE_FILES_BASE_URL
  const handleClose = () => setShow(false);
  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = async () => {
    try {
      const response = await axiosInstance.get("seeker/view/");
      console.log(response.data.data.experienced);

      setpofileComp(response.data.profile_completness);
      if (response.data.data.experienced) {
        fetchExperience();
      }
      dispatch(setUserProfile(response.data.data));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExperience = async () => {
    try {
      const response = await axiosInstance.get("get-experience/");
      setexperiences(response.data.data);
      console.log("experience", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      setModifiedData((prevState) => ({
        ...prevState,
        [name]: event.target.files[0],
      }));
      setFormData((prevState) => ({
        ...prevState,
        [name]: event.target.files[0],
      }));
      console.log(modifiedData);
    } else {
      setModifiedData((prevState) => ({ ...prevState, [name]: value }));
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      console.log(modifiedData);
    }
  };

  const HandleUpdate = async (event) => {
    event.preventDefault();

    if (addExperience) {
      try {
        const response = await axiosInstance.post(
          "add-experience/",
          modifiedData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        fetchExperience();
        setAddExperience(true);
        setshow_edit_modal(false);
        toast.success(response.data.message);
        setModifiedData({});
        setFormData({
          designation: "",
          company: "",
          start: "",
          end: "",
          description: "",
        });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error.non_field_errors[0]);
        console.log(error.response.data.error.non_field_errors[0]);
      }
    } else {
    }
  };

  const handleModelFormclose = () => {
    if (addExperience) {
      setAddExperience(true);
      setshow_edit_modal(false);
    } else {
    }
  };

  const handleAddExperience = () => {
    console.log("called");
    setAddExperience(true);
    setshow_edit_modal(true);
  };

  const ConfirmDelete = async () => {
    try {
      const response = await axiosInstance.delete(`delete-expereince/${Id}/`);
      setShow(false);
      fetchExperience();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = (id) => {
    setId(id);
    console.log(id);
    setShow(true);
  };

  const handleEdit = () => {
    navigate("profile-edit");
  };

  const handleApplyedJobs = () => {
    navigate("my-jobs");
  };

  return (
    <div className="w-full   h-fit flex flex-col-reverse   md:flex-row">
      <div className=" w-full md:w-10/12  mx-auto">
        <div className="w-full lg:w-10/12 mx-auto p-4 text-center brightness-100  border-x-1 border-gray-200   rounded-t-lg shadow sm:p-8 bg-fixed  bg-[url('https://media.istockphoto.com/id/624544640/vector/modern-city-background.jpg?s=612x612&w=0&k=20&c=-ERJ7hlG7wX_Ake0DiEXoU8Sp7hMI9tM_s-9Ags7fHQ=')] rounded-lg drop-shadow-2xl backdrop-grayscale-0 bg-white/30">
          <div className="flex flex-col items-center rounded-lg drop-shadow-2xl ">
            <img
              className="object-cover h-36 w-36 mb-3 rounded-full shadow-lg"
              src={
                UserProfile.profile_picture
                  ? `${base_url}${UserProfile.profile_picture}`
                  : " https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              }
              alt="Bonnie image"
            />

            <h5 className="mb-1 text-3xl font-medium text-slate-950 uppercase dark:text-white font-serif">
              {UserProfile.firstname}
            </h5>
            {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
          </div>
          <div className="w-full lg:w-10/12 mx-auto border rounded-lg drofont-serif font-mediump-shadow-2xl backdrop-grayscale-0 bg-white/30 p-3 lg:p-5">
            <div className="w-full md:w-10/12 mx-auto font-serif mb-3 mt-5 p-1 md:p-4 border-3 ">
              <p className="text-xl mb-3 text-bold ">
                Profile Completed &nbsp;{" "}
                <span className="" type="button" onClick={handleEdit}>
                  <i
                    className={`fa-solid  fa-pen-fancy ${
                      profileComp < 90 ? "fa-bounce" : "fa-fade"
                    }`}
                  ></i>
                </span>
              </p>
              <ProfileStatusBar status={profileComp} />
            </div>
            <div className="   flex flex-col lg:flex-row  ">
              <div className="   w-full lg:w-1/2  text-start  ">
                <p className="text-base text-current my-3 font-sans">
                  First name :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium">
                    {UserProfile.user}
                  </span>
                </p>
                <p className="text-base text-current my-3 font-sans">
                  email :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium">
                    {UserProfile.email}
                  </span>
                </p>
                <p className="text-base text-current  my-2 font-sans">
                  Mobile :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium">
                    {UserProfile.mobile}
                  </span>
                </p>
              </div>
              <div className=" w-full lg:w-1/2 lg:ml-6 lg:mt-5 text-start ">
                <p className="text-base text-current lg:my-1  font-sans">
                  last name :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium">
                    {UserProfile.last_name}
                  </span>
                </p>
                {UserProfile.desired_location && (
                  <p className="text-base text-current my-2 font-sans">
                    location :{" "}
                    <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium">
                      {UserProfile.desired_location}
                    </span>
                  </p>
                )}

                {UserProfile.resume ? (
                  <a
                    href={`${base_url}${UserProfile.resume}`}
                    target="_blank"
                  >
                    <p className="text-neutral-950 text-lg w-1/2 text-center font-mono bg-cyan-100 visited:text-cyan-600 border drop-shadow-2xl my-3 border-gray-800 rounded-lg p-2">
                      Resume
                    </p>
                  </a>
                ) : (
                  <p
                    className="text-neutral-950 text-lg w-1/2 text-center bg-cyan-50 visited:text-cyan-600 border drop-shadow-2xl my-3 border-gray-800 rounded-lg p-2"
                    type="button"
                    onClick={handleEdit}
                  >
                    Upload Resume
                  </p>
                )}
              </div>
            </div>
            <div className="w-full text-start">
              {UserProfile.qualification && (
                <p className="text-base text-current lg:my-2  font-sans">
                  Qualification :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium break-words">
                    {UserProfile.qualification}
                  </span>
                </p>
              )}

              {UserProfile.skills && (
                <p className="text-base text-current lg:my-2  font-sans">
                  Skills :{" "}
                  <span className="font-mono text:sm md:text-lg  text-neutral-950 font-medium break-words">
                    {UserProfile.skills}
                  </span>
                </p>
              )}
              {UserProfile.desired_job && (
                <p className="text-base text-current lg:my-2  font-sans">
                  Desired Job :{" "}
                  <span className="font-mono text:sm md:text-lg text-neutral-950 font-medium break-words">
                    {UserProfile.desired_job}
                  </span>
                </p>
              )}

              {UserProfile.experienced && (
                <>
                  <div className="w-full text-center">
                    <p className="text-base text-current lg:my-2  text-center my-4  font-serif font-semibold text-xl">
                      Experience{" "}
                    </p>

                    <div className="w-full mx-auto  p-2 flex flex-col border-separate border-3 rounded divide-y-4 divide-slate-400/25">
                      {experiences.length > 0 ? (
                        <>
                          {experiences.map((item, index) => (
                            <div
                              key={index}
                              className="md:flex justify-between p-3 text-start"
                            >
                              <div>
                                <p className="text-lg font-bold font-serif capitalize subpixel-antialiased text-zinc-950">
                                  {item.company}
                                </p>
                                <p className="text-md font-medium font-mono md:ms-4 capitalize text-lime-950">
                                  -{item.designation}
                                </p>
                                {item.certificate ? (
                                  <a
                                    href={`${base_url}${item.certificate}`}
                                    target="_blank"
                                  >
                                    <p>
                                      <i className="fa-solid fa-file-circle-check"></i>
                                    </p>
                                  </a>
                                ) : null}
                              </div>
                              <div className="flex font-medium justify-between text-base items-baseline md:mt-6">
                                <div className="flex font-medium justify-between text-base items-baseline">
                                  <p className="text-sm text-green-950">
                                    {item.start}
                                  </p>{" "}
                                  &nbsp;-&nbsp;
                                  <p className="text-sm text-green-950">
                                    {item.end}
                                  </p>
                                </div>

                                <div className="md:p-2 md:ms-2 ">
                                  <p
                                    className="text-green-950 mt-2"
                                    type="button"
                                    onClick={() => HandleDelete(item.id)}
                                  >
                                    <i className={`fa-solid fa-eraser `}></i>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>Add Experience</>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="w-full  m-3 grid justify-items-end  ">
              <div className="flex p-3 ">
                <p className="text-lg me-3 py-2 font-serif font-bold ">
                  Add Experience
                </p>
                <button
                  className="btn btn-outline-warning rounded-full w-14 h-14 p-2.5 text-xl text-center"
                  onClick={handleAddExperience}
                >
                  <i className="fa-solid fa-plus fa-bounce"></i>
                </button>
              </div>
            </div>

            {UserProfile.bio && (
              <div className="w-full text-center">
                <p className="text-base text-current lg:my-2 text-center my-4  font-serif font-medium text-xl">
                  Bio{" "}
                </p>
                <p className="text-base text-current break-words    font-sans">
                  {" "}
                  <span className="font-mono text-xl lg:my-3 text-neutral-950 font-medium break-words">
                    {UserProfile.bio}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:h-32 "></div>
      </div>

      <div className="md:w-2/12 p-3">
        <div className="w-full rounded-lg shadow-md  border p-2 flex  ">
          <div
            className="mx-auto p-3 "
            type="button"
            onClick={handleApplyedJobs}
          >
            {" "}
            <i className="fa-solid fa-bookmark"></i> My Jobs
          </div>
        </div>
      </div>

      {/* Add Experience modal */}

      <Modal
        show={show_edit_modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="h-5/6 mt-6"
      >
        <Modal.Header>
          <Modal.Title>
            <p className="ml-32 font-semibold text-2xl font-serif text-zinc-600">
              {addExperience ? "Add Experience" : "Edit"}
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={HandleUpdate}
          >
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                for="username"
              >
                Company
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required={addExperience}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-sm font-bold mb-2"
                for="username"
              >
                Designation
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="designation"
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required={addExperience}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-400 text-sm font-bold mb-2"
                for="username"
              >
                Description
              </label>
              <input
                className="shadow h-36 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required={addExperience}
                style={{ height: "auto" }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-400 text-sm font-bold mb-2"
                for="username"
              >
                Certificate
              </label>
              <input
                className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="certificate"
                type="file"
                name="certificate"
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 flex">
              <div className="">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="start"
                >
                  Start
                </label>
                <input
                  className="shadow appearance-none mx-auto border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="start"
                  type="date"
                  name="start"
                  value={formData.start}
                  onChange={handleInputChange}
                  required={true}
                  max={formData.end}
                />
              </div>

              <div>
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="end"
                >
                  End
                </label>
                <input
                  className="shadow mx-auto appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="end"
                  type="date"
                  name="end"
                  value={formData.end}
                  onChange={handleInputChange}
                  required={true}
                  min={formData.start}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="btn btn-outline-secondary text-lg"
                type="submit"
              >
                {addExperience ? "ADD" : "EDIT"}
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleModelFormclose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting this experience will remove it permanently. Proceed with
          deletion?
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

export default Profile;
