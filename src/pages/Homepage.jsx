import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import Body from "../components/Body"

const Homepage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="min-h-dvh flex flex-col pt-20">
      <Navbar />

      <main className="flex-1">
        <Body/>
      </main>

      <Footer />
    </div>
  )
}

export default Homepage