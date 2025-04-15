import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span style={{ color: 'black' }}>Loading...</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 5px solid #e74c3c;
    position: relative;
    animation: load 2s linear infinite;
  }

  .loader::before,.loader::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .loader::before {
    border-top: 5px solid #e67e22;
    transform: rotate(120deg);
  }

  .loader::after {
    border-top: 5px solid #3498db;
    transform: rotate(240deg);
  }

  .loader span {
    position: absolute;
    font-size: small;
    width: 100px;
    height: 100px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    animation: a2 2s linear infinite;
  }

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes a2 {
    to {
      transform: rotate(-360deg);
    }
  }`;

export default Loading;
