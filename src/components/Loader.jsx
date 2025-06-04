import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Loader = ({ className, theme }) => {
  return (
    <StyledWrapper className={className} theme={theme}>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    .rocket {
      position: relative;
      width: 40px;
      margin: 0 auto;
    }

    .rocket .rocket-body {
      width: 40px;
      animation: bounce 0.5s infinite;
    }

    .rocket .rocket-body .body {
      background-color: ${theme === 'dark' ? '#4b5563' : '#dadada'};
      height: 90px;
      border-top-right-radius: 100%;
      border-top-left-radius: 100%;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top: 3px solid ${theme === 'dark' ? '#1f2937' : '#f5f5f5'};
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .rocket .rocket-body:before {
      content: '';
      position: absolute;
      left: calc(50% - 12px);
      width: 24px;
      height: 7px;
      background-color: ${theme === 'dark' ? '#6b7280' : '#554842'};
      bottom: -7px;
      border-bottom-right-radius: 60%;
      border-bottom-left-radius: 60%;
      transition: background-color 0.3s ease;
    }

    .rocket .window {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: ${theme === 'dark' ? '#f87171' : '#a75248'};
      left: calc(50% - 12.5px);
      top: 20px;
      border: 3px solid ${theme === 'dark' ? '#4b5563' : '#b4b2b2'};
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .rocket .fin {
      position: absolute;
      z-index: -100;
      height: 28px;
      width: 25px;
      background-color: ${theme === 'dark' ? '#f87171' : '#a75248'};
      transition: background-color 0.3s ease;
    }

    .rocket .fin-left {
      left: -15px;
      top: calc(100% - 28px);
      border-top-left-radius: 80%;
      border-bottom-left-radius: 20%;
    }

    .rocket .fin-right {
      right: -15px;
      top: calc(100% - 28px);
      border-top-right-radius: 80%;
      border-bottom-right-radius: 20%;
    }

    .rocket .exhaust-flame {
      position: absolute;
      top: 90%;
      width: 14px;
      background: linear-gradient(to bottom, transparent 10%, ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'} 100%);
      height: 75px;
      left: calc(50% - 7px);
      animation: exhaust 0.2s infinite;
      transition: background 0.3s ease;
    }

    .rocket .exhaust-fumes li {
      width: 30px;
      height: 30px;
      background-color: ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'};
      list-style: none;
      position: absolute;
      border-radius: 100%;
      transition: background-color 0.3s ease;
    }

    .rocket .exhaust-fumes li:first-child {
      width: 100px;
      height: 100px;
      bottom: -150px;
      animation: fumes 5s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(2) {
      width: 75px;
      height: 75px;
      left: -60px;
      top: 130px;
      animation: fumes 3.2s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(3) {
      width: 60px;
      height: 60px;
      left: -20px;
      top: 165px;
      animation: fumes 3s 1s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(4) {
      width: 50px;
      height: 50px;
      left: -85px;
      animation: fumes 4s 2s infinite;
      top: 190px;
    }

    .rocket .exhaust-fumes li:nth-child(5) {
      width: 65px;
      height: 65px;
      left: -60px;
      top: 175px;
      animation: fumes 5s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(6) {
      width: 100px;
      height: 100px;
      left: -30px;
      top: 140px;
      animation: fumes2 10s infinite;
    }

    .rocket .exhaust-fumes li:nth-child(7) {
      width: 50px;
      height: 50px;
      left: -50px;
      top: 160px;
    }

    .rocket .exhaust-fumes li:nth-child(8) {
      width: 55px;
      height: 55px;
      left: 35px;
      top: 170px;
    }

    .rocket .exhaust-fumes li:nth-child(9) {
      width: 45px;
      height: 45px;
      left: 100px;
      top: 190px;
      animation: fumes 20s infinite;
    }

    .star li {
      list-style: none;
      position: absolute;
    }

    .star li:before, .star li:after {
      content: '';
      position: absolute;
      background-color: ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'};
      transition: background-color 0.3s ease;
    }

    .star li:before {
      width: 5px;
      height: 1px;
      border-radius: 50%;
    }

    .star li:after {
      height: 4px;
      width: 1px;
      left: 2px;
      top: -1.5px;
    }

    .star li:first-child {
      top: -15px;
      left: -105px;
      animation: twinkle 0.4s infinite;
    }

    .star li:nth-child(2) {
      top: 0;
      left: 30px;
      animation: twinkle 0.5s infinite;
    }

    .star li:nth-child(2):before {
      height: 0.5px;
      width: 2.5px;
    }

    .star li:nth-child(2):after {
      width: 0.5px;
      height: 2.5px;
      top: -1px;
      left: 1px;
    }

    .star li:nth-child(3) {
      left: 60px;
      top: 110px;
      animation: twinkle 1s infinite;
    }

    .star li:nth-child(4) {
      left: -50px;
      top: 100px;
      animation: twinkle 0.5s ease infinite;
    }

    .star li:nth-child(5) {
      left: 85px;
      top: 50px;
      animation: twinkle 0.4s ease infinite;
    }

    .star li:nth-child(6) {
      top: 44px;
      left: -40px;
      animation: twinkle 0.2s infinite;
    }

    .star li:nth-child(6):before {
      height: 0.5px;
      width: 2.5px;
    }

    .star li:nth-child(6):after {
      width: 0.5px;
      height: 2.5px;
      top: -1px;
      left: 1px;
    }

    @keyframes fumes {
      50% {
        transform: scale(1.5);
        background-color: transparent;
      }
      51% {
        transform: scale(0.8);
      }
      100% {
        background-color: ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'};
        transform: scale(1);
      }
    }

    @keyframes bounce {
      0% {
        transform: translate3d(0px, 0px, 0);
      }
      50% {
        transform: translate3d(0px, -2px, 0);
      }
      100% {
        transform: translate3d(0px, 0px, 0);
      }
    }

    @keyframes exhaust {
      0% {
        background: linear-gradient(to bottom, transparent 10%, ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'} 100%);
      }
      50% {
        background: linear-gradient(to bottom, transparent 8%, ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'} 100%);
      }
      75% {
        background: linear-gradient(to bottom, transparent 12%, ${theme === 'dark' ? '#d1d5db' : '#f5f5f5'} 100%);
      }
    }

    @keyframes fumes2 {
      50% {
        transform: scale(1.1);
      }
    }

    @keyframes twinkle {
      80% {
        transform: scale(1.1);
        opacity: 0.7;
      }
    }

    /* Fallback for .dark class if theme prop is not used */
    .dark & .rocket .rocket-body .body {
      background-color: #4b5563;
      border-top-color: #1f2937;
    }

    .dark & .rocket .rocket-body:before {
      background-color: #6b7280;
    }

    .dark & .rocket .window {
      background-color: #f87171;
      border-color: #4b5563;
    }

    .dark & .rocket .fin {
      background-color: #f87171;
    }

    .dark & .rocket .exhaust-flame {
      background: linear-gradient(to bottom, transparent 10%, #d1d5db 100%);
    }

    .dark & .rocket .exhaust-fumes li {
      background-color: #d1d5db;
    }

    .dark & .star li:before, .dark & .star li:after {
      background-color: #d1d5db;
    }

    .dark & @keyframes fumes {
      50% {
        transform: scale(1.5);
        background-color: transparent;
      }
      51% {
        transform: scale(0.8);
      }
      100% {
        background-color: #d1d5db;
        transform: scale(1);
      }
    }

    .dark & @keyframes exhaust {
      0% {
        background: linear-gradient(to bottom, transparent 10%, #d1d5db 100%);
      }
      50% {
        background: linear-gradient(to bottom, transparent 8%, #d1d5db 100%);
      }
      75% {
        background: linear-gradient(to bottom, transparent 12%, #d1d5db 100%);
      }
    }
  `}
`;

Loader.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
};

Loader.defaultProps = {
  theme: 'light',
};

export default Loader;