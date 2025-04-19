import React, { useEffect, useRef, useState } from "react";
import "./OTPInput.css";

const otpLength = 5;

const OTPInput = () => {
  const otpRef = useRef([]);
  const [otpInput, setOtpInput] = useState(Array(otpLength).fill(""));

  const handleChange = (digit, index) => {
    if (isNaN(digit)) return;
    const newDigit = digit.trim();
    const newArray = [...otpInput];
    newArray[index] = newDigit.slice(-1);
    setOtpInput(newArray);

    newDigit && otpRef.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      otpRef.current[index - 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, otpLength);

    const newOtp = [...otpInput];
    for (let i = 0; i < newOtp.length; i++) {
      newOtp[i] = pasteData[i];
      otpRef.current[i]?.focus();
    }
    setOtpInput(newOtp);

    otpRef.current[pasteData.length - 1]?.focus();
  };

  useEffect(() => {
    otpRef.current[0]?.focus();
  }, []);

  return (
    <div className="child-component-container">
      <div>
        <h1>OTP Input</h1>
        {otpInput.map((o, i) => {
          return (
            <input
              ref={(input) => {
                otpRef.current[i] = input;
              }}
              type="text"
              key={i}
              className="input-box"
              value={otpInput[i]}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={i === 0 ? handlePaste : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OTPInput;
