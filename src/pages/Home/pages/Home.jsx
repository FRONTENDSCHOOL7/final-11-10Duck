import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "../../Home/pages/Feed";
import Splash from "../../Splash/Splash";
export default function Home() {
  const navigate = useNavigate();
  const [step, setStep] = useState("splash");

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
