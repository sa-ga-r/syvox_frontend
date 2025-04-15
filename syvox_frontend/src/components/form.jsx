import React, { useState } from 'react';
import "./css/form.css";

const Form = ({ onCreate }) => {
    const [mode, setMode] = useState("TTS");
    const [jobName, setJobName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (jobName && description && mode === "TTS") {
            onCreate(jobName, description);
            setJobName("");
            setDescription("");
        }
    };

    return (
        <section className="form-section">
            <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-left">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={jobName}
                        onChange={(e) => setJobName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-right">
                    <label>Job Type:</label>
                    <select value={mode} onChange={(e) => setMode(e.target.value)}>
                        <option value="TTS">TTS</option>
                        <option value="STT">STT</option>
                    </select>
                </div>
                <div className="description">
                    <label>Description:</label>
                    <textarea
                        placeholder='Enter job description'
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                {mode === "STT" && (
                    <div className='file-upload'>
                        <label>Upload file for Transcription:</label>
                        <input type="file" disabled />
                    </div>
                )}
                <div className='form-submit'>
                    <button type='submit' disabled={mode !== "TTS"}>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Form;