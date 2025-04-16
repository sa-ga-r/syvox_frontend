import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/navbar';
import TopBar from '../components/topbar';
import DataTable from '../components/datatable';
import { fetchSTTJobs, fetchTTSJobs } from '../api/dashboardapi';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const location = useLocation();

    const loadJobs = async () => {
        try {
            const [sttData, ttsData] = await Promise.all([fetchSTTJobs(), fetchTTSJobs()]);

            const sttJobs = (sttData.jobs || []).map(job => ({ ...job, type: 'STT' }));
            const ttsJobs = (ttsData.jobs || []).map(job => ({ ...job, type: 'TTS' }));

            const combined = [...sttJobs, ...ttsJobs];
            combined.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            setJobs(combined);
        } catch (error) {
            console.error('Error loading jobs:', error);
        }
    };

    useEffect(() => {
        loadJobs();
    }, [location.pathname]);

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
                <h2>All Jobs</h2>
                <DataTable
                    rows={jobs}
                    typeColumn={true}
                    onDelete={(id, type) => handleDelete(id, type)}
                    onProcess={(id, type) => handleProcess(id, type)}
                />
            </div>
        </div>
    );
};

export default Dashboard;