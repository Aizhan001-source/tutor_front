export interface Payment {
  id: string;
  booking_id: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed" | "refunded";
  created_at: string;
}