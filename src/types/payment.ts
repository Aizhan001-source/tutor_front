export interface Payment {
  id: string;
  booking_id: string;
  amount: number;
  currency: string;
  status: "pending" | "paid" | "failed" | "refunded";
  created_at: string;
}