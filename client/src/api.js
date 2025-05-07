const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const sendContactMessage = async (formData) => {
  const response = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
