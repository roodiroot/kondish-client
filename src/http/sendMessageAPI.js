import { $host } from '.';

export const sendMessageAPI = async (message) => {
  message = message || 'пустое сообщение';
  const { data } = await $host.post('api/send-message', { message });
  return data;
};
