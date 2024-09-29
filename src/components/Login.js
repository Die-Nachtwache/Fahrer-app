import './Login.css';

const Login = () => {
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Login-Logik (z.B. API-Anfrage)
        console.log('Account Name:', accountName);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default Login;
