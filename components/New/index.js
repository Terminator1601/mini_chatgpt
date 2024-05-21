import { useState } from "react";
import styles from "../../styles/Pages.module.css";
import "tailwindcss/tailwind.css";

export default function New({ navigateToPage }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
            {/* <h2 className="text-md mb-4">Login</h2> */}
            <form className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto">
              <div>
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <br />
                <input type="email" id="loginEmail" className="" required />
              </div>
              <div>
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <br />

                <input
                  type="password"
                  id="loginPassword"
                  className=""
                  required
                />
              </div>
              <button type="submit" className="">
                Login
              </button>
            </form>
          </div>
        ) : (
          <div>
            {/* <h2 className="text-2xl mb-4">Signup</h2> */}
            <form className="space-y-4 w-full max-w-xs sm:max-w-none sm:w-auto">
              <div>
                <label
                  htmlFor="signupEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <br />

                <input type="email" id="signupEmail" className="" required />
              </div>
              <div>
                <label
                  htmlFor="signupPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <br />

                <input
                  type="password"
                  id="signupPassword"
                  className=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="signupConfirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <br />

                <input
                  type="password"
                  id="signupConfirmPassword"
                  className=""
                  required
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
                  type="password"
                  id="signupConfirmPassword"
                  className=""
                  required
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
          className="mt-4 text-sm text-indigo-600 hover:text-indigo-500"
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>

        {/* <p
          onClick={() => navigateToPage("index")}
          className="mt-4 text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
          &lt; Go Back
        </p> */}
      </main>
    </div>
  );
}
