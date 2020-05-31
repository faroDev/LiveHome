import base64 from 'base-64';
import fetch from 'node-fetch';
import FormData from 'form-data';
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

  async setLikeProperty (propertyId, userId, token) {
    const like = {propertyId, userId};

    const result = await fetch(
      `${API_URL}/favorites`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...like })
      }
    );

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

  async setDislikeProperty (propertyId, userId, token) {
    const like = {propertyId, userId};

    const result = await fetch(
      `${API_URL}/favorites/${propertyId}/${userId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

  async getZones (){
    const result = await fetch(`${API_URL}/zones`);
    
    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyHome (propertyType, modalityType, zoneId, user){
    
    const propertyTypeId = propertyType !== undefined && propertyType > 0 ? `propertyTypeId=${propertyType}&` : '';
    const modalityTypeId = modalityType !== undefined && modalityType > 0 ? `modalityTypeId=${modalityType}&` : '';
    const userId = user !== undefined && user !== 0 ? `inSession=${user}&` : '';

    const result = await fetch(`${API_URL}/properties/home?zoneId=${zoneId}&${propertyTypeId}${modalityTypeId}${userId}`);

    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyHomeFilter (propertyType, modalityType, zoneId, user, paramsFilter){

    const propertyTypeId = propertyType !== undefined && propertyType > 0 ? `propertyTypeId=${propertyType}&` : '';
    const modalityTypeId = modalityType !== undefined && modalityType > 0 ? `modalityTypeId=${modalityType}&` : '';
    const userId = user !== undefined && user !== 0 ? `inSession=${user}&` : '';
    const bedrooms = paramsFilter.bedrooms !== undefined && paramsFilter.bedrooms > 0 ? `rooms=${paramsFilter.bedrooms}&` : '';
    const bathrooms = paramsFilter.bathrooms !== undefined && paramsFilter.bathrooms > 0 ? `bathrooms=${paramsFilter.bathrooms}&` : '';
    const totalPrinceMin = paramsFilter.totalPrinceMin !== undefined ? `totalPrice=${paramsFilter.totalPrinceMin}&` : '';
    const totalPrinceMax = paramsFilter.totalPrinceMax !== undefined ? `totalPrice=${paramsFilter.totalPrinceMax}&` : '';
    const area = paramsFilter.area !== undefined && paramsFilter.area > 0 ? `m2=${paramsFilter.area}&` : '';
    const parking = paramsFilter.parking !== undefined && paramsFilter.parking > 0 ? `parking=${paramsFilter.parking}&` : '';
    const mPriceMin = paramsFilter.mPriceMin !== undefined ? `pricem2=${paramsFilter.mPriceMin}&` : '';
    const mPriceMax = paramsFilter.mPriceMax !== undefined ? `pricem2=${paramsFilter.mPriceMax}&` : '';
    const furnished = paramsFilter.furnished !== undefined && paramsFilter.furnished ? `furnished=${paramsFilter.furnished}&` : '';
    const pool = paramsFilter.pool !== undefined && paramsFilter.pool ? `pool=${paramsFilter.pool}&` : '';
    const heating = paramsFilter.heating !== undefined && paramsFilter.heating ? `heating=${paramsFilter.heating}&` : '';
    const warehouse = paramsFilter.warehouse !== undefined && paramsFilter.warehouse ? `cellar=${paramsFilter.warehouse}&` : '';
    const elevator = paramsFilter.elevator !== undefined && paramsFilter.elevator ? `elevator=${paramsFilter.elevator}&` : '';
    const security = paramsFilter.security !== undefined && paramsFilter.security ? `security=${paramsFilter.security}&` : '';

    const result = await fetch(`${API_URL}/properties/home?zoneId=${zoneId}&${propertyTypeId}${modalityTypeId}${userId}${bedrooms}${bathrooms}${totalPrinceMin}${totalPrinceMax}${area}${mPriceMin}${mPriceMax}${furnished}${parking}${pool}${heating}${warehouse}${elevator}${security}`);

    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getProperties (){
    const result = await fetch(`${API_URL}/properties`);

    if(!result.ok){
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyDetail (propertyId, user) {
    const userId = user !== undefined && user !== 0 ? `?inSession=${user}` : '';
    const result = await fetch(`${API_URL}/properties/${propertyId}${userId}`);

    if(!result.ok){
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

    const result = await window.fetch(`${API_URL}/properties`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      .then((res) => res)
      .catch((error) => new Error(`Impossible connect ${error.message}`));

    return result;
  }
}

export default new API();
