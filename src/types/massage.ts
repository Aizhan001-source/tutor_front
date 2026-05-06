export interface MessageRead {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export type ChatPreview = {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
  is_read: boolean;

  sender: {
    id: string;
    first_name: string;
    last_name: string;
    avatar_url?: string;
  };

  receiver: {
    id: string;
    first_name: string;
    last_name: string;
    avatar_url?: string;
  };
};