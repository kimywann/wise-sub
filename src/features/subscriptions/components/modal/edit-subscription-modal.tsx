import { useState } from "react";

import updateSubscription from "../api/update-subscription";
import deleteSubscription from "../api/delete-subscription";

interface EditSubscriptionModalProps {
  id: number;
  serviceName: string;
  price: string;
  startDate: string;
  billingCycle: string;
  onClose: () => void;
  onDelete: () => void;
  onUpdate: (updatedData: {
    service_name: string;
    price: string;
    start_date: string;
  }) => void;
}

function EditSubscriptionModal({
  id,
  serviceName,
  price,
  startDate,
  billingCycle,
  onClose,
  onDelete,
  onUpdate,
}: EditSubscriptionModalProps) {
  const [editedServiceName, setEditedServiceName] = useState(serviceName);
  const [editedServicePrice, setEditedServicePrice] = useState(price);
  const [editedStartDate, setEditedStartDate] = useState(startDate);
  const [editedBillingCycle, setEditedBillingCycle] = useState(billingCycle);

  const handleUpdateSubscription = async () => {
    try {
      // 서버 업데이트
      await updateSubscription(
        id,
        editedServiceName,
        editedServicePrice,
        editedStartDate,
      );

      // 부모 컴포넌트에 업데이트된 데이터 전달
      onUpdate({
        service_name: editedServiceName,
        price: editedServicePrice,
        start_date: editedStartDate,
      });
    } catch (error) {
      console.error("구독 업데이트 실패", error);
    }
  };

  const handleDeleteSubscription = async () => {
    try {
      await deleteSubscription(id);
      onDelete();
      onClose();
    } catch (error) {
      console.error("구독 삭제 실패", error);
    }
  };

  return (
    <div className="mx-auto mb-10 h-[550px] w-[400px] rounded-xl border border-slate-300 bg-white p-8 shadow-md">
      <header className="flex flex-row justify-between">
        <div className="mb-5 text-2xl font-bold text-indigo-600"></div>
        <button
          type="button"
          onClick={onClose}
          className="mb-4 text-lg font-bold text-red-500 hover:cursor-pointer"
        >
          X
        </button>
      </header>

      {/* 서비스명 */}
      <div className="mb-1 font-bold">구독 서비스명</div>
      <div className="mb-6 flex flex-col rounded-lg border border-slate-300 p-4 shadow-sm">
        <input
          type="text"
          value={editedServiceName}
          onChange={(e) => setEditedServiceName(e.target.value)}
        />
      </div>

      {/* 구독 비용 */}
      <div className="mb-1 font-bold">비용</div>
      <div className="mb-6 flex flex-col rounded-lg border border-slate-300 p-4 shadow-sm">
        <input
          value={editedServicePrice}
          onChange={(e) => setEditedServicePrice(e.target.value)}
          type="text"
          placeholder="이 구독 서비스에 한 달에 얼마 쓰고 계신가요?"
        />
      </div>

      {/* 구독 시작일 */}
      <div className="mb-1 font-bold">구독 시작일</div>
      <div className="mb-6 flex flex-col rounded-lg border border-slate-300 p-4 shadow-sm">
        <input
          type="date"
          value={editedStartDate}
          onChange={(e) => setEditedStartDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="mb-1 font-bold">결제 주기</div>
      <div className="mb-6 flex flex-col rounded-lg border border-slate-300 p-4 shadow-sm">
        <select
          value={editedBillingCycle}
          onChange={(e) => setEditedBillingCycle(e.target.value)}
        >
          <option value="monthly">월간</option>
          <option value="yearly">연간</option>
        </select>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-3 flex flex-row justify-center gap-16">
        <button
          type="button"
          onClick={handleDeleteSubscription}
          className="rounded-2xl px-4 py-2 text-lg font-bold text-red-500 hover:cursor-pointer hover:rounded-xl hover:bg-red-100"
        >
          삭제
        </button>
        <button
          type="button"
          onClick={handleUpdateSubscription}
          className="rounded-2xl px-4 py-2 text-lg font-bold text-blue-500 hover:cursor-pointer hover:rounded-xl hover:bg-blue-100"
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default EditSubscriptionModal;
