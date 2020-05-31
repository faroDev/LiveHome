#LiveHome Database

![image](https://drive.google.com/uc?export=view&id=19pd0I_7hge11wnVqazy1BAE5iTxP2THo)

## Keys

```
   🔶  Primary Keys
   🔺  Foregin Keys
```

To Build This Project we an ORM (Objevt Reational model) named Sequelize. With it we can chose the leangage that we want to use.
We make it with Postgres

### Run Just the Data Base

```
  npm run setup:db
```

```js
  const setupDataBase = require('livehomeDb')

  setupDatabase(config).then(db => {
    const{
        typeUser,
        user,
        auth,
        propertyType,
        properties,
        views,
        files,
        propertyDetail,
        modalityType,
        modality,
        aproveUser,
        favorites,
        status
      }
    }
  })
```
