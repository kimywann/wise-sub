import { useState } from "react";

interface EditSubscriptionModalProps {
  onClose: () => void;
  serviceName: string;
}

function EditSubscriptionModal({
  onClose,
  serviceName,
}: EditSubscriptionModalProps) {
  const [name, setName] = useState(serviceName);
  const [cost, setCost] = useState(0);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  return (
    <div className="mx-auto mb-10 h-[500px] w-[500px] rounded-2xl border border-slate-300 bg-white p-8 shadow-md">
      <header className="mb-8 flex flex-row justify-between">
        <div className="mb-5 text-2xl font-bold text-indigo-600">
          구독 정보 편집
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mb-4 text-lg font-bold text-red-500 hover:cursor-pointer"
        >
          X
        </button>
      </header>

      {/* 서비스명 */}
      <div className="mb-6 flex flex-col rounded-2xl border border-slate-300 p-4 shadow-sm">
        <div className="font-bold">구독 서비스명</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* 월 비용 */}
      <div className="mb-6 flex flex-col rounded-2xl border border-slate-300 p-4 shadow-sm">
        <div className="font-bold">비용</div>
        <input
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          type="text"
          placeholder="이 구독 서비스에 한 달에 얼마 쓰고 계신가요?"
        />
      </div>

      {/* 구독 시작일 */}
      <div className="mb-6 flex flex-col rounded-2xl border border-slate-300 p-4 shadow-sm">
        <div className="font-bold">구독 시작일</div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* 하단 버튼 */}
      <div className="mt-10 flex flex-row justify-center gap-16">
        <button
          type="button"
          onClick={() => {}}
          className="text-lg font-bold text-red-500 hover:cursor-pointer"
        >
          삭제하기
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="text-lg font-bold text-blue-500 hover:cursor-pointer"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default EditSubscriptionModal;
