import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
    return (
        <div id="wd-lab">
            <h1>Labs</h1>
            <h1>Michael Han</h1>
            <h2>SEC 01</h2>
            <h2>https://github.com/Michael-Hannn/kanbas-react-web-app.git</h2>

            <TOC />
            <Routes>
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}