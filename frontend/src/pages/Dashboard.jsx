import React from "react";

const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 flex p-4 md:p-8">

    <div className="bg-white rounded-lg shadow-lg w-full md:h-5/6 flex flex-col items-center justify-center p-6 md:p-12">
      <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6 md:mb-12 text-center">
        Welcome to the Role-Based Access Control Dashboard!
      </h2>
      <p className="text-lg md:text-2xl font-medium text-gray-700 mb-6 text-center">
        Effortlessly manage users, roles, permissions
      </p>
      <ul className="list-disc text-sm md:text-lg pl-6 md:pl-8 space-y-2 md:space-y-4">
        <li>Customize Permissions for different user access levels.</li>
        <li>Create, Modify, and Remove User Roles to fit organizational needs.</li>
        <li>Create users and Assign multiple roles to users to provide them with the right access.</li>
        <li>Monitor and Update user status to reflect the activity status.</li>
      </ul>
    </div>
    
  </div>
);

export default Dashboard;

