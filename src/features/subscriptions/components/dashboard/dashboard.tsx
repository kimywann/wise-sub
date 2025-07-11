import { useState } from "react";

import Button from "@/common/components/button/button";
import EditSubscriptionModal from "../modal/edit-subscription-modal";
import { Link } from "react-router-dom";

const subscriptionList = [
  {
    id: 1,
    name: "Netflix",
    price: 17000,
  },
  {
    id: 2,
    name: "Spotify",
    price: 13900,
  },
  {
    id: 3,
    name: "YouTube Premium",
    price: 14900,
  },
];

const monthlyCost = 89000;
const subscriptionCount = 5;

function Dashboard() {
  const [openEditModal, setOpenEditModal] = useState<number | null>(null);

  const handleOpenEditModal = (id: number) => {
    setOpenEditModal(id);
  };

  const handleCloseModal = () => {
    setOpenEditModal(null);
  };

  return (
    <div className="mt-14 flex flex-col gap-6 p-6">
      <div className="mb-4 flex justify-center text-3xl font-bold text-indigo-600">
        <p>2025년 7월</p>
      </div>
      {/* 월 구독 비용 및 구독 개수 카드 */}
      <div className="flex flex-row justify-center gap-6">
        <div className="flex flex-col items-center p-6">
          <h3 className="text-lg font-medium text-slate-600">월 구독 비용</h3>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {monthlyCost.toLocaleString()}원
          </p>
        </div>

        <div className="flex flex-col items-center p-6">
          <h3 className="text-lg font-medium text-slate-600">구독 개수</h3>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {subscriptionCount}개
          </p>
        </div>
      </div>

      {/* 구독 서비스 목록 영역 */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          구독 중인 서비스
        </h2>

        {/* 프로토타입용 더미 서비스들 */}
        <div className="flex flex-col gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subscriptionList.map(({ id, name, price }) => {
            return (
              <div key={id}>
                <div
                  onClick={() => handleOpenEditModal(id)}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:cursor-pointer hover:bg-slate-300"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{name}</h3>
                    <p className="text-sm text-slate-600">
                      {price.toLocaleString()}원/월
                    </p>
                  </div>
                </div>

                {openEditModal === id && (
                  <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400/30">
                    <EditSubscriptionModal
                      onClose={handleCloseModal}
                      serviceName={name}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 구독 서비스 추가 버튼 */}
        <div className="mt-6 flex justify-end">
          <Link to="/subscription/add">
            <Button type="button" size="md" variant="primary">
              구독 서비스 추가
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
