import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../config/firebase";

interface AuthProps {
    onSignIn: () => void;
}

export const Auth: React.FC<AuthProps>  = ({ onSignIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signInWithGoogle = async () => {
        try {
          const res = await signInWithPopup(auth, provider);
          onSignIn(); // Call the onSignIn function to update the authentication state
        } catch (error) {
          console.error("Error signing in:", error);
        }
    };

     const handleEmailSignIn = async () => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            onSignIn(); // Call the onSignIn function to update the authentication state
            onSignIn(); 
            // Redirect or update UI after successful sign-in
        } catch (error) {
            console.error("Error Signing in: ", error);
        }
    };

    return (
        <>
            <div className="auth_container">
                <h2>Sign in with your email</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleEmailSignIn}>Sign In</button>


                <p>Sign in with your Google account</p>
                <button onClick={signInWithGoogle}>Google</button>
            </div>
        </> 
    )  
}