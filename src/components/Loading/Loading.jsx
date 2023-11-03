import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { keyframes, styled } from "styled-components";
import { loadState } from "../../recoil/atom";
import MainLogo from "../../assets/logo/PurpleDuck.png";

export default function Loading() {
  const [isLoading, setIsLoading] = useRecoilState(loadState);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(timer);
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return (
      <LoadingBarBackgroundStyle>
        <LoadingBarStyle>
          <LogoImageStyle src={MainLogo} alt="10덕 메인 로고" />
          <ProgressbarStyle></ProgressbarStyle>
        </LoadingBarStyle>
      </LoadingBarBackgroundStyle>
    );
  } else {
    return null;
  }
}

const LoadingBarBackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const LoadingBarStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 12px;
  border-radius: 24px;
  border: 2px solid black;
`;

const progress = keyframes`
from {
    width: 0;
}
to {
    width: 100%;
}`;

const ProgressbarStyle = styled.div`
  background-color: #9b1bf0;
  height: 12px;
  animation: ${progress} 1s ease-in-out;
`;

const duckforward = keyframes`
    from {
        left: -20px;
    } to {
        left: 250px;
    }
`;

const LogoImageStyle = styled.img`
  position: absolute;
  top: -65px;
  left: -20px;
  width: 80px;
  object-fit: cover;
  transform: scaleX(-1);
  animation: ${duckforward} 1s ease-in-out;
`;
