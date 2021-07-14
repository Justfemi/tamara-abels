import React from "react";
import AuthStyles from "../../Styles/AuthStyles";

const AuthLayout = ({ bg, children }) => {
  return (
    <AuthStyles bg={bg}>
      <div className="img-side"></div>
      <div className="form-side">{children}</div>
    </AuthStyles>
  );
};

export default AuthLayout;
