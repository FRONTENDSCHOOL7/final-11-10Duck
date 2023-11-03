import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "../../Home/pages/Feed";
import Splash from "../../Splash/Splash";
import { useRecoilState } from "recoil";
import { stepState } from "../../../recoil/atom";
export default function Home() {
  const navigate = useNavigate();
  const [step, setStep] = useRecoilState(stepState);

  useEffect(() => {
    const timer = setTimeout(() => setStep("main"), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginLink = () => {
    navigate("/login");
  };
  return (
    <>
      {step === "splash" && <Splash />}
      {step === "main" && <Feed onClickLoginLink={handleLoginLink} />}
    </>
  );
}
