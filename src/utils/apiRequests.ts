import axios, { AxiosError } from 'axios';

const baseUrl = 'https://backend.getlinked.ai/';

const axiosInstance = axios.create({ baseURL: baseUrl, responseType: 'json' });

const getCategories = async (): Promise<{
  success: boolean;
  data: Array<{ id: number; name: string }> | null;
  error: AxiosError | null;
}> => {
  try {
    const response = await axiosInstance.get(`/hackathon/categories-list`);
    return { success: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error: error as AxiosError };
  }
};

const register = async (data: {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_poclicy_accepted: boolean;
}): Promise<{
  success: boolean;
  data: Array<{ id: number; name: string }> | null;
  error: AxiosError | null;
}> => {
  try {
    const response = await axiosInstance.post(`/hackathon/registration`, data);
    return { success: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error: error as AxiosError };
  }
};

const contact = async (data: {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
}): Promise<{
  success: boolean;
  data: Array<object> | null;
  error: AxiosError | null;
}> => {
  try {
    const response = await axiosInstance.post(`/hackathon/contact-form`, data);
    return { success: true, data: response.data, error: null };
  } catch (error) {
    return { success: false, data: null, error: error as AxiosError };
  }
};

export { contact, getCategories, register };
