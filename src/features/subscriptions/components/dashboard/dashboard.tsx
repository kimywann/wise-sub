import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import getSubscriptions from "../api/get-subscriptions";
import updateSubscription from "../api/update-subscription";

import Button from "@/common/components/button/button";
import EditSubscriptionModal from "../modal/edit-subscription-modal";
import { Link } from "react-router-dom";

interface UserSubscription {
  id: number;
  service_name: string;
  price: string;
}

function Dashboard() {
  const [openEditModal, setOpenEditModal] = useState<number | null>(null);
  const [userSubscriptions, setUserSubscriptions] = useState<
    UserSubscription[]
  >([]);

  const user = useUser();

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const data = await getSubscriptions(user.id);
        setUserSubscriptions(data);
      } catch (error) {
        console.error("구독 불러오기 실패", error);
      }
    };
    fetchData();
  }, [user]);

  const monthlyCost = userSubscriptions.reduce(
    (acc, current) => acc + Number(current.price),
    0,
  );

  const subscriptionCount = userSubscriptions.length;

  const handleOpenEditModal = (id: number) => {
    setOpenEditModal(id);
  };

  const handleCloseModal = () => {
    setOpenEditModal(null);
  };

  // 구독 업데이트 핸들러 추가
  const handleUpdateSubscription = async (
    id: number,
    updatedData: { service_name: string; price: string; start_date: string },
  ) => {
    try {
      // 서버 업데이트
      await updateSubscription(
        id,
        updatedData.service_name,
        updatedData.price,
        updatedData.start_date,
      );

      // 로컬 상태 업데이트
      setUserSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? {
                ...sub,
                service_name: updatedData.service_name,
                price: updatedData.price,
              }
            : sub,
        ),
      );

      // 모달 닫기
      setOpenEditModal(null);
    } catch (error) {
      console.error("구독 업데이트 실패", error);
    }
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
          {userSubscriptions.map((item) => {
            return (
              <div key={item.id}>
                <div
                  onClick={() => handleOpenEditModal(item.id)}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:cursor-pointer hover:bg-slate-300"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">
                      {item.service_name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.price.toLocaleString()}원/월
                    </p>
                  </div>
                </div>

                {openEditModal === item.id && (
                  <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400/30">
                    <EditSubscriptionModal
                      onClose={handleCloseModal}
                      id={item.id}
                      serviceName={item.service_name}
                      price={item.price}
                      onUpdate={(updatedData) =>
                        handleUpdateSubscription(item.id, updatedData)
                      }
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
