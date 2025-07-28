import updateSubscription from "@/features/subscriptions/components/api/update-subscription";
import deleteSubscription from "@/features/subscriptions/components/api/delete-subscription";

export const useSubscriptionApi = () => {
  const handleUpdateSubscription = async (
    id: number,
    updatedData: { service_name: string; price: string; start_date: string },
  ) => {
    await updateSubscription(
      id,
      updatedData.service_name,
      updatedData.price,
      updatedData.start_date,
    );
  };

  const handleDeleteSubscription = async (id: number) => {
    await deleteSubscription(id);
  };

  return {
    handleUpdateSubscription,
    handleDeleteSubscription,
  };
};
