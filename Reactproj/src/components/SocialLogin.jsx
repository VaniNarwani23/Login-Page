const SocialLogin = () => {
  const handleGoogleLogin = () => {
    alert("Logged in with Google ✅");
    console.log("Google login clicked");
  };

  const handleAppleLogin = () => {
    alert("Logged in with Apple ✅");
    console.log("Apple login clicked");
  };

  return (
    <div className="social-login">
      <button type="button" className="social-button" onClick={handleGoogleLogin}>
        <img src="google.svg" alt="Google" className="social-icon" />
        Google
      </button>
      <button type="button" className="social-button" onClick={handleAppleLogin}>
        <img src="apple.svg" alt="Apple" className="social-icon" />
        Apple
      </button>
    </div>
  );
};

export default SocialLogin;
