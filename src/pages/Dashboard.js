import React from "react";
import DashboardDisplay from "../components/DashboardDisplay";
import DashboardTopNav from "../components/DashboardTopNav";
import Formatio from "../components/FormatioHead/Formatio";
import LeftNav from "../components/LeftNav";

function Dashboard(){
    return(
        <div>
            <Formatio/>
            <DashboardTopNav />
            <DashboardDisplay />
            <LeftNav />
        </div>
    );
}

export default Dashboard;