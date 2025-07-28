import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";

import getSubscriptions from "../api/get-subscriptions";
import SubscriptionList from "./components/subscription-list";
import type { UserSubscription } from "@/common/types/user-subscription-type";

function Dashboard() {
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
      <SubscriptionList
        subscriptions={userSubscriptions}
        onSubscriptionUpdate={setUserSubscriptions}
      />
    </div>
  );
}

export default Dashboard;
