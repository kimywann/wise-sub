import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between mt-4">
      <Link to="/">
        <div className="text-indigo-600 font-bold">WiseSub</div>
      </Link>
      <div className="flex gap-1.5">
        <Link to="/signin">
          <Button size="sm" variant="primary">
            로그인
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" variant="secondary">
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
