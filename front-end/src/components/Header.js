import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Color from "../constants/Color";

const Main = styled.form`
  height: 70vh;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  color: white;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter-brightness(50%);
`;
const Input = styled.input`
  width: 90%;
  height: 40px;
  padding: 5px;
  margin-top: ${(props) => (props.error === "" || !props.error ? 30 : 0)}px;
  border: 0;
  border-bottom: 1px solid;
  outline: none;
  font-size: 20px;
  background-color: ${Color.primary};
  color: white;
  border-radius: 4px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-input-placeholder {
    color: white;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const Form = styled.form`
  height: 450px;
  max-width: 400px;
  min-width: 400px;
  background-color: ${Color.primary};
  margin-top: 5%;
  opacity: 0.8;
  border-radius: 10px;
  @media screen and (max-width: 810px) {
    margin-top: 15%;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
    this.state = {
      email: "",
      number: "",
      name: "",
      city: "",
      formErrors: { email: "", name: "", number: "", city: "" },
      emailValid: false,
      numberValid: false,
      nameValid: false,
      cityValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.name;
    let numberValid = this.state.number;
    let cityValid = this.state.city;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Enter valid email.";
        break;
      case "name":
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? "" : "Enter your name.";
        break;
      case "number":
        numberValid = value.length >= 10;
        fieldValidationErrors.number = numberValid
          ? ""
          : "Enter valid phone number.";
        break;
      case "city":
        cityValid = value.length >= 1;
        fieldValidationErrors.city = cityValid ? "" : "Enter city name.";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        numberValid: numberValid,
        cityValid: cityValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.numberValid &&
        this.state.cityValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  submitHandler() {
    this.setState({
      submit: true,
    });
  }

  render() {
    var today = new Date();
    var date1 =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = date1 + " " + time;
    var name = this.state.name;
    var email = this.state.email;
    var number = this.state.number;
    var city = this.state.city;
    var type = this.props.type;
    const Submit = () => {
      this.submitHandler();
    };

    async function postUserInfo(e) {
      e.preventDefault();
      //post
      try {
        await axios.post("http://localhost:3000/orders", {
          name,
          number,
          email,
          city,
          type,
          date,
        });
      } catch (error) {
        console.log(error);
      }
      Submit();
    }
    return (
      <Main className="row" bg={this.props.bg}>
        <div className="col" style={{ maxWidth: "50%", minWidth: 400 }}>
          <p
            style={{
              fontSize: 45,
              fontWeight: "bold",
              marginTop: "10%",
              textShadow: `4px 4px 4px black`,
            }}
          >
            {console.log(this.state.submit)}
            {this.props.title}
          </p>
          <p
            style={{
              fontSize: 21,
              textShadow: `3px 3px 3px  ${Color.primary}`,
            }}
          >
            {this.props.text}
          </p>
        </div>
        <Form className="col border-primary">
          {!this.state.submit ? (
            <>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.name
                )}`}
              >
                <Input
                  value={this.state.name}
                  onChange={this.handleUserInput}
                  placeholder="Your Name"
                  type="name"
                  name="name"
                />
                {this.state.formErrors.name !== "" && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: 20,
                      marginTop: 5,
                      textAlign: "left",
                    }}
                  >
                    {this.state.formErrors.name}
                  </p>
                )}
              </div>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.email
                )}`}
              >
                <Input
                  value={this.state.email}
                  onChange={this.handleUserInput}
                  placeholder="Your email"
                  type="email"
                  name="email"
                  error={this.state.formErrors.name}
                />
                {this.state.formErrors.email !== "" && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: 20,
                      marginTop: 5,
                      textAlign: "left",
                    }}
                  >
                    {this.state.formErrors.email}
                  </p>
                )}
              </div>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.number
                )}`}
              >
                <Input
                  value={this.state.number}
                  onChange={this.handleUserInput}
                  placeholder="Your contact number"
                  maxLength={10}
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  type="number"
                  name="number"
                  error={this.state.formErrors.number}
                />
                {this.state.formErrors.number !== "" && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: 20,
                      marginTop: 5,
                      textAlign: "left",
                    }}
                  >
                    {this.state.formErrors.number}
                  </p>
                )}
              </div>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.city
                )}`}
              >
                <Input
                  value={this.state.city}
                  onChange={this.handleUserInput}
                  placeholder="Your city"
                  type="text"
                  name="city"
                  error={this.state.formErrors.number}
                />
                {this.state.formErrors.city !== "" && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: 20,
                      marginTop: 5,
                      textAlign: "left",
                    }}
                  >
                    {this.state.formErrors.city}
                  </p>
                )}
              </div>

              <button
                onClick={postUserInfo}
                disabled={!this.state.formValid}
                style={{ flex: 1, margin: 20 }}
                type="submit"
                class="btn btn-primary btn-lg btn-block"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <h3 style={{ marginTop: 30 }}>
                Thank you for sharing the details.
              </h3>

              <p>
                Your details have been sent to our team and they will get back
                to you shortly.
              </p>
            </>
          )}
        </Form>
      </Main>
    );
  }
}

export default Header;

// const Header = ({ title, text, bg, type }) => {
//   const [name, setName] = useState("");
//   const [nameValid, setNameValid] = useState(false);
//   const [email, setEmail] = useState("");
//   const [emailValid, setEmailValid] = useState(false);
//   const [number, setNumber] = useState("");
//   const [numberValid, setNumberValid] = useState(false);
//   const [city, setCity] = useState("");
//   const [cityValid, setCityValid] = useState(false);
//   const [formValid, setFormValid] = useState(false);
//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     email: "",
//     number: "",
//     city: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

// var today = new Date();
// var date1 =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var date = date1 + " " + time;
// var type = type;

//   const handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     if (name === "name") {
//       setName(value);
//     } else if (name === "number") {
//       setNumber(value);
//     } else if (name === "email") {
//       setEmail(value);
//     } else if (city === "city") {
//       setCity(value);
//     }
//   };
//   const validateField = (fieldName, value) => {
//     let fieldValidationErrors = formErrors;
//     let emailVal = emailValid;
//     let cityVal = cityValid;
//     let nameVal = nameValid;
//     let numberVal = numberValid;
//     // let passwordValid = this.state.passwordValid;

//     switch (fieldName) {
//       case "email":
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailVal ? "" : " is invalid";
//         break;

//       case "name":
//         name = value.length >= 0;
//         fieldValidationErrors.name = nameVal ? "" : " is too short";
//         break;

//       // case "password":
//       //   passwordValid = value.length >= 6;
//       //   fieldValidationErrors.password = passwordValid ? "" : " is too short";
//       //   break;
//       default:
//         break;
//     }
//     {
//       validateForm && setFormErrors(fieldValidationErrors);
//       validateForm && setEmailValid(emailVal);
//       validateForm && setNameValid(nameVal);
//     }
//   };
//   const validateForm = () => {
//     setFormValid(emailValid && nameValid);
//   };

//   const errorClass = (error) => {
//     return error.length === 0 ? "" : "has-error";
//   };

// async function postUserInfo(e) {
//   e.preventDefault();
//   setSubmitted(true);
//   //post
//   try {
//     await axios.post("http://localhost:3000/userinfo", {
//       name,
//       email,
//       number,
//       city,
//       type,
//       date,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

//   const submitHandler = () => {
//     setSubmitted(true);
//   };
// return (
//   <Main className="row" bg={bg}>
//     <div className="col" style={{ maxWidth: "50%", minWidth: 400 }}>
//       <p
//         style={{
//           fontSize: 45,
//           fontWeight: "bold",
//           marginTop: "10%",
//           textShadow: `4px 4px 4px black`,
//         }}
//       >
//         {title}
//       </p>
//       <p
//         style={{
//           fontSize: 21,
//           textShadow: `3px 3px 3px  ${Color.primary}`,
//         }}
//       >
//         {text}
//       </p>
//     </div>
//     <Form onSubmit={postUserInfo} className="col border-primary">
//       {/* {!submitted ? ( */}
//       <>
//         <FormErrors formErrors={formErrors} />
//         <div className={`form-group ${errorClass(formErrors.name)}`}>
//           <Input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name"
//             type="name"
//             name="name"
//           />
//         </div>
//         <div className={`form-group ${errorClass(formErrors.email)}`}>
//           <Input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your email"
//             type="email"
//             name="email"
//           />
//         </div>
//         {/* <Input
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           placeholder="Your contact number"
//           type="tel"
//           maxLength="10"
//           name="number"
//         /> */}

//         {/* <Input
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Your city"
//           type="text"
//           name="city"
//         /> */}
//         <button
//           disabled={!formValid}
//           style={{ flex: 1, margin: 20 }}
//           type="submit"
//           class="btn btn-primary btn-lg btn-block"
//         >
//           Submit
//         </button>
//       </>
//       {/* ) : (
//       <>
//         <h3 style={{ marginTop: 30 }}>
//           Thank you for sharing the details.
//         </h3>

//         <p>
//           Your details have been sent to our team and they will get back to
//           you shortly.
//         </p>
//       </>
//       )} */}
//     </Form>
//   </Main>
// );
// };

// export default Header;
