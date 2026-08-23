# 🎵 JioSaavn API

High-performance JioSaavn API built with **Hono** and **Bun** for searching and retrieving tracks, artists, albums, playlists, recommendations, and decrypted media streaming URLs.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/notdeltaxd/jiosaavn-plugin-api)
[![License: AGPL-3.0-or-later](https://img.shields.io/badge/License-AGPL%203.0%20or%20later-blue.svg)](LICENSE)

## 🚀 Getting Started (with Bun)

### Install dependencies
```bash
bun install
```

### Run local dev server (with hot reload)
```bash
bun run dev
```
The server will be running at `http://localhost:3000`.

### Run tests
```bash
bun test
```

# API Endpoints

### `/api/search`
- **Method:** `GET`
- **Description:** Searches for tracks, artists, albums, and playlists based on a query.
- **Parameters:**
  - `q` (required): The search query string. This can include terms for tracks, artists, albums, or playlists.
  - **Example Request:** `/api/search?q=demons imagine dragons`
- **Response Format:** Returns a JSON object containing results based on the search query.
<details>
<summary>Example Payload</summary>

```json
{
  "results": [
    {
      "identifier": "3g5G9QTu",
      "title": "Demons",
      "length": 175000,
      "uri": "https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y",
      "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjBaR231YewUnWfxJpTqCuS3Chy+zqaoKB7kn8aJ0n4ox+kfV6Pm48hw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
      "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
      "albumName": "Night Visions",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "z9WF4Qzs",
      "title": "Demons (Live in Vegas)",
      "length": 264000,
      "uri": "https://www.jiosaavn.com/song/demons-live-in-vegas/ClE8d0BhTUA",
      "artworkUrl": "https://c.saavncdn.com/860/Imagine-Dragons-Live-in-Vegas-English-2023-20230728103109-500x500.jpg",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyhaAoSaledrx9FdiTXSl5hrM5Xo/P4eeMJ+B65NqUzteatJuYAgK99Rw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/imagine-dragons-live-in-vegas/cqhBVEBoBlc_",
      "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
      "albumName": "Imagine Dragons Live in Vegas",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "u9Hy8Lyq",
      "title": "Demons (TELYKast Remix)",
      "length": 175000,
      "uri": "https://www.jiosaavn.com/song/demons-telykast-remix/BVEjSEx8TkI",
      "artworkUrl": "https://c.saavncdn.com/613/Demons-TELYKast-Remix--English-2021-20211021053334-500x500.jpg",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyP3vTQvU0ILm4psR39pCBvHLPie0I96UcI5cgWfeG3n4X3tC9ScLb6Rw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/demons-telykast-remix/ukLRiSLqVS4_",
      "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
      "albumName": "Demons (TELYKast Remix)",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "0ailV8p5",
      "title": "Demons (Acoustic Covers Versions of Popular Songs)",
      "length": 159000,
      "uri": "https://www.jiosaavn.com/song/demons-acoustic-covers-versions-of-popular-songs/QAkCXSIIRwY",
      "artworkUrl": "https://c.saavncdn.com/781/Chill-Music-Chill-Songs-Chill-Vibes-Acoustic-Chill-Chillout-Lounge-Acoustic-Covers-Of-Popular-Songs-English-2022-20220516151635-500x500.jpg",
      "author": "Covers Culture",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyJ+RCopG0nOGBUK06A/b0vpBpFhMqZUB3rY0eYNmb1Ymbkas3lLMBgxw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/chill-music-chill-songs-chill-vibes-acoustic-chill-chillout-lounge-acoustic-covers-of-popular-songs/vh5unZA5XqQ_",
      "artistUrl": "https://www.jiosaavn.com/artist/covers-culture-songs/ZB3RjAJN57A_",
      "albumName": "Chill Music - Chill Songs - Chill Vibes - Acoustic Chill - Chillout Lounge - Acoustic Covers Of Popular Songs",
      "artistArtworkUrl": null
    },
    {
      "identifier": "PQ_sWkCO",
      "title": "Demons (Techno Version)",
      "length": 108000,
      "uri": "https://www.jiosaavn.com/song/demons-techno-version/IDk0QiNbdHw",
      "artworkUrl": "https://c.saavncdn.com/147/Demons-Unknown-2024-20240322102729-500x500.jpg",
      "author": "Tech Father",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBZgWAwZA56Jor/hpgjk2TMuXIwygbJetx8Gr6T+MH5rtbrJxdkIzkBw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/demons/gQi6n8o-NnM_",
      "artistUrl": "https://www.jiosaavn.com/artist/tech-father-songs/dbHlFmK7UHU_",
      "albumName": "Demons",
      "artistArtworkUrl": null
    },
    {
      "identifier": "YorHUC0a",
      "title": "demons (guitar version)",
      "length": 63000,
      "uri": "https://www.jiosaavn.com/song/demons-guitar-version/KQcZeSFzB1I",
      "artworkUrl": "https://c.saavncdn.com/004/demons-Unknown-2022-20240301092333-500x500.jpg",
      "author": "Guitar Girl",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyfptqjV2e7DlssVRWoF2QxVXnyXAmgUuMoxA7ATKYk7G6R5B5uvZzUBw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/demons/ykFHYzz8EXA_",
      "artistUrl": "https://www.jiosaavn.com/artist/guitar-girl-songs/F6RKcGeZKO4_",
      "albumName": "demons",
      "artistArtworkUrl": null
    },
    {
      "identifier": "uIuUOEbo",
      "title": "Demons (Acoustic Cover)",
      "length": 239000,
      "uri": "https://www.jiosaavn.com/song/demons-acoustic-cover/BSEeZDt1VVw",
      "artworkUrl": "https://c.saavncdn.com/076/Covers-Pt-I-Acoustic-Cover-English-2024-20240828093655-500x500.jpg",
      "author": "Seth Regan",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDynWUcodWsoy0uHcsQRZkyO++ONFZjU9WuaEvxFLMBF3uQw6w3ZlTnzhw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/covers-part-1/Yrb7tRgtaHc_",
      "artistUrl": "https://www.jiosaavn.com/artist/seth-regan-songs/oOn5FGqDe4w_",
      "albumName": "Covers - Part 1",
      "artistArtworkUrl": "http://c.saavncdn.com/507/Stream-of-Sound-English-2019-20190426161334-500x500.jpg"
    },
    {
      "identifier": "q5wsG6WJ",
      "title": "Demons",
      "length": 219000,
      "uri": "https://www.jiosaavn.com/song/demons/AV0cQjMGYHk",
      "artworkUrl": "https://c.saavncdn.com/749/Demons-English-2013-20190811143209-500x500.jpg",
      "author": "Tanner Howe",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyafFRxeuSQAfXSB+PyBY0zIP518imEHxrO9BKzqeZN+XH9K9MLFhZJhw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/demons/w-dtiuxRWHk_",
      "artistUrl": "https://www.jiosaavn.com/artist/tanner-howe-songs/gIP-z7KJ3J0_",
      "albumName": "Demons",
      "artistArtworkUrl": "https://c.saavncdn.com/749/Demons-English-2013-20190811143209-500x500.jpg"
    },
    {
      "identifier": "sb4IZ2w-",
      "title": "Demons (Guitar Version)",
      "length": 169000,
      "uri": "https://www.jiosaavn.com/song/demons-guitar-version/AwpfeC4CQB4",
      "artworkUrl": "https://c.saavncdn.com/933/Demons-English-2017-20210525211221-500x500.jpg",
      "author": "Toni Cotolí",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyeF4V3l3s8Uo4WATdtQyM9EYCVLwUgUnkopwgGl1lvpEj5Ey1iXjQZBw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/demons/boCM90jRB,g_",
      "artistUrl": "https://www.jiosaavn.com/artist/toni-cotoli-songs/InG4GEDz8zs_",
      "albumName": "Demons",
      "artistArtworkUrl": "https://c.saavncdn.com/546/Bohemian-Rhapsody-English-2017-500x500.jpg"
    },
    {
      "identifier": "X7Itven1",
      "title": "Demons",
      "length": 183000,
      "uri": "https://www.jiosaavn.com/song/demons/KF8iRQJVWQI",
      "artworkUrl": "https://c.saavncdn.com/526/Love-Songs-on-Piano-English-2017-500x500.jpg",
      "author": "Various Artists",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyW63i6X0gKK9syYG06vGtsG3KTgerixyZ4rKodH9e3MzrWbMIk/TRRBw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/album/love-songs-on-piano/YknKYm6N5mY_",
      "artistUrl": "https://www.jiosaavn.com/artist/various-artists-songs/ztKx8IUBme8_",
      "albumName": "Love Songs on Piano",
      "artistArtworkUrl": "/_i/share-image-2.png"
    }
  ]
}
```

</details>

---


### `/api/track`
- **Method:** `GET`
- **Description:** Retrieves track details based on a URL or track ID.
- **Parameters:**
  - `url` (optional): The URL of the track.
  - `id` (optional): The ID of the track.
  - **Example Request with URL:** `/api/track?url=https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y`
  - **Example Request with ID:** `/api/track?id=3g5G9QTu`
- **Response Format:** Returns a JSON object with the track details.

<details>
<summary>Example Payload</summary>

```json
{
  "track": {
    "identifier": "3g5G9QTu",
    "title": "Demons",
    "length": 175000,
    "uri": "https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y",
    "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
    "author": "Imagine Dragons",
    "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjBaR231YewUnWfxJpTqCuS3Chy+zqaoKB7kn8aJ0n4ox+kfV6Pm48hw7tS9a8Gtq",
    "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
    "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
    "albumName": "Night Visions",
    "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
  }
}

```

</details>

---

### `/api/album`
- **Method:** `GET`
- **Description:** Retrieves album details based on a URL.
- **Parameters:**
  - `url` (required): The URL of the album.
  - **Example Request:** `/api/album?url=https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_`
- **Response Format:** Returns a JSON object with the album details.

<details>

<summary>Example Payload</summary>

```json
{
  "album": {
    "id": "1142502",
    "name": "Night Visions",
    "uri": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
    "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
    "author": "Imagine Dragons",
    "tracks": [
      {
        "identifier": "K1P4T0jI",
        "title": "Radioactive",
        "length": 187000,
        "uri": "https://www.jiosaavn.com/song/radioactive/O1k7BSAAXXo",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy1YuXj4AsTu4neVXNE9T/QHWGStg44ENSEaeJz+1hvus/r1gu4PDNIBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "R6xODN_y",
        "title": "Tiptoe",
        "length": 194000,
        "uri": "https://www.jiosaavn.com/song/tiptoe/Il4TfjB,aEo",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyx5eOv+i/9OzP91OH6q50UkTvFm0VLFcvsPIiGJ95HMBlF88408n6ghw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "umUlMpfp",
        "title": "It's Time",
        "length": 240000,
        "uri": "https://www.jiosaavn.com/song/its-time/BQU,XTlAUUM",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy9+L+k8lMEbNsETelGdDuN48vw53YbBFCJhFgtV0r5ZXM9bTVTxvjbRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "3g5G9QTu",
        "title": "Demons",
        "length": 175000,
        "uri": "https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjBaR231YewUnWfxJpTqCuS3Chy+zqaoKB7kn8aJ0n4ox+kfV6Pm48hw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "_BMx78Jr",
        "title": "On Top Of The World",
        "length": 189000,
        "uri": "https://www.jiosaavn.com/song/on-top-of-the-world/LyomSUMIfUE",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyKhmZ+kxa6G/8Pem/gFPuYs8q1m8oZ4cpywkIZxj5VeoDhpNejkb6eRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "fo0YFM2b",
        "title": "Amsterdam",
        "length": 241000,
        "uri": "https://www.jiosaavn.com/song/amsterdam/FgdbaDJ9BVE",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDylNPYX7bbhrpWJxCscpjiKE1esh+/0CohpL2zpklKQyW+XF/GQQCluRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "MgmnU6H0",
        "title": "Hear Me",
        "length": 235000,
        "uri": "https://www.jiosaavn.com/song/hear-me/PQ8GXyEGfwM",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDySSR/kYjVw8iq1DG6Cc9LUUbEYjCxVoG161+xozDmfblRrLVnQJPqghw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "RJ_8a1Iv",
        "title": "Every Night",
        "length": 217000,
        "uri": "https://www.jiosaavn.com/song/every-night/IiI0CRUBfkU",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyVKm2X5SmHiojxQr2jhPFz7IyA1B21hI85scGg63FVBDhfJrByguw+Bw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "uTCqseTu",
        "title": "Bleeding Out",
        "length": 223000,
        "uri": "https://www.jiosaavn.com/song/bleeding-out/BTwoQAdVY0Y",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyr5JUYtjKVXypQa+3sfVPnxK2OOLYnKEcHzo6bkVXj0gruXKOo9qbaxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "pKJ5x0kZ",
        "title": "Underdog",
        "length": 209000,
        "uri": "https://www.jiosaavn.com/song/underdog/ACMhBAwAXGk",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy75Mt67JFqHZgoUZAytZooP7i1CEeeC8U3kr1fY2DKPHQmoJ3VLgJJhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "Ssmr7GPh",
        "title": "Nothing Left To Say / Rocks (Medley)",
        "length": 535000,
        "uri": "https://www.jiosaavn.com/song/nothing-left-to-say-rocks-medley/IxsGQ0N3Z1s",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyHF1Ghn/JfqpIZ7XaWslTBSLvCgfviFMY+/Akm55ngQKadEBu04dW0xw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "1zbwuvPs",
        "title": "Cha-Ching (Till We Grow Older)",
        "length": 249000,
        "uri": "https://www.jiosaavn.com/song/cha-ching-till-we-grow-older/QRIJRgFGZ0A",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDydrDJmjWx2XDTzGaT+dWqnkD7K6opux94KzMH9q2g9/1AMQyXWAjvvxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "U7-Nk7-q",
        "title": "Working Man",
        "length": 233000,
        "uri": "https://www.jiosaavn.com/song/working-man/JV9Gfx8HGkI",
        "artworkUrl": "https://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyK5nHT5eGXoD2KgEu8DaF/ANeYrzdmtVlAHlRXuzjQlrjccIe8ms9whw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      }
    ],
    "totalSongs": "13"
  }
}
```

</details>

---

### `/api/artist`
- **Method:** `GET`
- **Description:** Retrieves artist details based on a URL.
- **Parameters:**
  - `url` (required): The URL of the artist.
  - **Example Request:** `/api/artist?url=https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_`
- **Response Format:** Returns a JSON object with the artist details.
<details>
<summary>Example Payload</summary>

```json

{
  "artist": {
    "name": "Imagine Dragons",
    "uri": "https://www.jiosaavn.com/artist/imagine-dragons/f0aFxsa231o_",
    "artworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg",
    "tracks": [
      {
        "identifier": "BeXBcbVK",
        "title": "Believer",
        "length": 202000,
        "uri": "https://www.jiosaavn.com/song/believer/Mg0zcxdSYXg",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4GeIIk2qfbwRx8Cg4EFT1ER6EfKk0EQMAFR1fbSnml9qIFdPhpg8WwoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "yDeAS8Eh",
        "title": "Bones",
        "length": 165000,
        "uri": "https://www.jiosaavn.com/song/bones/CSwOcCcIcls",
        "artworkUrl": "http://c.saavncdn.com/038/Bones-English-2022-20220311113603-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4LlhRj/7C4aC7J1/PEZVXplgCz0zF+P8nHfjdHvkZbIgN8SFYNwIvtoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/bones/8jGpGcwI,fM_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Bones",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "zikdtWU6",
        "title": "Thunder",
        "length": 187000,
        "uri": "https://www.jiosaavn.com/song/thunder/CgEAVQBnYgU",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J40T2vPsZcsWqEA7Veg5PTUZ59P918SQpUk3SSpcRLMSTA2/9Xcus2XoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "drvhW8ob",
        "title": "Enemy (from the series Arcane League of Legends)",
        "length": 173000,
        "uri": "https://www.jiosaavn.com/song/enemy-from-the-series-arcane-league-of-legends/FBodWSMIWFE",
        "artworkUrl": "http://c.saavncdn.com/943/Enemy-from-the-series-Arcane-League-of-Legends--English-2021-20211028173417-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4VKyf/49jaFecqUdRAJFOEwFoUxGJj/AUednYW2NxdzanUblF0HP0tIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/enemy-from-the-series-arcane-league-of-legends/SDG5g-p,CwA_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Enemy (from the series Arcane League of Legends)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "sZULdFlE",
        "title": "Whatever It Takes",
        "length": 200000,
        "uri": "https://www.jiosaavn.com/song/whatever-it-takes/AzI,fRB2W3Y",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4YSGws15zrf9NrqDnwZd2zCryx6ypf9j9+d7rbN4Hem/IfQHnHX/bIYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "3g5G9QTu",
        "title": "Demons",
        "length": 175000,
        "uri": "https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4LaRIpSa2Dhfw2i/tkExdtN99+IdTGUa2rhm2Nt4A99Ail+V95E4o/4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "lKKbRg6w",
        "title": "Bad Liar",
        "length": 260000,
        "uri": "https://www.jiosaavn.com/song/bad-liar/HCMgUyZXAUQ",
        "artworkUrl": "http://c.saavncdn.com/189/Origins-English-2018-20190419235827-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4TxmWaMuh2xvxqpsfE8r/0B1x5RLJK/HkKmn3aoFec97IB+P9WLgIaYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/origins/j8WGKGdAFqI_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Origins",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "K1P4T0jI",
        "title": "Radioactive",
        "length": 187000,
        "uri": "https://www.jiosaavn.com/song/radioactive/O1k7BSAAXXo",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4IpcXEWxFR5EnZRxXscNEWY/pir3MVQ3BoTCewXpsmb+K+shE45FW/YPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "Ppq9UTh8",
        "title": "Radioactive",
        "length": 282000,
        "uri": "https://www.jiosaavn.com/song/radioactive/IBgaCCFkXws",
        "artworkUrl": "http://c.saavncdn.com/039/Radioactive-2014-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4UiKPG2WInUSvklgsrm5gn1WeWEpkB51opft6FjiXuyAglV7AEukbT4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/radioactive/K5P4qW0DEmQ_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Radioactive",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "FJMOJ_I6",
        "title": "Eyes Closed",
        "length": 200000,
        "uri": "https://www.jiosaavn.com/song/eyes-closed/NiImfj5vfgU",
        "artworkUrl": "http://c.saavncdn.com/178/LOOM-English-2024-20240628063307-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4frGd2gc3w1oyPkJ3JxoenBTMU8crLqJUq5vxr0+7hQ8gRFb343KTyYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/loom/czMmpAVIivA_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "LOOM",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "u_Qn9uyY",
        "title": "Warriors",
        "length": 170000,
        "uri": "https://www.jiosaavn.com/song/warriors/BTc6X01FTmo",
        "artworkUrl": "http://c.saavncdn.com/233/Warriors-English-2014-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4zFVvjLZXdkhEShvBLV9nd2Makn8UgVimdQExonVonK+R4yaotKI1HYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/warriors/ncTcU448C3c_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Warriors",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "hNbNzU2p",
        "title": "Eyes Closed",
        "length": 199000,
        "uri": "https://www.jiosaavn.com/song/eyes-closed/GCYJfw5lBUM",
        "artworkUrl": "http://c.saavncdn.com/589/Eyes-Closed-English-2024-20240403223605-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4lSf5eRITLP67yy+JQYGa0Qepk0HotmIf9HD9GjFbUYi80cqfeSYVgIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/eyes-closed/Mc87px9ULCI_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Eyes Closed",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "PHVumdcT",
        "title": "Stars Will Align",
        "length": 234000,
        "uri": "https://www.jiosaavn.com/song/stars-will-align/ICA9RBlUVGc",
        "artworkUrl": "http://c.saavncdn.com/006/Stars-Will-Align-English-2024-20240918221104-500x500.jpg",
        "author": "Kygo",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4ceNjU/stIT01Mbiug8iSMvuofp0J0hTCpeNAZQG4ZSEV8GhOuBR1S4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/stars-will-align/LuTYfW1t01A_",
        "artistUrl": "https://www.jiosaavn.com/artist/kygo-songs/V-GBIv1kOvc_",
        "albumName": "Stars Will Align",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Kygo_004_20200226104030_500x500.jpg"
      },
      {
        "identifier": "SdZc6-ST",
        "title": "Believer",
        "length": 219000,
        "uri": "https://www.jiosaavn.com/song/believer/IwwxUkIdZGc",
        "artworkUrl": "http://c.saavncdn.com/128/Believer-English-2018-20190107213710-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J49ey4FM/U1vHMPdOo7/QR1+Sw8rEP9cf5s1NLjXSwBF8dirc05o+WSYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/believer/tXjhb4AnRtk_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Believer",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "mo-pYaaV",
        "title": "Friction",
        "length": 202000,
        "uri": "https://www.jiosaavn.com/song/friction/HQdGQS1RVmU",
        "artworkUrl": "http://c.saavncdn.com/635/Smoke-Mirrors-English-2015-20240110235537-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4peMPmaoH7xSizN68EzBWJZQKTa+vsX4ukfl4bEfN3M4kkFZmNBi1xoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/smoke-%2b-mirrors/UMBFvyFOs9U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Smoke + Mirrors",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "O0F3-PWY",
        "title": "Walking The Wire",
        "length": 233000,
        "uri": "https://www.jiosaavn.com/song/walking-the-wire/P1gtAllgYGo",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4kTGkH2Ee1nm8VC8IGetlYNpEGCTVjwpRUTzfQ+JuvU9SqkwG74j2oYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "VUdcCLaS",
        "title": "Birds",
        "length": 219000,
        "uri": "https://www.jiosaavn.com/song/birds/Jj0PUjd8VmA",
        "artworkUrl": "http://c.saavncdn.com/254/Birds-English-2019-20190619232229-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4sP1n4PBjPaTBnMoG2qC0qhGTEdEkU1rpW5/vmhYCXHVvDUn6Vbi5IoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/birds/bTLHjXiALpU_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Birds",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "_n4tm2Ws",
        "title": "Rise Up",
        "length": 232000,
        "uri": "https://www.jiosaavn.com/song/rise-up/LwZfRRkCYEA",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4VEI3+bMWcV8BwxEBX0Z3y0dpMvu+qXwa+gP4JEBnNIM66gYKrWrHeoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "_yBI0BG2",
        "title": "Roots",
        "length": 174000,
        "uri": "https://www.jiosaavn.com/song/roots/LxEpeERycAE",
        "artworkUrl": "http://c.saavncdn.com/005/Roots-English-2015-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4OSvUAPrkL0PK/n+40HR6Ww97rJn04c3VBoaxaujgftZ0ol3HT2NLDYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/roots/CgBlvBkvhIU_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Roots",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "bts8P3Ub",
        "title": "Natural",
        "length": 189000,
        "uri": "https://www.jiosaavn.com/song/natural/EhwYCSQDYlE",
        "artworkUrl": "http://c.saavncdn.com/189/Origins-English-2018-20190419235827-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4nZ/oAiVWE4y2F+zl3/JRdCi5FX5LyQDH4tyiXBj7O/D+NVOiEKyDt4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/origins/j8WGKGdAFqI_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Origins",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "_BMx78Jr",
        "title": "On Top Of The World",
        "length": 189000,
        "uri": "https://www.jiosaavn.com/song/on-top-of-the-world/LyomSUMIfUE",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4WpLA7HjX+x1cPoOvvahNqi3XB5VVBYnkf3jO+WNY1Yw4gSJ/1PQKJIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "bQXA-jwX",
        "title": "Thunder / Young Dumb &amp; Broke (Medley)",
        "length": 244000,
        "uri": "https://www.jiosaavn.com/song/thunder-young-dumb-broke-medley/EjkzcFlaQGs",
        "artworkUrl": "http://c.saavncdn.com/468/Thunder-Young-Dumb-Broke-Medley--English-2017-20171219000638-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4wsLKH1uiR9NN/n2UjlJqHUyYSNGEzZLGgkva1u+6jRT3tdq8Zvvwg4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/thunder-young-dumb-broke-medley/kr5bXTzlKp0_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Thunder / Young Dumb &amp; Broke (Medley)",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "2Mxtbg8X",
        "title": "I Bet My Life",
        "length": 193000,
        "uri": "https://www.jiosaavn.com/song/i-bet-my-life/QiUTRRZXD2s",
        "artworkUrl": "http://c.saavncdn.com/788/I-Bet-My-Life-English-2014-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4Vn76DlQjYyHypvoxIpz/DslP9Xm/H4gq/kZyY86ECeqKwRfaMLNjGYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/i-bet-my-life/B3YKSLXZIZc_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "I Bet My Life",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "F6txFR6j",
        "title": "Born To Be Yours",
        "length": 193000,
        "uri": "https://www.jiosaavn.com/song/born-to-be-yours/Nl4fSTJiAVk",
        "artworkUrl": "http://c.saavncdn.com/485/Born-To-Be-Yours-English-2018-20180611194236-500x500.jpg",
        "author": "Kygo",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J45DkBxqu9CU446mdK9YK23FviC4dzDZ6KDWo1Jo/QBJ3em5Ji4jz+joPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/born-to-be-yours/f5i9,KpRjSI_",
        "artistUrl": "https://www.jiosaavn.com/artist/kygo-songs/V-GBIv1kOvc_",
        "albumName": "Born To Be Yours",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Kygo_004_20200226104030_500x500.jpg"
      },
      {
        "identifier": "YMAQwgQd",
        "title": "Battle Cry",
        "length": 273000,
        "uri": "https://www.jiosaavn.com/song/battle-cry/KSUqYANXZlc",
        "artworkUrl": "http://c.saavncdn.com/925/UMG_00602537881925-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4n/nGGgWhjX0EXYHSaMLeWC/5BiERZGmKQdsxjqZUXL+iMIkapoCdGIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/battle-cry/Y9toDcXXj9M_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Battle Cry",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "JaIt9ecZ",
        "title": "Believer (Kaskade Remix)",
        "length": 190000,
        "uri": "https://www.jiosaavn.com/song/believer-kaskade-remix/OgkiRU1VVGk",
        "artworkUrl": "http://c.saavncdn.com/261/Believer-Kaskade-Remix--English-2017-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4XiUfHDuJZK+1nL0SE/06iskabTMEM+euwJi1qmSd2UqyCc59qajFxYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/believer-kaskade-remix/HwBysb2hWiE_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Believer (Kaskade Remix)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "QC2ljKDa",
        "title": "Shots",
        "length": 232000,
        "uri": "https://www.jiosaavn.com/song/shots/IStZXR57c1I",
        "artworkUrl": "http://c.saavncdn.com/381/Shots-English-2015-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4Ax8vvGVqFfCMmdwthG4CcT2pnT1OVAe87KiZLggqgk0uWJPO5bc4H4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/shots/U,UOkY3fND8_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Shots",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "BAcuSYLL",
        "title": "Zero (From the Original Motion Picture &quot;Ralph Breaks The Internet&quot;)",
        "length": 208000,
        "uri": "https://www.jiosaavn.com/song/zero-from-the-original-motion-picture-ralph-breaks-the-internet/MikIRCdpe38",
        "artworkUrl": "http://c.saavncdn.com/022/Zero-From-the-Original-Motion-Picture-Ralph-Breaks-The-Internet--English-2018-20181115093415-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J48zCqaf+/ACiN0a26aLJUkf2ZoXyEBSGgJ81QBt6Cr5osG9ucOFdwWIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/zero-from-the-original-motion-picture-ralph-breaks-the-internet/6z1NwBLJyLM_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Zero (From the Original Motion Picture &quot;Ralph Breaks The Internet&quot;)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "uQKEtZYc",
        "title": "Next To Me",
        "length": 229000,
        "uri": "https://www.jiosaavn.com/song/next-to-me/BTkgdABqblA",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4NATL9LK/jigm6j8Kuxx7umAtXoJc/C/GUfHF+uSUdBiL4zdp8ah9a4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "JM05-GBQ",
        "title": "I Don’t Know Why",
        "length": 190000,
        "uri": "https://www.jiosaavn.com/song/i-don%e2%80%99t-know-why/OiVbBFl3dWI",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4FovS7MMTd9vIkthShtvP+VVFBsGnh9sCAAlRkr+EjvARRYD4C9nJJYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "DYTrnW_3",
        "title": "Bad Liar – Stripped",
        "length": 253000,
        "uri": "https://www.jiosaavn.com/song/bad-liar-%e2%80%93-stripped/NDE-QxpnaAA",
        "artworkUrl": "http://c.saavncdn.com/785/Bad-Liar-Stripped-English-2019-20190530232711-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4NVSu3tGEgyCKu8HCivaV2W1B7CeuEntwqsVpIkGC6nmeNbVza44EgoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/bad-liar-%e2%80%93-stripped/-vyGQB9mpWg_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Bad Liar – Stripped",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "MaUfXcub",
        "title": "Follow You",
        "length": 176000,
        "uri": "https://www.jiosaavn.com/song/follow-you/PQk,VyxTQlE",
        "artworkUrl": "http://c.saavncdn.com/731/Follow-You-Cutthroat-English-2021-20210312053511-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4OYGCDuNaeZNrC4nJ8qZJnm4Ts9efnJfnq3cjwL5bgUy0qgiUoid93IPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/follow-you-cutthroat/7rw,wHbvXJg_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Follow You / Cutthroat",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "vostbtmZ",
        "title": "Sucker for Pain (with Logic, Ty Dolla $ign &amp; X Ambassadors)",
        "length": 244000,
        "uri": "https://www.jiosaavn.com/song/sucker-for-pain-with-logic-ty-dolla-sign-x-ambassadors/BgcYRRZEWmk",
        "artworkUrl": "http://c.saavncdn.com/462/Suicide-Squad-The-Album-English-2016-20190607043708-500x500.jpg",
        "author": "Lil Wayne",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J46hFLnJzWgozv8HJNKDXsdRZHoEOrX4s5S65jfdCsBaWJJbh+SBTh7IPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/suicide-squad-the-album/kfMKiY5p8UM_",
        "artistUrl": "https://www.jiosaavn.com/artist/lil-wayne-songs/r6-9tgwrqDE_",
        "albumName": "Suicide Squad: The Album",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Lil_Wayne_001_20200217121534_500x500.jpg"
      },
      {
        "identifier": "VmddtEso",
        "title": "Dancing In The Dark",
        "length": 234000,
        "uri": "https://www.jiosaavn.com/song/dancing-in-the-dark/JgUPVQB1RFw",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J48qJ0XlkelP/to7WvUb1s5+p6RN4aZgMtTk8SWxAWDVdfgs9YyEAUq4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "cKmbk-Yt",
        "title": "It's Time",
        "length": 238000,
        "uri": "https://www.jiosaavn.com/song/its-time/EyMGUx8dbkc",
        "artworkUrl": "http://c.saavncdn.com/835/It-s-Time-2012-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4YlFXZd1i2VImTP2LW24A4EdWq475Dmmer/fgF1rj0jMVSCl1DTcjJYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/its-time/JtkRtERyvOU_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "It's Time",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "gaWAMnqy",
        "title": "Levitate (From The Original Motion Picture “Passengers”)",
        "length": 195000,
        "uri": "https://www.jiosaavn.com/song/levitate-from-the-original-motion-picture-%e2%80%9cpassengers%e2%80%9d/Fwk8cDleRko",
        "artworkUrl": "http://c.saavncdn.com/978/Levitate-From-The-Original-Motion-Picture-Passengers-English-2016-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J43w7cNy4biCimUfgVotEbq2PGgSLTX4y7PiFEjA4GXaKBSwgO+kWdMoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/levitate-from-the-original-motion-picture-%e2%80%9cpassengers%e2%80%9d/2xIhT1FDNVo_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Levitate (From The Original Motion Picture “Passengers”)",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "eOhQat6c",
        "title": "I’ll Make It Up To You",
        "length": 263000,
        "uri": "https://www.jiosaavn.com/song/i%e2%80%99ll-make-it-up-to-you/FScDYBVEAVA",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4AZ/5eQ88xMdibLEVbDMQfGgs5aueXuZHtv+/tVidY/i5/heWpb9GioPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "uTCqseTu",
        "title": "Bleeding Out",
        "length": 223000,
        "uri": "https://www.jiosaavn.com/song/bleeding-out/BTwoQAdVY0Y",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J43jFL3iK+pZOC4u2T3GtltQsxVvvldSfZKWI1yFlAB5otYrywjfbAqoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "tRu8-oj5",
        "title": "Start Over",
        "length": 186000,
        "uri": "https://www.jiosaavn.com/song/start-over/BDoeCVlfXQY",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4sQdcFWeVFNkNgY+fdk4QrG2rBUxDqPxzLlc39j4uebADpdIbCk//zIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "-KYvAnod",
        "title": "Mouth Of The River",
        "length": 222000,
        "uri": "https://www.jiosaavn.com/song/mouth-of-the-river/XSMyRzVeWFc",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4sifrxm6NME+aJAguHF4gyqIPcO0hjRJek79CC2KzUOMhhjdSex6Ge4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "RLWcTXW7",
        "title": "Yesterday",
        "length": 205000,
        "uri": "https://www.jiosaavn.com/song/yesterday/IiQ8UiBoYAQ",
        "artworkUrl": "http://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4hu2SbZVC6uYXekyh3lXJj0cfk9DslmewoFIMBl+MGryB9hv2TvWIlIPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/evolve/gvCWqZLfVbs_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Evolve",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "U5y_JktO",
        "title": "Wrecked",
        "length": 242000,
        "uri": "https://www.jiosaavn.com/song/wrecked/JV0Sbj5bQ3w",
        "artworkUrl": "http://c.saavncdn.com/288/Wrecked-English-2021-20210702094947-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4zAVH5UF0Saxb0yygvteH8m620sMbqvoNmBYH8nKHFD8sZellYZo1VoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/wrecked/PxFH-T2EOMI_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Wrecked",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "dERKUIL5",
        "title": "Whatever It Takes (Jorgen Odegard Remix)",
        "length": 228000,
        "uri": "https://www.jiosaavn.com/song/whatever-it-takes-jorgen-odegard-remix/FC05eiF5ewY",
        "artworkUrl": "http://c.saavncdn.com/497/Whatever-It-Takes-Jorgen-Odegard-Remix--English-2017-20171109013839-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4yusp6ggg4ITI0i0rIHbz9Qeu+h9tMCVzYYy2iKmw0sTG52I//GXCDYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/whatever-it-takes-jorgen-odegard-remix/jAwcwWgP7Vw_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Whatever It Takes (Jorgen Odegard Remix)",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "SvDRrND4",
        "title": "Sharks",
        "length": 190000,
        "uri": "https://www.jiosaavn.com/song/sharks/Ix4vYwZ,cwc",
        "artworkUrl": "http://c.saavncdn.com/587/Sharks-English-2022-20220624065057-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4n1l9xZL+LT2Gqu9LIoO4VI7f+SKPVqW7kGuD6U3V3NjsopLNOXQ8koPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/sharks/WVEzywP9aHE_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Sharks",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "fo0YFM2b",
        "title": "Amsterdam",
        "length": 241000,
        "uri": "https://www.jiosaavn.com/song/amsterdam/FgdbaDJ9BVE",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4U/+TiJhgvXguvGgxl1K0HsPUuRx+3TijBjnoDQ1TdUhqCIt0iyCYp4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "NTwKKoRU",
        "title": "Gold",
        "length": 217000,
        "uri": "https://www.jiosaavn.com/song/gold/Pjwcej9fZWY",
        "artworkUrl": "http://c.saavncdn.com/635/Smoke-Mirrors-English-2015-20240110235537-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4sxHLx9JSiVjjwVIC0Cwb/B88ey0JnG2fASvnFjBaC2TYi5ZrYkRag4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/smoke-%2b-mirrors/UMBFvyFOs9U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Smoke + Mirrors",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "PLbaUumX",
        "title": "Dream",
        "length": 258000,
        "uri": "https://www.jiosaavn.com/song/dream/ICQJUCFFWms",
        "artworkUrl": "http://c.saavncdn.com/635/Smoke-Mirrors-English-2015-20240110235537-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4sPJsxmfgy8nhXPpNiGFGB0OE2JEjoK4zEqgQ8O+J/Qn/7f4IdD0nCYPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/smoke-%2b-mirrors/UMBFvyFOs9U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Smoke + Mirrors",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "7t1tM7GF",
        "title": "Hopeless Opus",
        "length": 239000,
        "uri": "https://www.jiosaavn.com/song/hopeless-opus/RxxaRTkHcHU",
        "artworkUrl": "http://c.saavncdn.com/635/Smoke-Mirrors-English-2015-20240110235537-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4iKRDwiHbjHDBPC6/dUE8DXC27xw1c2R+PJK6YcwV9/78z526MaJJA4PzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/smoke-%2b-mirrors/UMBFvyFOs9U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Smoke + Mirrors",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "jPIZ0E2D",
        "title": "I’m So Sorry",
        "length": 230000,
        "uri": "https://www.jiosaavn.com/song/i%e2%80%99m-so-sorry/Gjgia0R1BXc",
        "artworkUrl": "http://c.saavncdn.com/635/Smoke-Mirrors-English-2015-20240110235537-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4j3gJzn2caYdWrFG9zfK9b82NqLw8QOI1NOV0euPpbwBg58oZHfA8xoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/smoke-%2b-mirrors/UMBFvyFOs9U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Smoke + Mirrors",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      },
      {
        "identifier": "MgmnU6H0",
        "title": "Hear Me",
        "length": 235000,
        "uri": "https://www.jiosaavn.com/song/hear-me/PQ8GXyEGfwM",
        "artworkUrl": "http://c.saavncdn.com/210/Night-Visions-2013-500x500.jpg",
        "author": "Imagine Dragons",
        "encryptedMediaUrl": "iPPGVzyogeiPwpro65A0eUaQggN+8+J4wtpez8h0ulNN4HzNxSKHJcbSy29RxUCgZfH+r2IqBZxRgCVkMTc7GoPzFaL/aK97",
        "albumUrl": "https://www.jiosaavn.com/album/night-visions/xe6Gx7Sg12U_",
        "artistUrl": "https://www.jiosaavn.com/artist/imagine-dragons-songs/f0aFxsa231o_",
        "albumName": "Night Visions",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
      }
    ]
  }
}
```

</details>

---

### `/api/playlist`
- **Method:** `GET`
- **Description:** Retrieves playlist details based on a URL and optional limit.
- **Parameters:**
  - `url` (required): The URL of the playlist.
  - `limit` (optional): The number of tracks to return (default is 100).
  - **Example Request:** `/api/playlist?url=https://www.jiosaavn.com/featured/hip-hop-dance-hits/oLEjsCVbtfLfemJ68FuXsA__`
- **Response Format:** Returns a JSON object with the playlist details.

<details>
<summary>Example Response</summary>

```json

{
  "playlist": {
    "title": "Hip Hop Dance Hits",
    "uri": "https://www.jiosaavn.com/featured/hip-hop-dance-hits/oLEjsCVbtfLfemJ68FuXsA__",
    "artworkUrl": "https://c.saavncdn.com/editorial/HipHopDanceHits_20241115114726.jpg?bch=1731673102",
    "tracks": [
      {
        "identifier": "0iT7KcUm",
        "title": "LIGHT AGAIN!",
        "length": 177000,
        "uri": "https://www.jiosaavn.com/song/light-again/QAE-Bj9TYl4",
        "artworkUrl": "https://c.saavncdn.com/012/LIGHT-AGAIN-English-2024-20241115073343-500x500.jpg",
        "author": "Lil Nas X",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDylr7HPQHK0KRWQSqOCGsZ+L4ZGhfdjWsWz+b+PugedcNeH34N3QtLBBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/light-again/M6FHkVIU4-o_",
        "artistUrl": "https://www.jiosaavn.com/artist/lil-nas-x-songs/MbAVMW5ozFM_",
        "albumName": "LIGHT AGAIN!",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Lil_Nas_X_20190823072008_500x500.jpg"
      },
      {
        "identifier": "XiF77QHn",
        "title": "Mamushi (feat. Yuki Chiba)",
        "length": 156000,
        "uri": "https://www.jiosaavn.com/song/mamushi-feat.-yuki-chiba/KAEtBkNhf10",
        "artworkUrl": "https://c.saavncdn.com/578/MEGAN-English-2024-20240701164708-500x500.jpg",
        "author": "Megan Thee Stallion",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyYl572VQdIe5Rj8NVN9NvcFutweiiRQvsRNenr3WkXfRYcAeLIlKdDxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/megan/dNunq5hEll0_",
        "artistUrl": "https://www.jiosaavn.com/artist/megan-thee-stallion-songs/aobbyrFG,rE_",
        "albumName": "MEGAN",
        "artistArtworkUrl": "https://c.saavncdn.com/734/Hot-Girl-Summer-feat-Nicki-Minaj-Ty-Dolla-ign--English-2019-20190809161107-500x500.jpg"
      },
      {
        "identifier": "qrJ2aEQy",
        "title": "Not Like Us",
        "length": 274000,
        "uri": "https://www.jiosaavn.com/song/not-like-us/ARohAxV1Zko",
        "artworkUrl": "https://c.saavncdn.com/974/Not-Like-Us-English-2024-20240505084246-500x500.jpg",
        "author": "Kendrick Lamar",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyzbNz2sBf42NIJMLjo9iDU+JP2fbvZdKR8j62GMOCN2uYBCcVlcitDBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/not-like-us/06F-PmOf1Bs_",
        "artistUrl": "https://www.jiosaavn.com/artist/kendrick-lamar-songs/44fbKDllOW0_",
        "albumName": "Not Like Us",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Kendrick_Lamar_500x500.jpg"
      },
      {
        "identifier": "q7nvYeRF",
        "title": "Big Dawgs",
        "length": 191000,
        "uri": "https://www.jiosaavn.com/song/big-dawgs/AV8FRy1VZXU",
        "artworkUrl": "https://c.saavncdn.com/883/Big-Dawgs-English-2024-20240707053259-500x500.jpg",
        "author": "Hanumankind",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyQhJSTIdc2QYcBE0taqpPd1wWdD1ts5O400GqIS8SHmBoRJmw6//fYhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/big-dawgs/AgHrnmAsSFM_",
        "artistUrl": "https://www.jiosaavn.com/artist/hanumankind-songs/zOcmxSPZh-E_",
        "albumName": "Big Dawgs",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/HanuMankind_20191009123606_500x500.jpg"
      },
      {
        "identifier": "hmoM5yWP",
        "title": "Did It First",
        "length": 118000,
        "uri": "https://www.jiosaavn.com/song/did-it-first/GAUEfEFJYGM",
        "artworkUrl": "https://c.saavncdn.com/259/Did-It-First-English-2024-20240712053311-500x500.jpg",
        "author": "Ice Spice",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDypg1WtFRbWtIu+yLnBPhHIxagkNTfPeBegFm3sBUwspBpOxFe/1wefRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/did-it-first/ziNSL1skIFg_",
        "artistUrl": "https://www.jiosaavn.com/artist/ice-spice-songs/Xzt2sIzLGQ8_",
        "albumName": "Did It First",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Ice_Spice_000_20230831190339_500x500.jpg"
      },
      {
        "identifier": "nyQ4peRh",
        "title": "Anaconda",
        "length": 261000,
        "uri": "https://www.jiosaavn.com/song/anaconda/HhE6BQRVZVs",
        "artworkUrl": "https://c.saavncdn.com/006/Anaconda-English-2014-500x500.jpg",
        "author": "Nicki Minaj",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyKKNVm4DC77K47SZ8Q1lx8uF5vdyOxxY0EZGyywlbsI7ICjLp1AR1Jxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/anaconda/SCel,FM,K-U_",
        "artistUrl": "https://www.jiosaavn.com/artist/nicki-minaj-songs/Fd967MiHu-k_",
        "albumName": "Anaconda",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Nicki_Minaj_500x500.jpg"
      },
      {
        "identifier": "mPIVzzBU",
        "title": "Savage Remix (feat. Beyoncé)",
        "length": 242000,
        "uri": "https://www.jiosaavn.com/song/savage-remix-feat.-beyonce/HTgiZw5KdWY",
        "artworkUrl": "https://c.saavncdn.com/929/Savage-Remix-feat-Beyonc--English-2020-20201118073343-500x500.jpg",
        "author": "Megan Thee Stallion",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDynoa17voKpCNzBTmgPkyrThjT8DRnxCYrIq9CsyBnFF6sBZuEJqq/8hw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/savage-remix-feat.-beyonce/qIP1LurAQHU_",
        "artistUrl": "https://www.jiosaavn.com/artist/megan-thee-stallion-songs/aobbyrFG,rE_",
        "albumName": "Savage Remix (feat. Beyoncé)",
        "artistArtworkUrl": "https://c.saavncdn.com/734/Hot-Girl-Summer-feat-Nicki-Minaj-Ty-Dolla-ign--English-2019-20190809161107-500x500.jpg"
      },
      {
        "identifier": "G1kEe5uL",
        "title": "FE!N",
        "length": 191000,
        "uri": "https://www.jiosaavn.com/song/fen/N1kAdBEFQn8",
        "artworkUrl": "https://c.saavncdn.com/882/UTOPIA-English-2023-20230728085013-500x500.jpg",
        "author": "Travis Scott",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDytFkdz27A8TygzwIRQHZ5CZHWDs43gZsyegoAfeRc+pxZL6vD4IWEehw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/utopia/mdvHsyg4XNY_",
        "artistUrl": "https://www.jiosaavn.com/artist/travis-scott-songs/n7hZTK-39Zo_",
        "albumName": "UTOPIA",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Travis_Scott_20190823072138_500x500.jpg"
      },
      {
        "identifier": "OHPQsR_Z",
        "title": "BAND4BAND",
        "length": 140000,
        "uri": "https://www.jiosaavn.com/song/band4band/PyA7YAdiaGk",
        "artworkUrl": "https://c.saavncdn.com/188/BAND4BAND-English-2024-20240524041656-500x500.jpg",
        "author": "Central Cee",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyvioQfvzp5aG2A+XIrGXEieyRmvshTN3tV17N/5spgmlsDidRLyra8hw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/band4band/u6SHzF6hsGs_",
        "artistUrl": "https://www.jiosaavn.com/artist/central-cee-songs/cm5rNgdiRI8_",
        "albumName": "BAND4BAND",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Central_Cee_000_20231120090544_500x500.jpg"
      },
      {
        "identifier": "q9-JwhRW",
        "title": "After Hours",
        "length": 202000,
        "uri": "https://www.jiosaavn.com/song/after-hours/AVFGewNYZWQ",
        "artworkUrl": "https://c.saavncdn.com/786/After-Hours-English-2024-20240402014723-500x500.jpg",
        "author": "Kehlani",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDytcj4rPFU5Aex4E5SeEAGnxnsG2OfI+zRQT3tOr1kp4R7uUKXFhUb/Bw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/after-hours/R-yxNQVQ3CY_",
        "artistUrl": "https://www.jiosaavn.com/artist/kehlani-songs/f-37mQj0Mrw_",
        "albumName": "After Hours",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Kehlani_000_20240531084004_500x500.jpg"
      },
      {
        "identifier": "8iFHpF6e",
        "title": "Jump",
        "length": 147000,
        "uri": "https://www.jiosaavn.com/song/jump/SAEteQR2AVY",
        "artworkUrl": "https://c.saavncdn.com/248/TYLA-English-2024-20240323210548-500x500.jpg",
        "author": "Tyla",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy7hYciWKt+kAJMms28agCbhNi9gNF3a9kp4Vwdcqr11F3yKBVCKv6DRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/tyla/gQdLvFQMOn0_",
        "artistUrl": "https://www.jiosaavn.com/artist/tyla-songs/AlMmD4N8pxg_",
        "albumName": "TYLA",
        "artistArtworkUrl": "http://c.saavncdn.com/artists/Tyla_20231207075253_500x500.jpg"
      },
      {
        "identifier": "xKlnh38y",
        "title": "One Dance",
        "length": 174000,
        "uri": "https://www.jiosaavn.com/song/one-dance/CCMHXxwDD0o",
        "artworkUrl": "https://c.saavncdn.com/521/Views-English-2016-20240201113111-500x500.jpg",
        "author": "Drake",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyi40hBUyOzhpbhmhch96YFkaXGucorzAC9SHiKeq50tG0AM7Ikoumsxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/views/XLFaqSL5Qos_",
        "artistUrl": "https://www.jiosaavn.com/artist/drake-songs/OvhQgUpCwJY_",
        "albumName": "Views",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Drake_005_20220704120432_500x500.jpg"
      },
      {
        "identifier": "u6rdnWam",
        "title": "Woman",
        "length": 181000,
        "uri": "https://www.jiosaavn.com/song/woman/BV4ZVRpnVl4",
        "artworkUrl": "https://c.saavncdn.com/852/Planet-Her-English-2021-20230921232131-500x500.jpg",
        "author": "Doja Cat",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyqCm0cLKJp2nmGmuH+VxHjxSHNuaXZ+Uiasniy0m7Hd+0Nxlmd/cfthw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/planet-her/0dhlIg,ymL4_",
        "artistUrl": "https://www.jiosaavn.com/artist/doja-cat-songs/GuwOruHLpLk_",
        "albumName": "Planet Her",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Doja_Cat_20200218145042_500x500.jpg"
      },
      {
        "identifier": "fY5WSr5W",
        "title": "Unforgettable",
        "length": 233000,
        "uri": "https://www.jiosaavn.com/song/unforgettable/FjFeZidCAmQ",
        "artworkUrl": "https://c.saavncdn.com/129/Jungle-Rules-English-2017-500x500.jpg",
        "author": "French Montana",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjuBTHk/UghlmLEbdDgAQNY7AWO9cg3x/ZIjxcHSkP1gWRULYeQi+Ghw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/jungle-rules/LGOGKN8iJW0_",
        "artistUrl": "https://www.jiosaavn.com/artist/french-montana-songs/iyzxkUtQU,0_",
        "albumName": "Jungle Rules",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/French_Montana_001_20200226103610_500x500.jpg"
      },
      {
        "identifier": "mlLdNfNQ",
        "title": "redrum",
        "length": 270000,
        "uri": "https://www.jiosaavn.com/song/redrum/HQQnVTpWeWI",
        "artworkUrl": "https://c.saavncdn.com/549/american-dream-English-2024-20240112000220-500x500.jpg",
        "author": "21 Savage",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyN6wFM2boGSOOQNPKfk2vGQaFVDFOn+WcgtWF2acceCgij7sWcViGAhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/american-dream/KH,ax9,8,LQ_",
        "artistUrl": "https://www.jiosaavn.com/artist/21-savage-songs/PloUs5NKFGU_",
        "albumName": "american dream",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/21_Savage_20190823071304_500x500.jpg"
      },
      {
        "identifier": "mz9Js48N",
        "title": "Whoopty",
        "length": 123000,
        "uri": "https://www.jiosaavn.com/song/whoopty/HRJSewcED30",
        "artworkUrl": "https://c.saavncdn.com/814/Whoopty-English-2020-20210213073708-500x500.jpg",
        "author": "CJ",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOdP2fpAgdUIIiOzCeVdm1khYn84sSmzPW2NKRn5OINXQLA68BODHchw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/whoopty/usYbOqKNfXo_",
        "artistUrl": "https://www.jiosaavn.com/artist/cj-songs/zOzOqR-b924_",
        "albumName": "Whoopty",
        "artistArtworkUrl": "https://c.saavncdn.com/376/Dhola-Punjabi-2001-20180823083248-500x500.jpg"
      },
      {
        "identifier": "NCA20A0x",
        "title": "WAP (feat. Megan Thee Stallion)",
        "length": 187000,
        "uri": "https://www.jiosaavn.com/song/wap-feat.-megan-thee-stallion/PisqA0RxB0s",
        "artworkUrl": "https://c.saavncdn.com/706/WAP-feat-Megan-Thee-Stallion--English-2020-20200807012028-500x500.jpg",
        "author": "Cardi B",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDypIlpohrPaqkMEa/QQG0OHv3lZ4FFbzcxK8iHkmYKxRMjqvsuK/GWLRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/wap-feat.-megan-thee-stallion/pYrZ2J-ROmo_",
        "artistUrl": "https://www.jiosaavn.com/artist/cardi-b-songs/hWQq3QGVd3g_",
        "albumName": "WAP (feat. Megan Thee Stallion)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Cardi_B_001_20200921152509_500x500.jpg"
      },
      {
        "identifier": "qIqj4nC2",
        "title": "Hot Girl Summer (feat. Nicki Minaj &amp; Ty Dolla $ign)",
        "length": 199000,
        "uri": "https://www.jiosaavn.com/song/hot-girl-summer-feat.-nicki-minaj-ty-dolla-sign/ASEaW0BedAE",
        "artworkUrl": "https://c.saavncdn.com/734/Hot-Girl-Summer-feat-Nicki-Minaj-Ty-Dolla-ign--English-2019-20190809161107-500x500.jpg",
        "author": "Megan Thee Stallion",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyH7D/rc9WvL4JMhJQNpw7mAXnJwUhQ5JteuTXnUjqzMRzJoaLTxYihhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/hot-girl-summer-feat.-nicki-minaj-ty-dolla-sign/JNIMQ2EORAY_",
        "artistUrl": "https://www.jiosaavn.com/artist/megan-thee-stallion-songs/aobbyrFG,rE_",
        "albumName": "Hot Girl Summer (feat. Nicki Minaj &amp; Ty Dolla $ign)",
        "artistArtworkUrl": "https://c.saavncdn.com/734/Hot-Girl-Summer-feat-Nicki-Minaj-Ty-Dolla-ign--English-2019-20190809161107-500x500.jpg"
      },
      {
        "identifier": "Sx3HvLIZ",
        "title": "Yeah!",
        "length": 250000,
        "uri": "https://www.jiosaavn.com/song/yeah/IxBYeQJ8fmk",
        "artworkUrl": "https://c.saavncdn.com/177/Confessions-English-2004-500x500.jpg",
        "author": "Usher",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyPjj8Racv8dmn2hwR/Kl11gcXV4VBfsYpxCmwnIP0AsuexLca734+PBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/confessions-expanded-edition/XyYAklN1i70_",
        "artistUrl": "https://www.jiosaavn.com/artist/usher-songs/66EmgoZH734_",
        "albumName": "Confessions (Expanded Edition)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Usher_500x500.jpg"
      },
      {
        "identifier": "8cm_ORcp",
        "title": "Smack That (Dirty)",
        "length": 215000,
        "uri": "https://www.jiosaavn.com/song/smack-that-dirty/SAsGbjtiVEM",
        "artworkUrl": "https://c.saavncdn.com/470/Smack-That-Intl-MaxiEnhanced-2006-500x500.jpg",
        "author": "Akon",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjYRGVUkm0ReVXd+icJ9F9xJF9lya4tAPgvtRc91+u66Fq8+6S2Tcphw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/smack-that-intl-maxienhanced/hzZriLwOJHI_",
        "artistUrl": "https://www.jiosaavn.com/artist/akon-songs/zvR7Kfs4hHs_",
        "albumName": "Smack That (Intl MaxiEnhanced)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Akon_500x500.jpg"
      },
      {
        "identifier": "i0Lj6b8p",
        "title": "Deli",
        "length": 126000,
        "uri": "https://www.jiosaavn.com/song/deli/GVgnW0JSD0M",
        "artworkUrl": "https://c.saavncdn.com/778/Like-Deluxe-English-2023-20230721103517-500x500.jpg",
        "author": "Ice Spice",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy4XduzydcDtiN55qH+2UpxVYF49SwcERCBneVPI6q7Q9PBVDYM/vDVRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/like..-deluxe/HjPhm0,uYsk_",
        "artistUrl": "https://www.jiosaavn.com/artist/ice-spice-songs/Xzt2sIzLGQ8_",
        "albumName": "Like..? (Deluxe)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Ice_Spice_000_20230831190339_500x500.jpg"
      },
      {
        "identifier": "tJ3_J4wW",
        "title": "In Da Club",
        "length": 193000,
        "uri": "https://www.jiosaavn.com/song/in-da-club/BCJYbj4EQGQ",
        "artworkUrl": "https://c.saavncdn.com/747/Get-Rich-Or-Die-Tryin-New-Intl-Bonus-Track-Version-2004-500x500.jpg",
        "author": "50 Cent",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyns/ApuHN8oN+GS7M+PeEPxxaQjP9KuWRvNRml3hv9z5F6lQAmzylmxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/get-rich-or-die-tryin/ojHxY06XJ7E_",
        "artistUrl": "https://www.jiosaavn.com/artist/50-cent-songs/BN,9i9BYVi0_",
        "albumName": "Get Rich Or Die Tryin'",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/50_Cent_500x500.jpg"
      },
      {
        "identifier": "xexdzLAV",
        "title": "Best Friend (feat. Doja Cat)",
        "length": 155000,
        "uri": "https://www.jiosaavn.com/song/best-friend-feat.-doja-cat/CA0TVQ58dmU",
        "artworkUrl": "https://c.saavncdn.com/200/Best-Friend-feat-Doja-Cat--English-2021-20210313073251-500x500.jpg",
        "author": "Saweetie",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyiBrToXPlu4UZ3Pb5AAfiExPlPmK9N86qycUHe42yVdu1O0h/Ax6T8xw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/best-friend-feat.-doja-cat/Acm4gEfh3wI_",
        "artistUrl": "https://www.jiosaavn.com/artist/saweetie-songs/nI0K8MK0VUQ_",
        "albumName": "Best Friend (feat. Doja Cat)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Saweetie_000_20201125103611.jpg"
      },
      {
        "identifier": "S9MqvuHt",
        "title": "GDFR (feat. Sage the Gemini &amp; Lookas)",
        "length": 190000,
        "uri": "https://www.jiosaavn.com/song/gdfr-feat.-sage-the-gemini-lookas/I1EmQAJFf0c",
        "artworkUrl": "https://c.saavncdn.com/959/GDFR-feat-Sage-The-Gemini-Lookas--English-2014-20190607044539-500x500.jpg",
        "author": "Flo Rida",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyVbI1kvquEtW4Txhyob/Jkl0CQashlqBOTTQVkRhE9t8Py8aoJlWpnRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/gdfr-feat.-sage-the-gemini-lookas/WpMSFBmtLW4_",
        "artistUrl": "https://www.jiosaavn.com/artist/flo-rida-songs/,rth2wKycJU_",
        "albumName": "GDFR (feat. Sage The Gemini &amp; Lookas)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Flo_Rida_500x500.jpg"
      },
      {
        "identifier": "hbVm7UH4",
        "title": "Turn Down for What",
        "length": 213000,
        "uri": "https://www.jiosaavn.com/song/turn-down-for-what/GAo9XENlfwc",
        "artworkUrl": "https://c.saavncdn.com/779/Turn-Down-For-What-2013-500x500.jpg",
        "author": "DJ Snake",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDypU9K++Xp0Qm+MS+rZao5ylDYcweUduuE/wghhlGBbsaG0rJev4/+Thw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/turn-down-for-what/IMIewj7uXe0_",
        "artistUrl": "https://www.jiosaavn.com/artist/dj-snake-songs/XJcyLE5l9k8_",
        "albumName": "Turn Down for What",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Dj_Snake_005_20200822045249_500x500.jpg"
      },
      {
        "identifier": "OwjQgy69",
        "title": "Low (feat. T-Pain)",
        "length": 231000,
        "uri": "https://www.jiosaavn.com/song/low-feat.-t-pain/Px8BYBNJAQo",
        "artworkUrl": "https://c.saavncdn.com/519/Low-feat-T-Pain--English-2008-20190607051146-500x500.jpg",
        "author": "Flo Rida",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy62dCyh2O0Sgb26SeBpkqBccTUQ3lmH0upqIiI2eGK6vWLTjemUnUsxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/low-feat.-t-pain/eg-LEkKvoz0_",
        "artistUrl": "https://www.jiosaavn.com/artist/flo-rida-songs/,rth2wKycJU_",
        "albumName": "Low (feat. T-Pain)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Flo_Rida_500x500.jpg"
      },
      {
        "identifier": "TvDx4M86",
        "title": "Doja",
        "length": 97000,
        "uri": "https://www.jiosaavn.com/song/doja/JB4vSUB9DwU",
        "artworkUrl": "https://c.saavncdn.com/330/Doja-English-2022-20220908200523-500x500.jpg",
        "author": "Central Cee",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyhyK2npzOs/pPH/gquF+3tzHB6KifyStmSaqGRDqFkDYHZtgsZvlVvRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/doja/Sn3khHrl9og_",
        "artistUrl": "https://www.jiosaavn.com/artist/central-cee-songs/cm5rNgdiRI8_",
        "albumName": "Doja",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Central_Cee_000_20231120090544_500x500.jpg"
      },
      {
        "identifier": "u2KD_cX4",
        "title": "Pretty Girls Walk",
        "length": 140000,
        "uri": "https://www.jiosaavn.com/song/pretty-girls-walk/BVogdStTbwc",
        "artworkUrl": "https://c.saavncdn.com/115/Pretty-Girls-Walk-English-2022-20221014071303-500x500.jpg",
        "author": "Big Boss Vette",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDydTsA6jxLoI0pg1K73IsvTDCQW1gas11zhAog5s/Y+y1bbALvxJYJoBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/pretty-girls-walk/7SOTo824Ilw_",
        "artistUrl": "https://www.jiosaavn.com/artist/big-boss-vette-songs/FzbjH-OxAF8_",
        "albumName": "Pretty Girls Walk",
        "artistArtworkUrl": null
      },
      {
        "identifier": "d6TlQccp",
        "title": "Rodeo (Remix)",
        "length": 245000,
        "uri": "https://www.jiosaavn.com/song/rodeo-remix/FF4-XSVTVEM",
        "artworkUrl": "https://c.saavncdn.com/359/Rodeo-Remix-English-2023-20230221122925-500x500.jpg",
        "author": "Lah Pat",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyRPSOVr3UjNzYO6VM7J319mv3WAXepFlstZmnIkFtrR2ipPsdRDViDhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/rodeo-remix/DZm7wWSOL,E_",
        "artistUrl": "https://www.jiosaavn.com/artist/lah-pat-songs/q2QQou,TCMQ_",
        "albumName": "Rodeo (Remix)",
        "artistArtworkUrl": null
      },
      {
        "identifier": "l-UJd-pR",
        "title": "Boss Bitch",
        "length": 134000,
        "uri": "https://www.jiosaavn.com/song/boss-bitch/HEU,exAdR2E",
        "artworkUrl": "https://c.saavncdn.com/538/Boss-Bitch-English-2020-20200120060242-500x500.jpg",
        "author": "Doja Cat",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyqR7lUpytSgZU/+W6BDVJZ3XBXjbqnmPHvr2X2ivGaOXvFh7bNOUQ5Rw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/boss-bitch/h1PjhX9a63Q_",
        "artistUrl": "https://www.jiosaavn.com/artist/doja-cat-songs/GuwOruHLpLk_",
        "albumName": "Boss Bitch",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Doja_Cat_20200218145042_500x500.jpg"
      },
      {
        "identifier": "PbRyLGCZ",
        "title": "Super Freaky Girl",
        "length": 171000,
        "uri": "https://www.jiosaavn.com/song/super-freaky-girl/IAo5SDh3dGk",
        "artworkUrl": "https://c.saavncdn.com/870/Super-Freaky-Girl-English-2022-20231208064715-500x500.jpg",
        "author": "Nicki Minaj",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDySfZV1Ms62iTMUzn0X5ziCgBj1gua3+EEkUYag1x2vClpJSeoKELqcBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/super-freaky-girl/yuTtm2aKQ,g_",
        "artistUrl": "https://www.jiosaavn.com/artist/nicki-minaj-songs/Fd967MiHu-k_",
        "albumName": "Super Freaky Girl",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Nicki_Minaj_500x500.jpg"
      },
      {
        "identifier": "v3WOVJqu",
        "title": "Candy Shop",
        "length": 208000,
        "uri": "https://www.jiosaavn.com/song/candy-shop/Bls8fiJ6RkY",
        "artworkUrl": "https://c.saavncdn.com/087/The-Massacre-English-2004-500x500.jpg",
        "author": "50 Cent",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyeaHgubQ6RLZc9dvDvl5kW8EKpv7vkxc2tIvvjIVH6KkaKmbqp38wHhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/the-massacre/IAQb5VcwfF8_",
        "artistUrl": "https://www.jiosaavn.com/artist/50-cent-songs/BN,9i9BYVi0_",
        "albumName": "The Massacre",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/50_Cent_500x500.jpg"
      },
      {
        "identifier": "vr_Z7SmC",
        "title": "Crank That (Soulja Boy)",
        "length": 224000,
        "uri": "https://www.jiosaavn.com/song/crank-that-soulja-boy/Bho0a0NjWnA",
        "artworkUrl": "https://c.saavncdn.com/597/souljaboytellem-com-Unknown-2007-20210222184413-500x500.jpg",
        "author": "Soulja Boy Tell'em",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyPQJ3hDIIvTPfdfHDken5VhvKMISai+htEeucEBE/O/2UIO/9bFOM+hw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/souljaboytellem.com/hObpgOYvz4A_",
        "artistUrl": "https://www.jiosaavn.com/artist/soulja-boy-tellem-songs/S2adExAohVk_",
        "albumName": "souljaboytellem.com",
        "artistArtworkUrl": "https://c.saavncdn.com/034/Crank-That-Soulja-Boy-International-Version-2007-500x500.jpg"
      },
      {
        "identifier": "8aY32yX3",
        "title": "Watch Me (Whip / Nae Nae)",
        "length": 185000,
        "uri": "https://www.jiosaavn.com/song/watch-me-whip-nae-nae/SAkyAkZJbwA",
        "artworkUrl": "https://c.saavncdn.com/825/Watch-Me-Whip-Nae-Nae-English-2015-500x500.jpg",
        "author": "Silentó",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy+Yjw7EV0p/cHad5FZqaLnRbjnzVfF+00XNejb/+Sn4c//C7zn+MirBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/watch-me-whip-nae-nae/LavXudeAsYg_",
        "artistUrl": "https://www.jiosaavn.com/artist/silento-songs/mUMLQvWoUNA_",
        "albumName": "Watch Me (Whip / Nae Nae)",
        "artistArtworkUrl": "https://c.saavncdn.com/825/Watch-Me-Whip-Nae-Nae-English-2015-500x500.jpg"
      },
      {
        "identifier": "LQsOhEMw",
        "title": "Stronger",
        "length": 312000,
        "uri": "https://www.jiosaavn.com/song/stronger/PDkYfhx1ekQ",
        "artworkUrl": "https://c.saavncdn.com/638/Stronger-English-2007-20200724142539-500x500.jpg",
        "author": "Kanye West",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOq0GgU+/v/roNHp9HpYaEpIaih81DIPK/bybUS/HyBGF7F34t2LV+Bw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/stronger/EWUO1nLPH9Q_",
        "artistUrl": "https://www.jiosaavn.com/artist/kanye-west-songs/mZP,lrb0a3I_",
        "albumName": "Stronger",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Kanye_West_002_20200822050858_500x500.jpg"
      },
      {
        "identifier": "Gut2ihUr",
        "title": "Up",
        "length": 156000,
        "uri": "https://www.jiosaavn.com/song/up/Nx0fAx1YYkE",
        "artworkUrl": "https://c.saavncdn.com/351/Up-English-2021-20210205060613-500x500.jpg",
        "author": "Cardi B",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymx97kI1oQlbkSCr6bCQ38R8lGNNw0xAFbtJApyH93OtvZN6Mwb3gOxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/up/MsfVktJZLvE_",
        "artistUrl": "https://www.jiosaavn.com/artist/cardi-b-songs/hWQq3QGVd3g_",
        "albumName": "Up",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Cardi_B_001_20200921152509_500x500.jpg"
      },
      {
        "identifier": "s7rr_pxv",
        "title": "BILLIE EILISH.",
        "length": 99000,
        "uri": "https://www.jiosaavn.com/song/billie-eilish./A18ZQytAT0U",
        "artworkUrl": "https://c.saavncdn.com/659/BILLIE-EILISH-English-2022-20220610103714-500x500.jpg",
        "author": "Armani White",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDymlMOPHV+d5X0Hk8OalGB3gtXdLoFU9vveMJV1Gm0ebhQ0ia0KL0gyxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/billie-eilish./3WoWK9HyS28_",
        "artistUrl": "https://www.jiosaavn.com/artist/armani-white-songs/0HqzsvskZKw_",
        "albumName": "BILLIE EILISH.",
        "artistArtworkUrl": "https://c.saavncdn.com/214/hiding-out-west-English-2019-20190215220352-500x500.jpg"
      },
      {
        "identifier": "2211vHOQ",
        "title": "Bongos (feat. Megan Thee Stallion)",
        "length": 175000,
        "uri": "https://www.jiosaavn.com/song/bongos-feat.-megan-thee-stallion/QlpaAAJ4eGI",
        "artworkUrl": "https://c.saavncdn.com/718/Bongos-feat-Megan-Thee-Stallion-English-2023-20230908034947-500x500.jpg",
        "author": "Cardi B",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy0WLKteAk5UWmUbCn03A5QKVwlKWE3/ybOcx6NDqfVetI/ZzG+I1AoBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/bongos-feat.-megan-thee-stallion/BfLsuj8BSKk_",
        "artistUrl": "https://www.jiosaavn.com/artist/cardi-b-songs/hWQq3QGVd3g_",
        "albumName": "Bongos (feat. Megan Thee Stallion)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Cardi_B_001_20200921152509_500x500.jpg"
      },
      {
        "identifier": "XFTT7Z4m",
        "title": "Players",
        "length": 141000,
        "uri": "https://www.jiosaavn.com/song/players/KC4-ZUNqA14",
        "artworkUrl": "https://c.saavncdn.com/882/Players-English-2022-20221130065628-500x500.jpg",
        "author": "Coi Leray",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDydk4reWw3QmVKz/mpeK0twrWNwVuWJC+SnX8V7b1ZDt1hlme23pwpcxw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/players/vAPbJqI-YvY_",
        "artistUrl": "https://www.jiosaavn.com/artist/coi-leray-songs/q5j6Mx,2XCE_",
        "albumName": "Players",
        "artistArtworkUrl": "https://c.saavncdn.com/881/No-Longer-Mine-English-2018-20180912230954-500x500.jpg"
      },
      {
        "identifier": "o8DU9UT5",
        "title": "Die Hard",
        "length": 239000,
        "uri": "https://www.jiosaavn.com/song/die-hard/H1AvZE1lYwY",
        "artworkUrl": "https://c.saavncdn.com/654/Mr-Morale-The-Big-Steppers-English-2022-20220527103400-500x500.jpg",
        "author": "Amanda Reifer",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyUZc02/bwDIrSXtL1p/D4A9v8cIaYdm8XHo0+Xt9OnYqWXZDuhLdjOhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/mr.-morale-the-big-steppers/Z9WSDVxNN,w_",
        "artistUrl": "https://www.jiosaavn.com/artist/amanda-reifer-songs/aKJoJ31jq8o_",
        "albumName": "Mr. Morale &amp; The Big Steppers",
        "artistArtworkUrl": null
      },
      {
        "identifier": "z0jaagEb",
        "title": "Put It On Da Floor Again",
        "length": 181000,
        "uri": "https://www.jiosaavn.com/song/put-it-on-da-floor-again/ClgBUBVXclE",
        "artworkUrl": "https://c.saavncdn.com/349/Put-It-On-Da-Floor-Again-English-2023-20230601054657-500x500.jpg",
        "author": "Latto",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyvYTmaOKPvluth8ryWLo5W8lUNhtR274opYiQ9XW6i6uErSNQbEXaLhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/put-it-on-da-floor-again/UW0UJvNqFrQ_",
        "artistUrl": "https://www.jiosaavn.com/artist/latto-songs/1JYqF,NlmlU_",
        "albumName": "Put It On Da Floor Again",
        "artistArtworkUrl": null
      },
      {
        "identifier": "wMvqgHUe",
        "title": "Hot Shit (feat. Kanye West &amp; Lil Durk)",
        "length": 211000,
        "uri": "https://www.jiosaavn.com/song/hot-shit-feat.-kanye-west-lil-durk/ByUdQBN4YlY",
        "artworkUrl": "https://c.saavncdn.com/793/Hot-Shit-feat-Kanye-West-Lil-Durk-English-2022-20220701121849-500x500.jpg",
        "author": "Cardi B",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDykJip6XKMemHptNKvHneCtpF7aCmr2L5varZYjJZnFEPeyG/IpSe6pRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/hot-shit-feat.-kanye-west-lil-durk/ewtJIPxJPX0_",
        "artistUrl": "https://www.jiosaavn.com/artist/cardi-b-songs/hWQq3QGVd3g_",
        "albumName": "Hot Shit (feat. Kanye West &amp; Lil Durk)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Cardi_B_001_20200921152509_500x500.jpg"
      },
      {
        "identifier": "ijYVr825",
        "title": "BREAK MY SOUL",
        "length": 278000,
        "uri": "https://www.jiosaavn.com/song/break-my-soul/GQIyZwYIBQY",
        "artworkUrl": "https://c.saavncdn.com/974/RENAISSANCE-English-2022-20220802233341-500x500.jpg",
        "author": "Beyoncé",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyVA6in0t4/yolqscQ8HVnqu2vBWqAddEY+J/GUTld51zYho9Hp76bmBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/renaissance/GmF9LOxJcoI_",
        "artistUrl": "https://www.jiosaavn.com/artist/beyonce-songs/UVXieI6jW5I_",
        "albumName": "RENAISSANCE",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Beyonce_500x500.jpg"
      },
      {
        "identifier": "g8VbJP7i",
        "title": "Hot In Herre",
        "length": 228000,
        "uri": "https://www.jiosaavn.com/song/hot-in-herre/F1A9Uz5gAFo",
        "artworkUrl": "https://c.saavncdn.com/720/Nellyville-Explicit-Version-2003-500x500.jpg",
        "author": "Nelly",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyegXkCbBoLZuVArkXt1BvluCyjrtJosPmxtkO7Raio9yM/DiZIWnyFBw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/nellyville/h65IN79uZDg_",
        "artistUrl": "https://www.jiosaavn.com/artist/nelly-songs/jfXKWQYw3mI_",
        "albumName": "Nellyville",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Nelly_500x500.jpg"
      },
      {
        "identifier": "Uv_vKsuB",
        "title": "Get Low",
        "length": 334000,
        "uri": "https://www.jiosaavn.com/song/get-low/JR40Rz9DQnE",
        "artworkUrl": "https://c.saavncdn.com/856/Kings-Of-Crunk-English-2002-500x500.jpg",
        "author": "Lil Jon &amp; The East Side Boyz",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyUBKbbA6FEpSRxpULuwTYp0na/coSPZjSbzNbnzYi7bE1GFIzYUJTvRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/kings-of-crunk/5CAr32ojLoE_",
        "artistUrl": "https://www.jiosaavn.com/artist/lil-jon-the-east-side-boyz-songs/s4TnuF7O,yI_",
        "albumName": "Kings Of Crunk",
        "artistArtworkUrl": "https://c.saavncdn.com/475/Kings-Of-Crunk-2003-500x500.jpg"
      },
      {
        "identifier": "IvZ62ahu",
        "title": "Munch (Feelin’ U)",
        "length": 105000,
        "uri": "https://www.jiosaavn.com/song/munch-feelin%e2%80%99-u/OR4xB0ZRX0Y",
        "artworkUrl": "https://c.saavncdn.com/921/Munch-Feelin-U-English-2022-20220805170505-500x500.jpg",
        "author": "Ice Spice",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyOZAkXARlK29ewWRakAL6wSwO/c+RUqEEzLzIs4Y3xkLI5SvMTfslwRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/munch-feelin%e2%80%99-u/LgGLSvVlwBE_",
        "artistUrl": "https://www.jiosaavn.com/artist/ice-spice-songs/Xzt2sIzLGQ8_",
        "albumName": "Munch (Feelin’ U)",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Ice_Spice_000_20230831190339_500x500.jpg"
      },
      {
        "identifier": "aml-diw_",
        "title": "Juicy",
        "length": 202000,
        "uri": "https://www.jiosaavn.com/song/juicy/EQUHHBBZQGw",
        "artworkUrl": "https://c.saavncdn.com/824/Hot-Pink-English-2019-20230921102340-500x500.jpg",
        "author": "Doja Cat",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyFl1zh5SkuCUJdKr8cSjXLas5Y51TBCpwb2OckUcVIdLoolKy7oz8gRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/hot-pink/H0gmjZ0q0j4_",
        "artistUrl": "https://www.jiosaavn.com/artist/doja-cat-songs/GuwOruHLpLk_",
        "albumName": "Hot Pink",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Doja_Cat_20200218145042_500x500.jpg"
      },
      {
        "identifier": "DbvecDA2",
        "title": "Body",
        "length": 171000,
        "uri": "https://www.jiosaavn.com/song/body/NAodVBd0dgE",
        "artworkUrl": "https://c.saavncdn.com/203/Good-News-English-2020-20201208024107-500x500.jpg",
        "author": "Megan Thee Stallion",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyqvk8p31UY96l41R8hv7oqdYlzCwq9bootVKXL+x2ffghQx1hRnBQnRw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/good-news/SeSs6FTYsK0_",
        "artistUrl": "https://www.jiosaavn.com/artist/megan-thee-stallion-songs/aobbyrFG,rE_",
        "albumName": "Good News",
        "artistArtworkUrl": "https://c.saavncdn.com/734/Hot-Girl-Summer-feat-Nicki-Minaj-Ty-Dolla-ign--English-2019-20190809161107-500x500.jpg"
      },
      {
        "identifier": "piElwumk",
        "title": "Big Energy",
        "length": 173000,
        "uri": "https://www.jiosaavn.com/song/big-energy/AAEuXQNFWlg",
        "artworkUrl": "https://c.saavncdn.com/885/Big-Energy-English-2021-20210911032815-500x500.jpg",
        "author": "Latto",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyCH0DvYmHdw70TrBd/0mVXoTOPSA6G1MRcm3d4ch0b769WveuyrNbrhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/big-energy/HBMgVVJTDoM_",
        "artistUrl": "https://www.jiosaavn.com/artist/latto-songs/1JYqF,NlmlU_",
        "albumName": "Big Energy",
        "artistArtworkUrl": null
      },
      {
        "identifier": "eCzwwWBJ",
        "title": "Massive",
        "length": 336000,
        "uri": "https://www.jiosaavn.com/song/massive/FSsRRgNndXk",
        "artworkUrl": "https://c.saavncdn.com/386/Honestly-Nevermind-English-2022-20220617103817-500x500.jpg",
        "author": "Drake",
        "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDycS+Pd8cIssJsKy9NecwGXl7FMEJ9XeDUSQxx4F7psJWuflsUnp3WFhw7tS9a8Gtq",
        "albumUrl": "https://www.jiosaavn.com/album/honestly-nevermind/G8YjEpcOqas_",
        "artistUrl": "https://www.jiosaavn.com/artist/drake-songs/OvhQgUpCwJY_",
        "albumName": "Honestly, Nevermind",
        "artistArtworkUrl": "https://c.saavncdn.com/artists/Drake_005_20220704120432_500x500.jpg"
      }
    ],
    "totalSongs": "50"
  }
}

```

</details>

---

### `/api/recommendations`
- **Method:** `GET`
- **Description:** Retrieves recommendations based on a provided ID.
- **Parameters:**
  - `id` (required): The ID of the track, album, or artist for which to fetch recommendations.
  - `limit` (optional): The number of recommendations to return (default is 10).
  - **Example Request:** `/api/recommendations?id=3g5G9QTu&limit=5`
- **Response Format:** Returns a JSON object with recommended tracks, albums, or artists.

<details>
<summary>Response Example</summary>

```json
{
  "tracks": [
    {
      "identifier": "yDeAS8Eh",
      "title": "Bones",
      "length": 165000,
      "uri": "https://www.jiosaavn.com/s/song/english/bones/bones/CSwOcCcIcls",
      "artworkUrl": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-500x500.webp",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyYv3BypMXm+i9yIVp8to/yg315nEaTyTwJImD7iW6ETKk8NW4IGWzcxw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/s/album/english/bones-/8jGpGcwI,fM_",
      "artistUrl": null,
      "albumName": "Bones",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "BeXBcbVK",
      "title": "Believer",
      "length": 202000,
      "uri": "https://www.jiosaavn.com/s/song/english/evolve/believer/Mg0zcxdSYXg",
      "artworkUrl": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.webp",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy6UWMvucrWHxfIRjtvw8g35/f89z5MoGc71/Y9eRN3bK0jKAAHF631xw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/s/album/english/evolve-/gvCWqZLfVbs_",
      "artistUrl": null,
      "albumName": "Evolve",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "zikdtWU6",
      "title": "Thunder",
      "length": 187000,
      "uri": "https://www.jiosaavn.com/s/song/english/evolve/thunder/CgEAVQBnYgU",
      "artworkUrl": "https://c.saavncdn.com/248/Evolve-English-2017-20180716230950-500x500.webp",
      "author": "Imagine Dragons",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyTw/mSJGh9d0ylU+tXjidqI5EseuyTATLVpfW1aGWU5NGzizBb5sZ7Rw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/s/album/english/evolve-/gvCWqZLfVbs_",
      "artistUrl": null,
      "albumName": "Evolve",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
    },
    {
      "identifier": "6o8JoQ8b",
      "title": "Perfect",
      "length": 263000,
      "uri": "https://www.jiosaavn.com/s/song/english/%c3%b7/perfect/RgdTexthD1E",
      "artworkUrl": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
      "author": "Ed Sheeran",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyjLJatj30eCYo8W/T/nVreaZTbB+LPRvCYdcDxZKjYlxdk812I6LIsBw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/s/album/english/%c3%b7-/KelXOKU4pi4_",
      "artistUrl": null,
      "albumName": "÷",
      "artistArtworkUrl": "https://c.saavncdn.com/artists/Ed_Sheeran_500x500.jpg"
    },
    {
      "identifier": "HAk1__h6",
      "title": "Gangsta's Paradise (feat. L.V.)",
      "length": 243000,
      "uri": "https://www.jiosaavn.com/s/song/english/gangstas-paradise/gangstas-paradise-feat.-l.v./OCkAACtvXwU",
      "artworkUrl": "https://c.saavncdn.com/365/Gangsta-s-Paradise-English-1995-20190607041555-500x500.webp",
      "author": "Coolio",
      "encryptedMediaUrl": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDynilRr+NxI4sJK+gEcfjWpDXiQGhKbQTe2Eb2610zav8gpbYfMjCm1Bw7tS9a8Gtq",
      "albumUrl": "https://www.jiosaavn.com/s/album/english/gangstas-paradise-/g5jDlg6Rwuk_",
      "artistUrl": null,
      "albumName": "Gangsta's Paradise",
      "artistArtworkUrl": "https://c.saavncdn.com/751/Gangsta-s-Paradise-as-heard-in-The-Green-Hornet-Re-Recorded-Re-Mastered-Version--English-2008-20171120202503-500x500.jpg"
    }
  ]
}

```

</details>

---

### /api/media-url
- **Method:** GET
- **Description:** Retrieves and decrypts the direct media URL for a track. Pass either a track URL or track ID to get the playable media URL.
- **Parameters:**
  - `url (optional): The JioSaavn track URL. If provided, the track ID will be extracted from it.
  - `id (optional): The direct track ID. If provided, this takes priority over URL.
  - **Note:** Either `url or `id must be provided.
  - **Example Request (with URL):** `/api/media-url?url=https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y
  - **Example Request (with ID):** `/api/media-url?id=3g5G9QTu
- **Response Format:** Returns a JSON object with the decrypted media URL.

<details>
<summary>Response Example</summary>

`json
{
  "mediaUrl": "https://aac.saavncdn.com/091/0d3cfd6080a23f13ace1c38c3296e18f_320.mp4"
}
`

</details>

---

## 👤 Author

**notdeltaxd**
- GitHub: [@notdeltaxd](https://github.com/notdeltaxd)
- Repository: [https://github.com/notdeltaxd/jiosaavn-plugin-api](https://github.com/notdeltaxd/jiosaavn-plugin-api)

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)**. See the [LICENSE](LICENSE) file for full details.
