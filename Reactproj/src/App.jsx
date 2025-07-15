import InputField from "./components/InputField";
import SocialLogin from "./components/SocialLogin";

const App = () => {
  const handleLogin = (e) => {
    e.preventDefault();


    alert("Login submitted ✅");
    console.log("Login form submitted");
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator"><span>or</span></p>

      <form onSubmit={handleLogin} className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forgot-pass-link">Forgot Password?</a>
        <button type="submit" className="login-button">Log in</button>
      </form>

      <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up Now!❤️ </a>
      </p>
    </div>
  );
};

export default App;
