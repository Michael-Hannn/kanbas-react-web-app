import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
export default function Account() {
  return (
    <div id="wd-account-screen" className="wd-account-border" style={{width: '350px', height: '900px' }}>
       <div className="wd-account-border mb-2" style={{width: '330px'}}>
      <h2><strong>Account</strong></h2>  
      </div>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/"
                     element={<Navigate to="/Kanbas/Account/Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
