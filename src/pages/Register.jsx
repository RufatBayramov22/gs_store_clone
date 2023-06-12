import React, { useState, } from "react";
import {  useNavigate,  } from "react-router-dom";
//router
import { Link,} from "react-router-dom";

//images
import FormImg from "../assets/images/formImg/second page.webp";

//form Yup
import { object, string } from "yup";
import { errorSwal, successSwal } from "../utils/swal";

const Register = () => {
  const [newUser, setnewUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

const navigate=useNavigate();

  const registerSchema = object({
    password: string()
    .trim()
    .required("Please enter your password !")
    .min(8, "Password must be longer than 8 characters!")
    .max(18, "Password must be less than 18 characters!"),
    email: string().email().required("Please enter your e-mail!"),
    number: string()
    .trim()
    .required("Please enter your phone number !")
    .min(3, "Number should't be less than three characters!")
    .max(16, "Number must't be more than sixteen characters!"),
    lastName: string()
    .trim()
      .required("Please include your surname!")
      .min(3)
      .max(20),
    userName: string().required("Please include your name!").min(3),



  });

  const registerForm = async (e) => {
    e.preventDefault();
    try {
      await registerSchema.validate(newUser);
      successSwal("You are Registered !");
    } catch (error) {
      errorSwal("error", error.message);
    }
  };
  return (
    <main>
      <section className="uyeOl">
        <div className="contanier">
          <div className="row">
            <div className="formInfo">
              <div className="formTitle">
                <Link className="loginSite" to="/login">
                  Giriş Yap
                </Link>
                <Link className="register" to="/register">
                  Üye Ol
                </Link>
              </div>
              <div className="loginForm">
                <form className="form">
                  <div className="info">
                    <span className="name">Ad</span>
                    <input
                      type="text"
                      required
                      name="userName"
                      value={newUser.userName}
                      onChange={handleChange}
                    />
                    <span className="surname">Soyad</span>
                    <input
                      type="text"
                      required
                      name="lastName"
                      value={newUser.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact">
                    <span className="number">CEP TELEFONU</span>
                    <input
                      type="number"
                      required
                      name="number"
                      value={newUser.number}
                      onChange={handleChange}
                    />
                    <span className="email">E-POSTA</span>
                    <input
                      type="email"
                      required
                      name="email"
                      value={newUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="security">
                    <span className="password">ŞİFRE</span>
                    <input
                      type="password"
                      required
                      name="password"
                      value={newUser.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="formBtn">
                    <Link>
                    <button className="btn" onClick={registerForm} onSubmit={()=>{
                      navigate("/")
                    }}>
                      Üye Ol</button>
                    </Link>
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

export default Register;
