# 🎵 JioSaavn API

This is a simple Node.js API that allows you to search for tracks, artists, albums, and playlists on JioSaavn.

## 🚀 Getting Started

`bun install`
`bun run start`

# API Endpoints
`/search/:query`
- **Method:** GET
- **Description:** Search for tracks, artists, albums, and playlists based on a query.
- **Parameters:**
  - `query` (required): The search query.
  - **Example:** `/search/eminem`
<details>
<summary>Example Payload</summary>

```json
{
  results: [
    {
      identifier: "aRZbUYD7",
      title: "Tum Hi Ho",
      duration: 262000,
      uri: "https://www.jiosaavn.com/song/tum-hi-ho/EToxUyFpcwQ",
      artworkUrl: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
      artist: "Mithoon",
      streamUrl: "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_320.mp4",
    },
    {
      identifier: "qZtKBMZ_",
      title: "Apna Bana Le",
      duration: 261000,
      uri: "https://www.jiosaavn.com/song/apna-bana-le/ATIfejZ9bWw",
      artworkUrl: "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
      artist: "Sachin-Jigar",
      streamUrl: "https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_320.mp4",
    },
    {
      identifier: "7yi1WSmH",
      title: "Soulmate",
      duration: 214000,
      uri: "https://www.jiosaavn.com/song/soulmate/RxECACNjWns",
      artworkUrl: "https://c.saavncdn.com/406/Ek-Tha-Raja-Hindi-2024-20240318125601-500x500.jpg",
      artist: "Badshah",
      streamUrl: "https://aac.saavncdn.com/406/af57a9b63876b01fd3fa611bcd221706_320.mp4",
    },
    {
      identifier: "VCeN_rCT",
      title: "Saware",
      duration: 321000,
      uri: "https://www.jiosaavn.com/song/saware/JisOfytCdGc",
      artworkUrl: "https://c.saavncdn.com/951/Phantom-Hindi-2015-500x500.jpg",
      artist: "Pritam",
      streamUrl: "https://aac.saavncdn.com/951/c1d83d62b27c81212ade038f29657a13_320.mp4",
    },
    {
      identifier: "FB8WBiWv",
      title: "Sajni",
      duration: 170000,
      uri: "https://www.jiosaavn.com/song/sajni/NipTZjZZYEU",
      artworkUrl: "https://c.saavncdn.com/252/Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg",
      artist: "Ram Sampath",
      streamUrl: "https://aac.saavncdn.com/252/f53c1a90a2f35d67490badb846d8c849_320.mp4",
    },
    {
      identifier: "hrTlP-H2",
      title: "Jaan ‘Nisaar (Arijit)",
      duration: 238000,
      uri: "https://www.jiosaavn.com/song/jaan-%e2%80%98nisaar-arijit/GBo-XSQdfwE",
      artworkUrl: "https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg",
      artist: "Arijit Singh",
      streamUrl: "https://aac.saavncdn.com/367/f4aca5ce16a93e1bedb991f66c2f2f01_320.mp4",
    },
    {
      identifier: "wcsDiSsA",
      title: "O Maahi",
      duration: 233000,
      uri: "https://www.jiosaavn.com/song/o-maahi/BwsYdR1jRHI",
      artworkUrl: "https://c.saavncdn.com/139/Dunki-Hindi-2023-20231220211003-500x500.jpg",
      artist: "Pritam",
      streamUrl: "https://aac.saavncdn.com/139/61036495c7ba45adf72a856b60f054fd_320.mp4",
    },
    {
      identifier: "Otl9gukS",
      title: "Lambiyaan Si Judaiyaan",
      duration: 238000,
      uri: "https://www.jiosaavn.com/song/lambiyaan-si-judaiyaan/PxwHCBNFXGA",
      artworkUrl: "https://c.saavncdn.com/023/Raabta-Hindi-2017-500x500.jpg",
      artist: "Arijit Singh",
      streamUrl: "https://aac.saavncdn.com/023/60e6adab7f69f216e3664cb70fcd81fe_320.mp4",
    },
    {
      identifier: "gk5Le_DO",
      title: "Uska Hi Banana",
      duration: 327000,
      uri: "https://www.jiosaavn.com/song/uska-hi-banana/FwNefRFvc3w",
      artworkUrl: "https://c.saavncdn.com/256/1920-Evil-Returns-Hindi-2012-20221213041144-500x500.jpg",
      artist: "Arijit Singh",
      streamUrl: "https://aac.saavncdn.com/256/a574d8f7763495c42979a64bb75dae34_320.mp4",
    },
    {
      identifier: "AN1zv7KP",
      title: "Anuvanuvuu",
      duration: 211000,
      uri: "https://www.jiosaavn.com/song/anuvanuvuu/MSZaSwIHfGM",
      artworkUrl: "https://c.saavncdn.com/000/Om-Bheem-Bush-Telugu-2024-20240401231417-500x500.jpg",
      artist: "Sunny M.R.",
      streamUrl: "https://aac.saavncdn.com/000/cb9d6e279ff308e6d35507b5a4c27299_320.mp4",
    }
  ],
}
```

</details>

`track/id/:id`
- **Method:** GET
- **Description:** Get track details by ID
- **URL:** `/track/id/:id`
- **URL Parameters:**
  - `id` (string, required) - The ID of the track
  - **Response:**
  - `200 OK` - Successful response with track details

<details>
  <summary>Response Example</summary>

```json
{
  track: {
    identifier: "S0U546YS",
    title: "Millionaire",
    duration: 199000,
    uri: "https://www.jiosaavn.com/song/millionaire/I1g,BEAGbmA",
    artworkUrl: "https://c.saavncdn.com/173/GLORY-Hindi-2024-20240926151002-500x500.jpg",
    artist: "Yo Yo Honey Singh",
    streamUrl: "https://aac.saavncdn.com/173/e98d601d7cfc68d0035f4e8a2deae6f9_320.mp4",
  },
}

```

</details>

`track/:url`
- **Method:** GET
- **Description:** Get track details by URL
- **URL:** `/track/:url`
- **URL Parameters:**
  - `url` (string, required) - The URL of the track
  - **Response:**
  - `200 OK` - Successful response with track details

<details>
  <summary>Response Example</summary>
  
  ```json
  {
  track: [
    {
      identifier: "ugfao4jn",
      title: "Chunaree",
      duration: 185000,
      uri: "https://www.jiosaavn.com/song/chunaree/BQ8NUBsEXV0",
      artworkUrl: "https://c.saavncdn.com/749/Chunaree-Hindi-2024-20240930194911-500x500.jpg",
      artist: "Amit Trivedi",
      streamUrl: "https://aac.saavncdn.com/749/985a78a7b40e2bcdad18f0a987ddb96d_320.mp4",
    }
  ],
}
```

</details>
