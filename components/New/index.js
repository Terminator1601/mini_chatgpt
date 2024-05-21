// import { useState } from "react";
// import { app, db } from "../../database/firebaseConfig";
// import styles from "../../styles/Pages.module.css";
// import "tailwindcss/tailwind.css";
// import { getAnalytics } from "firebase/analytics";
// import { collection, addDoc } from "firebase/firestore";

// // Initialize analytics only if in browser environment
// if (typeof window !== "undefined") {
//   getAnalytics(app);
// }

// export default function New({ navigateToPage }) {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     apiKey: "",
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const docRef = await addDoc(collection(db, "userDetail"), {
//         email: formData.email,
//         password: formData.password,
//         apiKey: formData.apiKey,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Implement login logic
//     console.log("Login with: ", formData);
//   };

//   return (
//     <div
//       className={
//         styles.container + " w-full h-full flex justify-center items-center"
//       }
//     >
//       <main
//         className={styles.main + " w-full h-full flex flex-col items-center"}
//       >
//         <h1 className={styles.title}>MiniGpt 1.0</h1>

//         {isLogin ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
//             <form
//               onSubmit={handleLogin}
//               className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <br />
//                 <input
//                   type="email"
//                   id="email"
//                   className=""
//                   required
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <br />
//                 <input
//                   type="password"
//                   id="password"
//                   className="placeholder:italic text-sm font-medium placeholder:text-slate-400 text-black"
//                   required
//                   onChange={handleChange}
//                 />
//               </div>
//               <button type="submit" className="">
//                 Login
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div>
//             <form
//               onSubmit={handleSignup}
//               className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <br />
//                 <input
//                   type="email"
//                   id="email"
//                   className=""
//                   required
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <br />
//                 <input
//                   type="password"
//                   id="password"
//                   className=""
//                   required
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="apiKey"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Chat-Gpt Api Key
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="apiKey"
//                   className=""
//                   required
//                   onChange={handleChange}
//                 />
//                 <a href="https://openai.com/index/openai-api/" target="_blank">
//                   ?
//                 </a>
//               </div>
//               <button type="submit" className="">
//                 Signup
//               </button>
//             </form>
//           </div>
//         )}

//         <br />
//         <br />

//         <button
//           onClick={toggleForm}
//           className="mt-4 text-lg text-cyan-400 hover:text-cyan-500"
//         >
//           {isLogin ? "Create an account" : "Already have an account? Login"}
//         </button>
//       </main>
//     </div>
//   );
// }




import { useState } from "react";
import { app, db } from "../../database/firebaseConfig";
import styles from "../../styles/Pages.module.css";
import "tailwindcss/tailwind.css";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "firebase/firestore";

// Initialize analytics only if in browser environment
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export default function New({ navigateToPage }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    apiKey: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "userDetail"), {
        email: formData.email,
        password: formData.password,
        apiKey: formData.apiKey,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
    console.log("Login with: ", formData);
  };

  return (
    <div
      className={
        styles.container + " w-full h-full flex justify-center items-center"
      }
    >
      <main
        className={styles.main + " w-full h-full flex flex-col items-center"}
      >
        <h1 className={styles.title}>MiniGpt 1.0</h1>

        {isLogin ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
            <form
              onSubmit={handleLogin}
              className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  className=""
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  className="placeholder:italic text-sm font-medium placeholder:text-slate-400 text-black"
                  required
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="">
                Login
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form
              onSubmit={handleSignup}
              className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  className=""
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  className="placeholder:italic text-sm font-medium placeholder:text-slate-400 text-black"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="apiKey"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chat-Gpt Api Key
                </label>
                <br />
                <input
                  type="apiKey"
                  id="apiKey"
                  className="placeholder:italic text-sm font-medium placeholder:text-slate-400 text-black"
                  required
                  onChange={handleChange}
                />
                <a href="https://openai.com/index/openai-api/" target="_blank">
                  ?
                </a>
              </div>
              <button type="submit" className="">
                Signup
              </button>
            </form>
          </div>
        )}

        <br />
        <br />

        <button
          onClick={toggleForm}
          className="mt-4 text-lg text-cyan-400 hover:text-cyan-500"
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </main>
    </div>
  );
}
