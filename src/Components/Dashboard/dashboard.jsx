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
          <div style={{height:"80%", width:"75%"}}>
            <MyChart />
          </div>
        </main>
      </div>
    )
} 