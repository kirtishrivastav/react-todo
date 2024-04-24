import { useState } from "react";
import axios from 'axios';

const Student = () => {
    const [student_id, setStudent_id] = useState('');
    const [student_name, setStudent_name] = useState('');

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { student_id, student_name };
            const response = await fetch("http://localhost:5001/student", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            window.location="/"
            if (response.ok) {
                console.log("Student added successfully");
                // Optionally, you can reset the input fields after successful submission
                setStudent_id('');
                setStudent_name('');
            } else {
                console.error("Failed to add student");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" value={student_id} onChange={e => setStudent_id(e.target.value)} />
                <input type="text" value={student_name} onChange={e => setStudent_name(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Student;
