import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="bg-[#1E1E2E] min-h-screen">
      <div className="relative z-50">
        <Header />
        <Main />
      </div>
    </div>
  );
}
