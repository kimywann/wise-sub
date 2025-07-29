import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import getSubscriptions from "../../api/get-subscriptions";
import type { UserSubscription } from "@/common/types/user-subscription-type";

export const useDashboardState = () => {
  const [userSubscriptions, setUserSubscriptions] = useState<
    UserSubscription[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const user = useUser();

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getSubscriptions(user.id);
        setUserSubscriptions(data);
      } catch (error) {
        console.error("구독 불러오기 실패", error);
        setError("구독 데이터를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  // 선택된 월에 활성화된 구독 필터링
  const getActiveSubscriptions = (date: Date): UserSubscription[] => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return userSubscriptions.filter((subscription) => {
      const startDate = new Date(subscription.start_date);
      const startYear = startDate.getFullYear();
      const startMonth = startDate.getMonth() + 1;

      // 구독 시작일이 선택된 월보다 이전이거나 같은 경우에만 활성화
      if (startYear < year) return true;
      if (startYear === year && startMonth <= month) return true;

      return false;
    });
  };

  const activeSubscriptions = getActiveSubscriptions(selectedDate);

  const monthlyCost = activeSubscriptions.reduce(
    (acc, current) => acc + Number(current.price),
    0,
  );

  const subscriptionCount = activeSubscriptions.length;

  return {
    // 상태
    userSubscriptions,
    selectedDate,
    activeSubscriptions,
    monthlyCost,
    subscriptionCount,
    isLoading,
    error,

    // 액션
    setUserSubscriptions,
    setSelectedDate,
  };
};
