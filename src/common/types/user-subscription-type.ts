export interface UserSubscription {
  id: number;
  service_name: string;
  price: string;
  start_date: string;
  billing_cycle: "monthly" | "yearly";
}
