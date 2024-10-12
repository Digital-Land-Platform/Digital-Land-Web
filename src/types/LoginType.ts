export type LoginResponse = {
  status: string;
  message?: string;
  data?: {
    message: string;
    token: string;
    email?: string;
  };
};
