import base64 from 'base-64';
const API_URL = 'https://live-home-ashy.now.sh/api';

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
    const result = await window.fetch(
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
    const result = await window.fetch(
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

  async postProperty (token, data) {
    const formData = new FormData();

    formData.append('m2', data.m2);
    formData.append('m2build', data.m2build);
    formData.append('furnished', data.furnished);
    formData.append('parking', data.parking);
    formData.append('pool', data.pool);
    formData.append('security', data.security);
    formData.append('elevator', data.elevator);
    formData.append('bathrooms', data.bathrooms);
    formData.append('nearTo', data.nearby_places);
    formData.append('available', false);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('rooms', data.rooms);
    formData.append('propertyTypeId', 1);
    formData.append('statusId', 1);
    formData.append('userId', 1);

    const result = await window.fetch('https://live-home-ashy.now.sh/api/properties/',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      .then((res) => res)
      .catch((error) => new Error('Impossible connect'));

    return result;
  }

  async getUserFavourites (userId, token) {
    try {
      const result = await window.fetch(
        `${API_URL}/users/${userId}/favorites`,
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
}

export default new API();
