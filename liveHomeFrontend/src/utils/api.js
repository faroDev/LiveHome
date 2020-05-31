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

  // async getZones () {
  //   try {
  //     const result = await fetch(`${API_URL}/zones`)
  //     const data = result.json();
  //     return data;
  //   } catch (error) {
  //     return new Error(`Impossible connect ${error.message}`);
  //   }
  // }

  // async getPropertyType () {
  //   try {
  //     const result = await fetch(`${API_URL}/propertyType`)
  //     const data = result.json();
  //     return data;
  //   } catch (error) {
  //     return new Error(`Impossible connect ${error.message}`);
  //   }
  // }

  // async getModalityType () {
  //   try {
  //     const result = await fetch(`${API_URL}/modalityType`)
  //     const data = result.json();
  //     return data;
  //   } catch (error) {
  //     return new Error(`Impossible connect ${error.message}`);
  //   }
  // }

  async getProperties () {
    try {
      const result = await fetch(`${API_URL}/properties`)
      const data = result.json();
      return data;
    } catch (error) {
      return new Error(`Impossible connect ${error.message}`);
    }
  }
  
  async setLikeProperty (propertyId, userId, token) {
    const like = { propertyId, userId };

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
    const like = { propertyId, userId };

    const result = await fetch(
      `${API_URL}/favorites/${propertyId}/${userId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
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

  async getPropertyType () {
    const result = await fetch(`${API_URL}/propertyType`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getModalityType () {
    const result = await fetch(`${API_URL}/modalityType`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getZones () {
    const result = await fetch(`${API_URL}/zones`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getStatuses () {
    const result = await fetch(`${API_URL}/status`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyHome (propertyType, modalityType, zoneId, user) {
    const propertyTypeId = propertyType !== undefined && propertyType !== 0 ? `propertyTypeId=${propertyType}&` : '';
    const modalityTypeId = modalityType !== undefined && modalityType !== 0 ? `modalityTypeId=${modalityType}&` : '';
    const userId = user !== undefined && modalityType !== 0 ? `inSession=${user}&` : '';

    const result = await fetch(`${API_URL}/properties/home?zoneId=${zoneId}&${propertyTypeId}${modalityTypeId}${userId}`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyAdmin (propertyType, status, zoneId, dateFrom, dateTo, user) {
    const propertyTypeId = propertyType !== undefined && propertyType !== 0 ? `propertyTypeId=${propertyType}&` : '';
    const statusId = status !== undefined && status !== 0 ? `statusId=${status}&` : '';
    const dateRange = dateFrom !== undefined && dateTo !== 0 ? `createdAt=${dateFrom}&createdAt=${dateTo}&` : '';
    const userId = user !== undefined ? `inSession=${user}&` : '';

    const result = await fetch(`${API_URL}/properties/home?zoneId=${zoneId}&${propertyTypeId}${statusId}${dateRange}${userId}`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getProperties () {
    const result = await fetch(`${API_URL}/properties`);

    if (!result.ok) {
      const dataError = await result.json();
      console.error('[error]', dataError.message);
      throw new Error(dataError.message);
    }
    const data = await result.json();
    return data;
  }

  async getPropertyDetail (propertyId) {
    const result = await fetch(`${API_URL}/properties/${propertyId}`);

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
    formData.append('heating', data.heating);
    formData.append('bathrooms', data.bathrooms);
    formData.append('nearTo', data.nearbyPlaces);
    formData.append('cellar', data.warehouse);
    formData.append('available', false);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('rooms', data.rooms);
    formData.append('propertyTypeId', data.propertyType);
    formData.append('statusId', 1);
    formData.append('userId', 1);
    formData.append('zoneId', data.zone);

    try {
      const result = await fetch(`${API_URL}/properties`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      const data = await result.json();
      return data;
    } catch (error) {
      return new Error(`Impossible connect ${error.message}`);
    }
  }

  async postModality (token, data, price, modalityId) {
    let modality = {
      propertyId: data.id,
      modalityTypeId: modalityId
    }

    if (modalityId == 1) {
      modality.pricem2 = 0;
      modality.pricePerMoth = price;
      modality.totalPrice = 0;
    } else {
      modality.pricem2 = parseInt(price/data.m2);
      modality.pricePerMoth = 0;
      modality.totalPrice = price;
    }
    
    try {
      const result = await fetch(
        `${API_URL}/modalities`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...modality })
        }
      );
      const data = await result.json();
      return data;
    } catch (error) {
      return new Error(`Impossible connect ${error.message}`);
    }
  }

  async postPropertyDetails (token, property, id) {
    const api_token = '';
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${property.address}&key=${api_token}`)
    const googleInfo = await data.json();
    
    if (googleInfo.status == 'OK') {
      const details = {
        address: property.address,
        city: "Bogotá",
        urbanization: "Bogotá",
	      neighborhood: "Bogotá",
        latitude: googleInfo.results[0].geometry.location.lat,
        longitude: googleInfo.results[0].geometry.location.lng,
        propertyId: id
      }
  
      try {
        const result = await fetch(
          `${API_URL}/propertyDetail`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...details })
          }
        );
        const data = await result.json();
        return data;
      } catch (error) {
        return new Error(`Impossible connect ${error.message}`);
      }
    } else {
      return new Error(`Impossible find the offer location`);
    }
  }

  async getUserFavourites (userId, token) {
    try {
      const result = await fetch(
        `${API_URL}/users/${userId}/favorites/`,
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

  async updateProperty (propertyId, token, newData) {
    try {
      const result = await fetch(
        `${API_URL}/properties/${propertyId}`,
        {
          method: 'PUT',
          headers:
            {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          body: JSON.stringify({ ...newData })
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
