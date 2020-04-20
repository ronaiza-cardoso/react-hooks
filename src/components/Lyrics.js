import React, { useEffect, useState } from 'react'

const URL = encodeURI(`https://api.lyrics.ovh/v1/banda calypso/a lua me traiu`)


export default function Lyrics() {
    const [lyric, setLyric] = useState()

    useEffect(() => {
        loadLyrics();
    }, []);

    async function loadLyrics() {
        fetch(URL)
        .then(response => response.json())
        .then(({ lyrics }) => setLyric(lyrics))
    }

    return (
        <div style={{ padding: '40px' }}>
            <p>{lyric}</p>
        </div>
    );
}
