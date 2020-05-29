import base64 from 'base-64';
import fetch from 'node-fetch';

const API_URL = 'https://live-home.now.sh/api';


class API {
  async getAccount (userId, token) {
    try {
      const result = await fetch(
        `${API_URL}/users/${userId}`,
        {
          method: 'GET',
          headers:
            {
              Authorization: `Bearer ${token}`
            }
        });
      const data = await result.json();

      if (!data.error) {
        return { ...data };
      } else {
        return { error: new Error(data.error) };
      }
    } catch (error) {
      return { error: new Error('Impossible connect') };
    }
  }

  async updateAccount (userId, token, newUserData) {
    try {
      console.log(`${API_URL}/users/${userId}`);

      const result = await fetch(
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

      if (!data.error) {
        return { ...data };
      } else {
        return { error: new Error(data.error) };
      }
    } catch (error) {
      return { error: new Error('Impossible connect') };
    }
  }

  async signUp (newUser) {
    const result = await fetch(
      `${API_URL}/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newUser })
      }
    );
    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async signIn (userData) {
    const result = await fetch(
      `${API_URL}/auth/sign-in`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64.encode(`${userData.userName}:${userData.password}`)}`
        }
      }
    );
    console.log('[Result-Login]', result);
    if (result.status === 401) {
      console.error('[error] Unauthorized');
      const data = await result.json();
      return data;
    }
    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }

    const data = await result.json();
    return data;
  }

  async getPropertyType (){
    const result = await fetch(`${API_URL}/propertyType`);

    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }
  
  async getModalityType (){
    const result = await fetch(`${API_URL}/modalityType`);
    
    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyHome (propertyType, modalityType){
    const result = await fetch(`${API_URL}/properties/home?propertyTypeId=${propertyType}&modalTypeId=${modalityType}`);

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
