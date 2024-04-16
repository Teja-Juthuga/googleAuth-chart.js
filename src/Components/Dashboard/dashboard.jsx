import React from "react";
import "./dashboard.css"
import { MyChart } from "../Chart/chart";

export const Dashboard = () => {
    return (
      <div className="main-container">
        <div className="sidebar">
            <h1> Board. </h1>
            <div className="options-container">
              <div>
                <p className="option"><i className="fa-solid fa-chart-pie"></i> Dashboard </p>
                <p className="option"><i className="fa-solid fa-tags"></i> Transactions </p>
                <p className="option"><i className="fa-solid fa-calendar-day"></i> Schedules </p>
                <p className="option"><i className="fa-solid fa-user"></i> Users </p>
                <p className="option"><i className="fa-solid fa-gear"></i> Settings </p>
              </div>
              <div>
                <p>Help</p>
                <p>Contact Us</p>
              </div>
            </div>
        </div>
        <main>
          <div className="dashboard-container"> 
            <div> 
              <h1> Dashboard </h1>
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass icon"></i>
              <i class="fa-solid fa-bell icon"></i>
              <i className="fa-solid fa-user icon"></i>
            </div>
          </div>
          <div style={{display:"flex",}}>
            <div className="card card-1">
              <div style={{textAlign:"end",}}>
                <i className="fa-solid fa-money-bill" ></i>
              </div>
              <p> Total Revenues </p>
              <h2>  &#x24; 2,129,430 </h2>
            </div>
            <div className="card card-2">
              <div style={{textAlign:"end",}}>
                <i className="fa-solid fa-tags" ></i>
              </div>
              <p> Total Transactions </p>
              <h2> 1,520 </h2>
            </div>
            <div className="card card-3">
              <div style={{textAlign:"end",}}>
                <i className="fa-solid fa-thumbs-up" ></i>
              </div>
              <p> Total Likes </p>
              <h2> 9,721 </h2>
            </div>
            <div className="card card-4">
              <div style={{textAlign:"end",}}>
                <i className="fa-solid fa-users" ></i>
              </div>
              <p> Total Users </p>
              <h2> 892 </h2>
            </div>
          </div>
          <div style={{height:"80%", width:"75%"}}>
            <MyChart />
          </div>
        </main>
      </div>
    )
} 