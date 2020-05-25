const API_URL = 'https://live-home.now.sh/api';
import base64 from 'base-64';

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

  /****************/
  /**** Sign-up ***/
  /****************/

  async signUp ( newUser ) {
    const result = await window.fetch(
      `${API_URL}/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newUser })
      }
    );
    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async signIn ( userData ) {
    const result = await window.fetch(
      `${API_URL}/auth/sign-in`,
      {
        method: 'POST',
        headers: {
          // Authorization: `Basic ${userData.userName}:${userData.password}`
          // Authorization: `Basic ${btoa(`${userData.userName}:${userData.password}`)}`
          Authorization: `Basic ${base64.encode(`${userData.userName}:${userData.password}`)}`
        },
      }
    );
    console.log('[Result-Login]', result)
    if(result.status === 401){
      console.error('[error] Unauthorized');
      const data = await result.json();
      return data;
    } 
    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }

    const data = await result.json();
    return data;
  }
}

export default new API();
