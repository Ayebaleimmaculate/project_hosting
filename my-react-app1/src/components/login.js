import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [userType, setUserType] = useState(''); // Added userType state

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {  // Adjusted to match Flask login route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const responseData = await response.json();

            if (!response.ok) {
                setLoginError(responseData.error || 'Login failed');
                return;
            }

            const { user, message } = responseData;
            localStorage.setItem('accessToken', user.access_token);
            setLoggedIn(true); // Update parent component state to indicate logged-in status
            console.log(message);
            // Optionally redirect or update UI upon successful login
        } catch (error) {
            console.error('Error logging in:', error);
            setLoginError('Failed to connect to server');
        }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setRegisterError('Passwords do not match');
            return;
        }

        try {
            
           // console.log(`FirstName:${firstName}\n lastName:${lastName}\n Email:${email}\n Birthday:${birthday}\n Password:${password}\n Confirmpassword:${confirmpassword}\n Usertype:${userType}`)
              const response = await fetch('http://127.0.0.1:5000/api/v1/auth/register_user', {  // Adjusted to match Flask register route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, birthday, password, newsletter, userType }), // Include userType in the request body
            });

            const responseData = await response.json();

            if (!response.ok) {
                setRegisterError(responseData.error || 'Registration failed');
                return;
            }

            console.log('Registration successful');
            // Reset form fields after successful registration
            setFirstName('');
            setLastName('');
            setEmail('');
            setBirthday('');
            setPassword('');
            setConfirmPassword('');
            setNewsletter(false);
            setUserType(''); // Reset userType after successful registration
            // Optionally toggle to login form after successful registration
            setShowRegisterForm(false);
        } catch (error) {
            console.error('Error registering:', error);
            setRegisterError('Failed to connect to server');
        }
    };

    const toggleForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setLoginError('');
        setRegisterError('');
    };

    return (
        <div className="login-container">
            {!showRegisterForm ? (
                <div>
                    <h2>Login</h2>
                    <form id="login-form" onSubmit={handleLoginSubmit}>
                        <label htmlFor="login-email">EMAIL</label>
                        <input type="email" id="login-email" name="login-email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="login-password">PASSWORD</label>
                        <input type="password" id="login-password" name="login-password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br />
                        <p className="error-message">{loginError}</p>
                        <a href="#">Forgot Password?</a>
                        <br />
                        <button type="submit" className="btn-submit">LOGIN</button>
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>Create one here</a>.</p>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Create Account</h2>
                    <form id="register-form" onSubmit={handleRegisterSubmit}>
                        <label htmlFor="first-name">FIRST NAME</label>
                        <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <br />
                        <label htmlFor="last-name">LAST NAME</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <br />
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="birthday">BIRTHDAY</label>
                        <input type="text" id="birthday" name="birthday" placeholder="MM/DD/YYYY" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
                        <br />
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br />
                        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <br />
                        <label htmlFor="user-type">USER TYPE</label>
                        <select id="user-type" name="user-type" value={userType} onChange={(e) => setUserType(e.target.value)} required>
                            <option value="">Select user type</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <br />
                        <p className="error-message">{registerError}</p>
                        <label htmlFor="newsletter">
                            <input type="checkbox" id="newsletter" name="newsletter" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
                            KEEP ME UP TO DATE ON NEWS AND EXCLUSIVE OFFERS.
                        </label>
                        <br />
                        <button type="submit" className="btn-submit">CREATE</button>
                    </form>
                    <p>If you already have an account, <a href="#" onClick={toggleForm}>log in here</a>.</p>
                </div>
            )}
            <div className="right-content">
                <h2>FAITHS CONFECTIONERY</h2>
                <p>Welcome to Faith's Confectionery! Please login to continue.</p>
            </div>
        </div>
    );
};

export default Login;
