import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Html } from "@react-three/drei";

export default function Spinner() {
  return (
    <Html center>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Html>
  );
}
