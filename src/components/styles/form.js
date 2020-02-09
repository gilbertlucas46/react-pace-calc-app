import styled from "styled-components";

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.blueLight};
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: ${props => props.theme.radius.body};
  color: ${props => props.theme.colors.white};
  label {
    display: block;
    margin-bottom: 1rem;
  }
  .Inputs {
    flex-flow: inherit;
    margin: 0 5px;
    > div {
      &:hover {
        &:before {
          border-bottom: 2px solid rgba(42, 47, 67, 0.4);
        }
      }
      &:before {
        border-bottom: 2px solid ${props => props.theme.colors.borderColor};
      }
    }
    > div,
    svg {
      color: ${props => props.theme.colors.purpleLight};
    }
  }
  .paces {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    div {
      justify-content: space-evenly;
    }
    text-align: center;
    small {
      color: ${props => props.theme.colors.purpleLight};
      font-weight: normal;
      font-size: 14px;
    }
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    height: 32px;
    border: 0;
    border-radius: 4px;
    color: ${props => props.theme.colors.purpleLight};
  }
  button {
    width: auto;
    background: #f26101;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    width: 100%;
    legend {
      color: ${props => props.theme.colors.purpleLight};
      font-size: 1em;
      margin-bottom: 0.3em;
      line-height: 2em;
    }
    &.title {
      legend {
        margin-bottom: 0.6em;
      }
      &:before {
        height: 2px;
      }
    }
    > div {
      display: flex;
      justify-content: center;
      margin: 0.8em -5px;
      .Inputs {
        flex-flow: inherit;
        margin: 0 5px;
        div {
          height: 42px;
          line-height: 42px;
          &:focus {
            background-color: transparent;
          }
        }
      }
    }
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #38c3d8 0%,
        #655fff 50%,
        #38c3d8 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
    }
  }
`;

export default Form;
