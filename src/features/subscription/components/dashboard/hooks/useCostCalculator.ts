import type { UserSubscription } from "@/common/types/user-subscription-type";
import { isYearlySubscriptionInStartMonth } from "./useDateUtils";

export const useCostCalculator = () => {
  // 월별 비용 계산 (연간 구독은 시작일 월에만 포함)
  const calculateMonthlyCost = (
    subscriptions: UserSubscription[],
    date: Date,
  ): number => {
    return subscriptions.reduce((acc, subscription) => {
      // 연간 구독인 경우 시작일 월에만 가격 포함
      if (isYearlySubscriptionInStartMonth(subscription, date)) {
        return acc + Number(subscription.price);
      }

      // 월간 구독인 경우 항상 가격 포함
      if (subscription.billing_cycle === "monthly") {
        return acc + Number(subscription.price);
      }

      return acc;
    }, 0);
  };

  return {
    calculateMonthlyCost,
  };
};
