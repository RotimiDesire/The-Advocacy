import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin, Signup, Main, ProtectedRoute } from "./components";
import { AuthContextPovider } from "./context/AuthContext";

function App() {
  return (
    <main>
      <AuthContextPovider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextPovider>
    </main>
  );
}

export default App;
