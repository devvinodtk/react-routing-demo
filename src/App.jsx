import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ContactUs from "./components/ContactUs"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"

import './App.css'
import Users from "./components/Users"
import AuthProvider from "./utils/Auth"

const LazyProfile = React.lazy(()=> import("./components/Profile"))
const LazySettings = React.lazy(()=> import("./components/Settings"))
const LazyPosts = React.lazy(()=> import("./components/Posts"))
const LazyNewPost = React.lazy(()=> import("./components/NewPost"))

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/users/" Component={Users}></Route> {/** Example for dynamic Route */}
          <Route path="/users/:userId" element={<React.Suspense><LazyProfile /></React.Suspense>}> 
            <Route index="/" element={<React.Suspense><LazySettings /></React.Suspense>}></Route> {/* Example for index Route: Which loads the nested route without changing the url*/}
            <Route path="settings" element={<React.Suspense><LazySettings /></React.Suspense>}></Route> {/* Example for Nested Route */}
            <Route path="posts" element={<React.Suspense><LazyPosts /></React.Suspense>}></Route> {/* Example for Nested Route */}
            <Route path='new-post' element={<React.Suspense><LazyNewPost /></React.Suspense>}></Route> {/* Example for Nested Route */}
          </Route>
          <Route path="*" Component={NotFound}></Route> {/* Example for No Match Route */}
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
