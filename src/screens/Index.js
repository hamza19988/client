import React from "react";
import AbsenceGlobal from "./AbsenceGlobal";
import Dashboard from "./Dashboard";
import HomeAdmin from "./HomeAdmin";
import Login from "./Login";
import StaffDashboard from "./StaffDashboard";
import TimeManagementDashboard from "./TimeManagementDashboard";

export const HomeAdminScreen = () => <HomeAdmin name="Home" />;
export const DashboardScreen = () => <Dashboard name="Dashboard" />;
export const TimeManagementDashboardScreen = () => (
  <TimeManagementDashboard name="TimeManagementDashboard" />
);
export const StaffDashboardScreen = () => (
  <StaffDashboard name="StaffDashboard" />
);
export const AbsenceGlobalScreen = () => <AbsenceGlobal name="AbsenceGlobal" />;

export const LoginScreen = () => <Login name="Login" />;
