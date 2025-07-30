import React, { Component } from "react"
import "./Login.css"

class Login extends Component {
  state = { email: "", password: "" }

  handleSubmit = (event) => {
    event.preventDefault()
    // Handle login logic here
    if (this.state.email === "vijay" && this.state.password === "123") {
      alert("Login successful!")
      // Redirect to home or dashboard
      window.location.href = "/home"
    } else {
      alert("Invalid credentials, please try again.")
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-heading">Welcome Back to CasaMart</h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />

            <button type="submit">Login</button>
            <p className="login-footer">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
            <i>
              <strong>Email: </strong>vijay
            </i>
            <i>
              <strong>Password: </strong>123
            </i>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
