import React, { useState } from 'react';
import "./css/form.css";

const Form = () => {
    const [mode, setMode] = useState("STT")
    return(
        <section className="form-section">
            <form className="form-grid">
                <div className="form-left">
                    <label>Job Title:</label>
                    <input type="text" placeholder="Enter Title" />
                </div>
                <div className="form-right">
                    <label>Job Type:</label>
                    <select value={mode} onChange={(e)=>{setMode(e.target.value)}}>
                        <option value = "TTS"></option>
                        <option value = "STT"></option>
                    </select>
                </div>
                <div className="description">
                    <label>Description:</label>
                    <textarea placeholder='Enter job description' rows="4" />
                </div>
                {mode === "STT" && (
                    <div className='file-upload'>
                        <label>Upload file for Transcription:</label>
                        <input type="file" />
                    </div>
                )}
                <div className='form-submit'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section>
    );
};
export default Form;