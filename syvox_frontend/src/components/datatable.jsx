import React from "react";
import './css/datatable.css';

const DataTable = ({ rows = [], type, onDelete, onProcess }) => {
    return (
        <div className="data-table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Type</th>
                        <th>Job Name</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th>File Location</th>
                        <th>Download</th>
                        <th>Status</th>
                        <th>{type === "TTS" ? "Audio" : "Preview"}</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows.map((job, index) => (
                            <tr key={job.id}>
                                <td>{index + 1}</td>
                                <td>{job.type}</td>
                                <td>{job.job_name}</td>
                                <td>{job.description?.substring(0, 20)}...</td>
                                <td>{job.created_date}</td>
                                <td>{job.file_location || "N/A"}</td>
                                <td>
                                    {job.download_link || job.file_location ? (
                                        <a href={job.download_link || job.file_location} download>Download</a>
                                    ) : "N/A"}
                                </td>
                                <td>{job.status}</td>
                                <td>
                                    {type === "STT" && job.download_link ? (
                                        <a href={job.download_link} target="_blank" rel="noopener noreferrer">Open</a>
                                    ) : type === "TTS" && job.audio_file && job.status === "DONE" ? (
                                        <audio controls>
                                            <source src={job.audio_file} type="audio/mp3" />
                                            Your browser does not support audio.
                                        </audio>
                                    ) : "N/A"}
                                </td>
                                <td>
                                    <button onClick={() => onDelete(job.id)}>Delete</button>
                                    <button onClick={() => onProcess(job.id)}>Process</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;