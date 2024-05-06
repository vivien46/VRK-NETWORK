export const apiUsers = async (): Promise<Response> => {
  return await fetch(`https://localhost:7259/api/Users`, {
    method: 'GET',
  });
};
