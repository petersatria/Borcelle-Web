import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { loginAdmin } from "../store/actions/usersAction";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.users);
  const onChangeHandler = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(user));
    if (!user.email || !user.password) return;
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <section className="h-screen bg-primary-yellow flex items-center justify-center">
      <div className="bg-white w-96 rounded-md shadow-sm p-6">
        <div className="flex items-center justify-center ">
          <img src={logo} alt="" className="h-60" />
        </div>
        <h1 className="mt-2 mb-6 text-lg text-center font-semibold tracking-wide">
          Sign in to your account
        </h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            onChange={onChangeHandler}
            type="email"
            name="email"
            className="w-full p-2 bg-gray-50 outline-none mb-4 rounded-md border border-gray-200 focus:border-primary-yellow focus:bg-gray-200"
            value={user.email}
          />
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input
            onChange={onChangeHandler}
            type="password"
            name="password"
            className="w-full p-2 bg-gray-50 outline-none mb-4 rounded-md border border-gray-200 focus:border-primary-yellow focus:bg-gray-200"
            value={user.password}
            autoComplete="false"
          />
          <button className="py-2 px-6 bg-primary-yellow text-white rounded-md w-full mt-4 hover:bg-yellow-600">
            Login
          </button>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}
