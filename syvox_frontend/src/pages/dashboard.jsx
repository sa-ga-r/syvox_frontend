import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import TopBar from '../components/topbar';
import DataTable from '../components/datatable';
import { fetchSTTJobs, fetchTTSJobs } from '../api/dashboardapi';

const Dashboard = () => {
    const [sttJobs, setSttJobs] = useState([]);
    const [ttsJobs, setTtsJobs] = useState([]);

    const loadJobs = () => {
        fetchSTTJobs().then(data => setSttJobs(data.jobs));
        fetchTTSJobs().then(data => setTtsJobs(data.jobs));
    };

    useEffect(() => {
        loadJobs();
    }, []);

    const handleDelete = (id, type) => {
        const url = type === 'TTS' ? `/tts_delete_job/${id}/` : `/stt_delete_job/${id}/`;
        fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => loadJobs());
    };

    const handleProcess = (id, type) => {
        const url = type === 'TTS' ? `/tts/${id}/` : `/gen_stt/${id}/`;
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then(() => loadJobs());
    };

    return (
        <div>
            <TopBar />
            <NavBar />
            <div className="dashboard">
                <h2>Text-to-Speech Jobs</h2>
                <DataTable
                    rows={ttsJobs}
                    type="TTS"
                    onDelete={(id) => handleDelete(id, 'TTS')}
                    onProcess={(id) => handleProcess(id, 'TTS')}
                />

                <h2 style={{ marginTop: '2rem' }}>Speech-to-Text [STT]</h2>
                <DataTable
                    rows={sttJobs}
                    type="STT"
                    onDelete={(id) => handleDelete(id, 'STT')}
                    onProcess={(id) => handleProcess(id, 'STT')}
                />
            </div>
        </div>
    );
};

export default Dashboard;