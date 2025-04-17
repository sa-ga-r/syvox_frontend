const BASE_URL = 'https://symmetrical-space-spoon-56qg5vjqr65cv5pw-8000.app.github.dev/';

export const fetchTTSJobs = () => {
    return fetch(`${BASE_URL}TTS/tts_jobs/`, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
        },
        mode : "cors"
    })
        .then(res => res.json());
};

export const fetchSTTJobs = () => {
    return fetch(`${BASE_URL}STT/stt_jobs/`, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
        },
        mode : "cors"
    })
        .then(res => res.json());
};