import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import DataTable from '../components/DataTable';
import {
    createTTSJob,
    deleteTTSJob,
    fetchTTSJobs,
    processTTSJob
} from '../api/ttsApi';

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
            <Topbar />
            <div className="main-content">
                <Navbar />
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