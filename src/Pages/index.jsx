import { Navigate } from "react-router-dom"

export const Landing = () => <h2>Landing Page(Public) </h2>

export const Home = () => {

    return <h1>Home Page (Private) </h1>

}

export const Dashboard = () => <h2>Dashboard page (Private) </h2>

export const Analytics = () => <h2>Analytics page (Private,permission:'Analize') </h2>

export const Admin = () => <h2>Admin page (Private,permission:'admin') </h2>

