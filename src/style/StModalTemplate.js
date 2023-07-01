import styled from 'styled-components';

const ModalTemplate = styled.div`
  width: 400px;
  height: 500px;
  background-color: #495057;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 8px 15px rgb(0 0 0 / 50%);

  header {
    display: flex;
    height: 10%;
    div {
      margin-left: auto;
      cursor: pointer;
      svg {
        font-size: 1.7rem;
        &:hover {
          color: white;
        }
      }
    }
  }

  .body {
    display: block;
    height: 70%;
    flex-direction: column;
    width: 100%;
    background: #e9ecef;
    div {
      display: flex;
      padding-top: 11px;
      padding: 12px 10px 16px 8px;
      input {
        width: 100%;
        border: none;
        background-color: transparent;
        font-size: 20px;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
        p {
          display: inline;
        }
      }
    }
    textarea {
      width: 100%;
      height: 70%;
      padding: 15px 10px;
      resize: none;
      border: none;
      border-top: 1px solid grey;
      background: transparent;
      white-space: pre-wrap;
      word-break: break-all;
      box-sizing: border-box;
      /* margin-top: 18px; */

      &:focus {
        outline: none;
      }
    }
    p {
      display: block;
      box-sizing: border-box;
      float: right;
      padding: 10px;
      display: flex;
    }

    h1 {
      padding: 20px 10px 24px 10px;
      width: 100%;
      padding-left: 10px;
      border: none;
      font-size: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid grey;
      /* word-break: break-all; */
    }

    h3 {
      display: block;
      line-height: 1.45;
      width: 100%;
      height: 80%;
      padding: 15px 11px;
      resize: none;
      border: none;
      box-sizing: border-box;
      font-size: 0.83rem;
      background: transparent;
      overflow-y: scroll;
      overflow-wrap: break-word;
      word-break: break-all;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    height: 20%;
    align-items: center;
    justify-content: center;
    button {
      background-color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        font-size: 1.1rem;
      }
    }
  }
`;

export default ModalTemplate;
