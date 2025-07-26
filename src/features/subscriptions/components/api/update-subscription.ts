import { supabase } from "@/lib/supabaseClient";

const updateSubscription = async (
  id: number,
  serviceName: string,
  price: string,
  startDate: string,
) => {
  const { data, error } = await supabase
    .from("user_subscription")
    .update({ service_name: serviceName, price: price, start_date: startDate })
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
};

export default updateSubscription;
