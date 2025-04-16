const BASE_URL = "/api/";

export const fetchTTSJobs = () => {
    return fetch(`${BASE_URL}TTS/tts_jobs/`)
        .then(res => res.json());
};

export const fetchSTTJobs = () => {
    return fetch(`${BASE_URL}STT/stt_jobs/`)
        .then(res => res.json());
};