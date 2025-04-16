const BASE_URL = "/api/";

export const fetchSTTJobs = () => {
    return fetch(`${BASE_URL}STT/`)
        .then(res => res.json())
        .then(data => data.jobs);
};

export const createSTTJob = (jobName, description, file) => {
    const formData = new FormData();
    formData.append("job_name", jobName);
    formData.append("description", description);
    if (file) {
        formData.append("upload_file", file);
    }

    return fetch(`${BASE_URL}stt_create_job/`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json());
};

export const processSTTJob = (jobId) => {
    return fetch(`${BASE_URL}gen_stt/${jobId}/`, {
        method: 'POST'
    })
        .then(res => res.json());
};

export const deleteSTTJob = (jobId) => {
    return fetch(`${BASE_URL}stt_delete_job/${jobId}/`, {
        method: 'DELETE'
    })
        .then(res => res.json());
};