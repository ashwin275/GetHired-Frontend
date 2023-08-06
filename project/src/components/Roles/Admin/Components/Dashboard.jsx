import React, { useEffect, useState } from "react";
import axiosadminInstance from "../../../Axios/AdminAxios";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function Dashboard() {
  const [user, Setusers] = useState(0);
  const [recruiters, setRecruiters] = useState(0);
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosadminInstance.get("admin/admin-view/");
      console.log(response, "admin view api test111111111");
      Setusers(response.data.user_count);
      setRecruiters(response.data.recruiter_count);
      setRevenue(response.data.revenue);
    } catch (error) {
      console.log(error, "admin view api test");
    }
  };

  const labels = ["users", "recruiters"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: ["users","recruiters"],
        backgroundColor: ["#A9E9FB", "#D1FEA8"], 
        
        data: [user, recruiters],
      },
    ],
  };

  return (
    <div className="4/5 p-5">
      <div className="w-full p-4 text-center bg-white   sm:p-8">
        <div className="3/5 px-5 flex justify-between bg-grey-100 mx-auto ">
          <div className="h-32 border w-52 rounded-lg p-3 shadow-md bg-slate-100">
            <p className=" text-2xl font-serif font-normal mb-3 text-lime-950 ">
              Users{" "}
            </p>
            <p className="mt-3 text-3xl font-semibold font-serif">{user}</p>
          </div>
          <div className="h-32 border w-52 rounded-lg p-3 shadow-md bg-slate-100">
            <p className=" text-2xl font-serif font-normal mb-3 text-lime-950 ">
              Recruiters{" "}
            </p>
            <p className="mt-3 text-3xl font-semibold font-serif">
              {recruiters}
            </p>
          </div>
          <div className="h-32 border w-52 rounded-lg p-3 shadow-md bg-slate-100">
            <p className=" text-2xl font-serif font-normal mb-3 text-lime-950 ">
              Revenue{" "} <p className="text-sm"></p>
            </p>
           
            <p className="mt-2 text-3xl font-semibold font-serif">
              {" "}
              ${revenue}
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 p-3 h-96  mx-auto flex justify-center">
        <div className="w-4/5 p-3 h-96 mx-auto flex justify-center">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
