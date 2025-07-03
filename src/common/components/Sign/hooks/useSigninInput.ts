import { useState, useRef, useCallback } from "react";

export default function useEmailInput() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return {
    email,
    emailRef,
    onChangeEmail,
  };
}
