import React from "react";

function RegisterForm({ name, email, password, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          value={name}
          name="name"
          className="form-control"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          value={email}
          name="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          className="form-control"
          id="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
