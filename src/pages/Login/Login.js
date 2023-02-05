import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../src/firebase.init";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hook/useToken";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading || gLoading) {
    return <Loading />;
  }

  let signInError;
  if (error || gError) {
    signInError = (
      <p className=" text-red-500 text-center">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-center text-2xl font-bold">Login</h2>
          <div className=" bg-slate-700 text-yellow-50 px-3 py-1">
            <p>Login Test email...</p>
            <pre>Email: admin@hotmail.com</pre>
            <pre>Password: bd@1234</pre>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
                type="email"
                placeholder="Type your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-rose-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-rose-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Type your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-rose-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-rose-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn btn-active w-full max-w-xs uppercase"
              type="submit"
              value="Login"
            />
          </form>
          <p className=" font text-sm text-center">
            New to Law Firm service?{" "}
            <Link to="/signUp" className=" text-primary">
              Create new account
            </Link>
          </p>
          {signInError}
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline uppercase"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
