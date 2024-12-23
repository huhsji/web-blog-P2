// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from "firebase/auth";  // เพิ่มการนำเข้า getAuth


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChp25vZnFb3uCr-c2R00kFBiqDieaB8hk",
  authDomain: "react-js-blog-website-yt-157be.firebaseapp.com",
  projectId: "react-js-blog-website-yt-157be",
  storageBucket: "react-js-blog-website-yt-157be.firebasestorage.app",
  messagingSenderId: "261528213790",
  appId: "1:261528213790:web:cf864ad9aa2047470dd10f"
  
  
};
  const app = initializeApp(firebaseConfig);
  
 
  const provider = new GoogleAuthProvider();
  
  const auth = getAuth();
  
  export const authWithGoogle = async () => {
      
      let user = null;
      
      await signInWithPopup(auth , provider)
      .then((result) => {
          user = result.user
        })
        .catch((err) => {
            console.log(err);
        })
        
        return user;
        
    }