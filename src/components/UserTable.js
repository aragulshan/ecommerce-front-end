import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
// import { fetchUsers, selectAllUsers } from "../redux/slices/userSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users); // Use consistent naming
  console.log(users,'users are')

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {users?.length === 0 ? (
        <p className="text-center text-gray-600">No Users Found</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Contact</th>
            </tr>
          </thead>
          <tbody>
            {users && users?.map((user) => {
                return (
                  <tr key={user._id}>
                    <td className="py-2 px-4 border-b">{user._id}</td>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.contact}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
