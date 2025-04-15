import React, { useEffect, useState } from 'react';
import TopBar from './components/topbar';
import NavBar from './components/bavbar';
import Form from './components/form';
import DataTable from './components/datatable';
import {
    createTTSJob,
    deleteTTSJob,
    fetchTTSJobs,
    processTTSJob
} from './api/ttsapi';

const TTS = () => {
    const [jobs, setJobs] = useState([]);

    const loadJobs = async () => {
        const fetchedJobs = await fetchTTSJobs();
        setJobs(fetchedJobs);
    };

    useEffect(() => {
        loadJobs();
    }, []);

    const handleCreate = async (jobName, description) => {
        await createTTSJob(jobName, description);
        loadJobs();
    };

    const handleDelete = async (jobId) => {
        await deleteTTSJob(jobId);
        loadJobs();
    };

    const handleProcess = async (jobId) => {
        await processTTSJob(jobId);
        loadJobs();
    };

    return (
        <div className="page-container">
            <TopBar />
            <div className="main-content">
                <NavBar />
                <div className="content-area">
                    <h1 className="page-title">Text to Speech [TTS]</h1>
                    <Form onCreate={handleCreate} />
                    <DataTable
                        type="TTS"
                        rows={jobs}
                        onDelete={handleDelete}
                        onProcess={handleProcess}
                    />
                </div>
            </div>
        </div>
    );
};

export default TTS;