import { SignedOut, SignIn, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/app");
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignedOut>
        <SignIn fallbackRedirectUrl="/app" />
      </SignedOut>
    </div>
  );
}

export default SignInPage;
