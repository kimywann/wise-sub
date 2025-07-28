import { supabase } from "@/lib/supabaseClient";

const updateSubscription = async (
  id: number,
  serviceName: string,
  price: string,
  startDate: string,
  billingCycle: string,
) => {
  const { data, error } = await supabase
    .from("user_subscription")
    .update({
      service_name: serviceName,
      price: price,
      start_date: startDate,
      billing_cycle: billingCycle,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
};

export default updateSubscription;
