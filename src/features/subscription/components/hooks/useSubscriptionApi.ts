import updateSubscription from "@/features/subscription/components/api/update-subscription";
import deleteSubscription from "@/features/subscription/components/api/delete-subscription";

export const useSubscriptionApi = () => {
  const handleUpdateSubscription = async (
    id: number,
    updatedData: {
      service_name: string;
      price: string;
      start_date: string;
      billing_cycle: string;
    },
  ) => {
    await updateSubscription(
      id,
      updatedData.service_name,
      updatedData.price,
      updatedData.start_date,
      updatedData.billing_cycle,
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
