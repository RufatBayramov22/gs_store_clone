import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormImg from "../assets/images/formImg/first page.webp";

//form Yup
import { object, string } from "yup";

//swal

import "sweetalert2/src/sweetalert2.scss";
import { errorSwal, successSwal } from "../utils/swal";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginSchema = object({
    password: string()
    .trim()
      .min(8, "Password must be longer than 8 characters!")
      .max(18, "Password must be less than 18 characters!"),
    email: string()
    .trim()
      .email("Please enter your e-mail!")
      .required("Please enter your email!"),
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate(user);
      successSwal("You are loggid in !");
    } catch (error) {
      errorSwal("error", error.message);
    }
  };

  return (
    <main>
      <section className="registration">
        <div className="contanier">
          <div className="row">
            <div className="formInfo">
              <div className="formTitle">
                <Link className="login" to="/login">
                  Giriş Yap
                </Link>
                <Link className="register" to="/register">
                  Üye Ol
                </Link>
              </div>
              <div className="loginForm">
                <form className="form">
                  <div className="registerForms">
                    <div className="emailForm">
                      <span className="email">E-POSTA</span>
                      <input
                        type="email"
                        className="inpEmail"
                        required
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="passwordForm">
                      <span className="password">ŞİFRE</span>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="btnForm">
                      <button className="btn" onClick={submitForm} >
                        Giriş Yap
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="formImg">
              <img src={FormImg} alt="" />
              <div className="gradientColor"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
