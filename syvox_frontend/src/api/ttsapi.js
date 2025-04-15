const BASE_URL = "/api/";

export const fetchTTSJob = () => {
    return fetch(`${BASE_URL}tts_jobs/`)
    .then(res => res.json())
    .then(data => data.json)
    .catch(error => {
        console.log("Error fetching TTS Jobs", error);
        return [];
    });
};

export const createTTSJob = (jobName, description) => {
    return fetch(`${BASE_URL}tts_create_job/`, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({job_name:jobName, description}),
    })
    .then(res => res.json())
    .catch(error => {
        console.error("Error creating TTS Job", error);
        return {error : "Fail to create job"};
    });
};

export const processTTSJob = (jobid) => {
    return fetch(`${BASE_URL}/tts/${jobid}`, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
    })
    .then(res => res.json())
    .catch(error => {
        console.error("Error processing TTS Job", error);
        return {error : "Failed to return Job"};
    });
};

export const deleteTTSJob = (jobid) => {
    return fetch(`${BASE_URL}tts_delete_job/${jobid}/` {
        method : "DELETE",
    })
    .then(res => res.json())
    .catch(error => {
        console.error("Error deleting job", error);
        return{error:"Failed to return job"};
    });
};