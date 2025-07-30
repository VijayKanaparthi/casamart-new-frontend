import React, { Component } from "react"
import "./Signup.css"
import { Link } from "react-router-dom"

class Signup extends Component {
  render() {
    return (
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="signup-heading">Join CasaMart</h2>
          <form className="signup-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <button
              type="submit"
              onClick={alert(
                "Please log in using the credentials provided below. This is for demonstration purposes only."
              )}
            >
              Sign Up
            </button>
            <p className="signup-footer">
              Already have an account? <Link href="/login">Log in</Link>
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

export default Signup
