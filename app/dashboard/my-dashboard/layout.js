

"use client";
import Nav from "../../components/my-dashboard/Nav"
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      
    </>
  )
}