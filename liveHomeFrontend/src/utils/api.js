const API_URL = 'https://live-home.now.sh/api';

class API {
  async getAccount (userId, token) {
    try {
      const result = await window.fetch(
        `${API_URL}/users/${userId}`,
        {
          method: 'GET',
          headers:
            {
              Authorization: `Bearer ${token}`
            }
        });
      const data = await result.json();

      if (data.message) {
        return { ...data };
      }
    } catch (error) {
      return { error: new Error('Imposible conectar') };
    }
  }

  async updateAccount (userId, token, newUserData) {
    try {
      const result = await window.fetch(
        `${API_URL}/users/${userId}`,
        {
          method: 'PUT',
          headers:
            {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          body: JSON.stringify({ ...newUserData })
        });
      const data = await result.json();

      if (data.message) {
        return { ...data };
      }
    } catch (error) {
      return { error: new Error('Imposible conectar') };
    }
  }
}

export default new API();
