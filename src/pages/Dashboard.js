import React from "react";
import AddButton from "../components/AddButton";
import DashboardDisplay from "../components/DashboardDisplay/DashboardDisplay";
import DashboardTopNav from "../components/DashboardTopNav";
import Formatio from "../components/FormatioHead/Formatio";
import LeftNav from "../components/LeftNav";

function Dashboard() {
  return (
    <div>
      <Formatio />
      <DashboardTopNav />
      <DashboardDisplay />
      <LeftNav />
      <AddButton />
    </div>
  );
}

export default Dashboard;
