import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "../store/actions/usersAction";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterAdmin() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const dispatch = useDispatch();

  const handleOnChangeForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    dispatch(registerAdmin(user));
    if (!user.email || !user.password) {
      return;
    }
    handleResetForm(e);
  };
  const handleResetForm = (e) => {
    e.preventDefault();
    setUser({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    });
  };
  return (
    <div className="ml-64 px-4 py-6">
      <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
        <form onSubmit={handleSubmitForm} className="mt-5">
          <div className="flex flex-wrap justify-between content-center border-y py-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-6/12"
              name="username"
              onChange={handleOnChangeForm}
              value={user.username}
            />
          </div>
          <div className="flex flex-wrap justify-between content-center border-b py-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded px-2 py-1 w-6/12"
              name="email"
              onChange={handleOnChangeForm}
              value={user.email}
            />
          </div>
          <div className="flex flex-wrap justify-between content-center border-b py-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded px-2 py-1 w-6/12"
              name="password"
              onChange={handleOnChangeForm}
              value={user.password}
              autoComplete="false"
            />
          </div>
          <div className="flex flex-wrap justify-between content-center border-b py-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-6/12"
              name="phoneNumber"
              onChange={handleOnChangeForm}
              value={user.phoneNumber}
            />
          </div>
          <div className="flex flex-wrap justify-between content-center border-b py-4">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              className="border border-gray-300 rounded px-2 py-1 w-6/12"
              name="address"
              onChange={handleOnChangeForm}
              value={user.address}
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleResetForm}
              className="px-4 py-2 rounded-lg bg-primary-yellow text-white hover:bg-yellow-600 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
