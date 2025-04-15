import React, { useEffect, useState } from 'react';
import NavBar from '.components/navbar';
import TopBar from '.components/topbar';
import Form from '.components/form';
import DataTable from '.components/datatable';
import { fetchSTTJobs, createSTTJob, processSTTJob, deleteSTTJob } from './api/sttapi';

const STT = () => {
    const [jobs, setJobs] = useState([]);
    const [jobName, setJobName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        fetchSTTJobs().then(data => setJobs(data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!jobName || !description || !file) return alert("All fields are required.");

        createSTTJob(jobName, description, file).then(() => {
            setJobName('');
            setDescription('');
            setFile(null);
            fetchJobs();
        });
    };

    const handleDelete = (id) => {
        deleteSTTJob(id).then(() => fetchJobs());
    };

    const handleProcess = (id) => {
        processSTTJob(id).then(() => fetchJobs());
    };

    return (
        <div>
            <TopBar />
            <NavBar />
            <section className="form-section">
                <form className="form-grid" onSubmit={handleSubmit}>
                    <div className="form-left">
                        <label>Job Title:</label>
                        <input
                            type="text"
                            value={jobName}
                            onChange={(e) => setJobName(e.target.value)}
                            placeholder="Enter Title"
                        />
                    </div>
                    <div className="form-right">
                        <label>Job Type:</label>
                        <select value="STT" disabled>
                            <option value="STT">STT</option>
                        </select>
                    </div>
                    <div className="description">
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter job description"
                            rows="4"
                        />
                    </div>
                    <div className="file-upload">
                        <label>Upload file for Transcription:</label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="form-submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>

            <DataTable
                rows={jobs}
                type="STT"
                onDelete={handleDelete}
                onProcess={handleProcess}
            />
        </div>
    );
};

export default STT;