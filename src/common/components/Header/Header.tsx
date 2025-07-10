import Button from "@/common/components/button/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="mt-4 flex justify-between">
      <Link to="/">
        <div className="font-bold text-indigo-600">WiseSub</div>
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
