import styled from "styled-components";

const AuthStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  .img-side {
    width: 49%;
    height: 450px;
    background: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;    
  }

  .form-side {       
    width: 51%;
  }
`;

export default AuthStyles;
