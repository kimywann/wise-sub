import { useState, useRef, useCallback } from "react";

export default function useEmailInput() {
  const [id, setId] = useState("");
  const idRef = useRef<HTMLInputElement>(null);

  const [domain, setDomain] = useState("");
  const domainRef = useRef<HTMLInputElement>(null);

  const [nickname, setNickname] = useState("");
  const nicknameRef = useRef<HTMLInputElement>(null);

  const [birthYear, setBirthYear] = useState("");
  const birthYearRef = useRef<HTMLScriptElement>(null);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeDomain = useCallback((e) => {
    setDomain(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangeBirthYear = useCallback((e) => {
    setBirthYear(e.target.value);
  }, []);
  return {
    id,
    domain,
    nickname,
    birthYear,
    idRef,
    domainRef,
    nicknameRef,
    birthYearRef,
    onChangeId,
    onChangeDomain,
    onChangeNickname,
    onChangeBirthYear,
  };
}
