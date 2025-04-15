export const fetchTTSJobs = () => {
    return fetch('/tts_jobs/')
        .then(res => res.json());
};


export const fetchSTTJobs = () => {
    return fetch('/stt_jobs/')
        .then(res => res.json());
};