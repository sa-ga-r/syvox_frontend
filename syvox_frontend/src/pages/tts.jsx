import React, { useEffect, useState } from 'react';
import TopBar from '../components/topbar';
import NavBar from '../components/navbar';
import Form from '../components/form';
import DataTable from '../components/datatable';
import {
    fetchTTSJobs,
    createTTSJob,
    processTTSJob,
    deleteTTSJob
} from '../api/ttsapi';

const TTS = () => {
    const [ttsJobs, setTtsJobs] = useState([]);

    const loadJobs = () => {
        fetchTTSJobs().then(data => setTtsJobs(data));
    };

    const handleCreate = (jobName, description) => {
        createTTSJob(jobName, description).then(() => loadJobs());
    };

    const handleDelete = (id) => {
        deleteTTSJob(id).then(() => loadJobs());
    };

    const handleProcess = (id) => {
        processTTSJob(id).then(() => loadJobs());
    };

    useEffect(() => {
        loadJobs();
    }, []);

    return (
        <div>
            <TopBar />
            <NavBar />
            <div className="tts-page" style={{ padding: '2rem' }}>
                <h2>Create Text-to-Speech Job</h2>
                <Form onCreate={handleCreate} />
                <h2 style={{ marginTop: '3rem' }}>Existing Jobs</h2>
                <DataTable
                    rows={ttsJobs}
                    type="TTS"
                    onDelete={handleDelete}
                    onProcess={handleProcess}
                />
            </div>
        </div>
    );
};

export default TTS;