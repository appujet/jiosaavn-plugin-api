# 🎵 JioSaavn API

This is a simple Node.js API that allows you to search for tracks, artists, albums, and playlists on JioSaavn.

[![image](https://user-images.githubusercontent.com/23035000/116934239-b0d4a400-ac32-11eb-83f6-0c4119d59fa8.png)](https://raw.githubusercontent.com/appujet/jiosaavn-plugin-api/refs/heads/master/main.ts)


# API Endpoints
`/search/:query`
- **Method:** GET
- **Description:** Search for tracks, artists, albums, and playlists based on a query.
- **Parameters:**
  - `query` (required): The search query.
  - **Example:** `/search/eminem`
<details>
<summary>Example Payload</summary>

```js
{
  results: [
    {
      identifier: "aRZbUYD7",
      title: "Tum Hi Ho",
      duration: 262000,
      uri: "https://www.jiosaavn.com/song/tum-hi-ho/EToxUyFpcwQ",
      artworkUrl: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
      artist: "Mithoon",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyRofh8YQPTqjR2tIxTYXqGEQHgqnNfsetouo4rsD0s4RZKObWAyHrEhw7tS9a8Gtq",
    },
    {
      identifier: "qZtKBMZ_",
      title: "Apna Bana Le",
      duration: 261000,
      uri: "https://www.jiosaavn.com/song/apna-bana-le/ATIfejZ9bWw",
      artworkUrl: "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
      artist: "Sachin-Jigar",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDylA8lQwDowJF0rwulZQb41oGFWui//Ii/9d8Rp0MdqrAGAnyTSi1MVxw7tS9a8Gtq",
    },
    {
      identifier: "7yi1WSmH",
      title: "Soulmate",
      duration: 214000,
      uri: "https://www.jiosaavn.com/song/soulmate/RxECACNjWns",
      artworkUrl: "https://c.saavncdn.com/406/Ek-Tha-Raja-Hindi-2024-20240318125601-500x500.jpg",
      artist: "Badshah",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy/tWfK+bl5vTcbVsl/KiLemjCW8W1iitP5bxYiSsL1vg0kAxBaw52ghw7tS9a8Gtq",
    },
    {
      identifier: "VCeN_rCT",
      title: "Saware",
      duration: 321000,
      uri: "https://www.jiosaavn.com/song/saware/JisOfytCdGc",
      artworkUrl: "https://c.saavncdn.com/951/Phantom-Hindi-2015-500x500.jpg",
      artist: "Pritam",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy1TZBpytSWLCkorCCubfsSDSvYIxIlyr1WGk2/Psq+QES+6jcP+7DtRw7tS9a8Gtq",
    },
    {
      identifier: "FB8WBiWv",
      title: "Sajni",
      duration: 170000,
      uri: "https://www.jiosaavn.com/song/sajni/NipTZjZZYEU",
      artworkUrl: "https://c.saavncdn.com/252/Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg",
      artist: "Ram Sampath",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy4JJ40VCnlYVSyc4WdkMMJzP9588K2huhafb7ZJL7Fmc/Qx7P9h+DQxw7tS9a8Gtq",
    },
    {
      identifier: "hrTlP-H2",
      title: "Jaan ‘Nisaar (Arijit)",
      duration: 238000,
      uri: "https://www.jiosaavn.com/song/jaan-%e2%80%98nisaar-arijit/GBo-XSQdfwE",
      artworkUrl: "https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg",
      artist: "Arijit Singh",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyKlrI3qAnii7cqoHjQjp/4QSEqxvy22bqYOppVn/l//HRYZyvVL5FTxw7tS9a8Gtq",
    },
    {
      identifier: "wcsDiSsA",
      title: "O Maahi",
      duration: 233000,
      uri: "https://www.jiosaavn.com/song/o-maahi/BwsYdR1jRHI",
      artworkUrl: "https://c.saavncdn.com/139/Dunki-Hindi-2023-20231220211003-500x500.jpg",
      artist: "Pritam",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyaj3rrWAaDMHeM7u6wtD1ZM6frdiKRfD/QBCoWuXT2UpkzzD1uAXw4Rw7tS9a8Gtq",
    },
    {
      identifier: "gk5Le_DO",
      title: "Uska Hi Banana",
      duration: 327000,
      uri: "https://www.jiosaavn.com/song/uska-hi-banana/FwNefRFvc3w",
      artworkUrl: "https://c.saavncdn.com/256/1920-Evil-Returns-Hindi-2012-20221213041144-500x500.jpg",
      artist: "Arijit Singh",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyIStnmoiMryxxzrlD9YqKsNo+laYUw13A5MhSA3OQk+W+VHuLJfhd+Bw7tS9a8Gtq",
    },
    {
      identifier: "Otl9gukS",
      title: "Lambiyaan Si Judaiyaan",
      duration: 238000,
      uri: "https://www.jiosaavn.com/song/lambiyaan-si-judaiyaan/PxwHCBNFXGA",
      artworkUrl: "https://c.saavncdn.com/023/Raabta-Hindi-2017-500x500.jpg",
      artist: "Arijit Singh",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyNm9/XAMnX2f7ACoqUKR0oj/Vd21Y4/6EaiW8jGeYVK8Os4qwlny6Rxw7tS9a8Gtq",
    },
    {
      identifier: "zekEI3N6",
      title: "Ae Dil Hai Mushkil Title Track",
      duration: 268000,
      uri: "https://www.jiosaavn.com/song/ae-dil-hai-mushkil-title-track/Cg0AdD0DeQU",
      artworkUrl: "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
      artist: "Pritam",
      encryptedMediaUrl: "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy6pXiLG7rXcp9KyuTvmf/GaofE9hrMuU6AxEA8vY4CFuiAp2UUOrMnhw7tS9a8Gtq",
    }
  ],
}
```

</details>
