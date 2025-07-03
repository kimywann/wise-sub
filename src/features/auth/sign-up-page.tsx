import { useState } from "react";

import useSignupInput from "./hooks/useSignupInput";
import usePasswordInput from "./hooks/usePasswordInput";

function SignInPage() {
  const {
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
  } = useSignupInput();
  const [password, passwordRef, onChangePassword] = usePasswordInput();
  const [errors, setErrors] = useState<{
    nicknameError?: string;
    idError?: string;
    domainError?: string;
    passwordError?: string;
    birthYearError?: string;
  }>({});

  const getSignFormErrors = () => {
    if (!id?.trim()) {
      setErrors({ idError: "아이디를 입력해주세요." });
      idRef.current?.focus();
      return;
    }
    if (!domain?.trim()) {
      setErrors({ domainError: "도메인을 입력해주세요." });
      domainRef.current?.focus();
      return;
    }
    if (!password?.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요." });
      passwordRef.current?.focus();
      return;
    }
    if (!nickname?.trim()) {
      setErrors({ nicknameError: "닉네임을 입력해주세요." });
      nicknameRef.current?.focus();
      return;
    }
    if (!birthYear?.trim()) {
      setErrors({ nicknameError: "출생년도를 입력해주세요." });
      birthYearRef.current?.focus();
      return;
    }
    setErrors({});
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const email = `${id}@${domain}`;
  console.log("로그인 정보:", email, password, nickname, birthYear);

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="flex justify-center mt-48">
        <div className="w-full max-w-lg p-8 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // 폼 전송 방지
              getSignFormErrors();
            }}
            className="flex flex-col gap-4"
          >
            <span>이메일</span>
            <div className="flex items-center gap-2">
              <input
                ref={idRef}
                type="text"
                value={id}
                onChange={onChangeId}
                placeholder="example"
                className="w-4/5 border border-gray-300 rounded-md px-4 py-2"
              />
              <span>@</span>
              <input
                ref={domainRef}
                type="text"
                value={domain}
                onChange={onChangeDomain}
                placeholder="domain.com"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            {errors.idError && (
              <span className="text-sm text-red-500">{errors.idError}</span>
            )}
            {errors.domainError && (
              <span className="text-sm text-red-500">{errors.domainError}</span>
            )}
            <span>비밀번호</span>
            <input
              ref={passwordRef}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={onChangePassword}
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.passwordError && (
              <span className="text-sm text-red-500">
                {errors.passwordError}
              </span>
            )}
            <span>닉네임</span>
            <input
              type="text"
              onChange={onChangeNickname}
              className="w-50 border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.nicknameError && (
              <span className="text-sm text-red-500">
                {errors.nicknameError}
              </span>
            )}
            <span>출생년도</span>
            <select
              value={birthYear}
              onChange={onChangeBirthYear}
              className="w-1/4 border border-gray-300 rounded-md px-4 py-2"
            >
              <option value=""></option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.birthYearError && (
              <span className="text-sm text-red-500">
                {errors.birthYearError}
              </span>
            )}

            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 mt-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer"
            >
              계정 생성
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
