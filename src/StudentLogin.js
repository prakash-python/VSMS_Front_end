import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const login = () => {
        const login_url = 'http://127.0.0.1:8000/Vsms_Api/login/'; // Update if needed based on your Django endpoint
        const credentials = {
            username: email,
            password: pwd
        };

        console.log('Sending credentials:', credentials);

        axios.post(login_url, credentials)
            .then((resp) => {
                console.log('Response received:', resp);

                if (resp.status === 200 && resp.data.access) {
                    // Store the token in localStorage
                    localStorage.setItem('token', resp.data.access);  // Assuming the token is in `access` field
                    console.log('Token stored:', resp.data.access);

                    // Navigate to the student details page
                    navigate('/student-details/');
                } else {
                    console.error('Token not found in response:', resp.data);
                    alert('Login failed: Invalid response from server.');
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.error('API Error:', error.response.data);
                    alert(error.response.data.detail || 'Login failed. Please check your credentials.');
                } else {
                    console.error('Request Error:', error.message);
                    alert('Server is not responding. Please try again later.');
                }
            });
    };

    return (
        <div className="maindiv">
            <div className="subdiv">
                <label>
                    UserName:
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br /><br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={pwd}
                        placeholder="Enter password"
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </label>
                <br /><br />
                <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
}

export default StudentLogin;
