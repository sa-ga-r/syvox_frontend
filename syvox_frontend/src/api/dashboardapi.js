const BASE_URL = "/api/";

export const fetchTTSJobs = () => {
    return fetch(`${BASE_URL}TTS/`)
        .then(res => res.json());
};

export const fetchSTTJobs = () => {
    return fetch(`${BASE_URL}STT/`)
        .then(res => res.json());
};