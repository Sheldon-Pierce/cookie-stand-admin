 'use client'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { useAuth } from "@/contexts/auth";
import LoginForm from "@/components/loginForm";
import {useState} from "react";
import useResource from "@/hooks/useResource";
import {hours} from "@/app/data";
import Head from "next/head";
export default function Home() {

    const { user, login, logout} = useAuth();
    const [reports, setReports] = useState([]);
    const {resources, loading, createResource, deleteResource} = useResource();

    function handleReports(event) {
        event.preventDefault()
        let reportObj = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.min_cust.value),
            maximum_customers_per_hour: parseInt(event.target.max_cust.value),
            average_cookies_per_sale: parseInt(event.target.avg_cookies.value),
            hourly_sales: SalesDataMath(event.target.max_cust.value, event.target.min_cust.value, event.target.avg_cookies.value)
        }
        createResource(reportObj)
        setReports([...reports, reportObj])
    }

    function SalesDataMath(max, min, avg) {
        let sales_numbers = []
        for (let i = 0; i < hours.length; i++) {
            sales_numbers.push(Math.floor(Math.random() * (max - min) * avg))
        }
        return sales_numbers
    }


  return (
      <>
        {user ? (
            <>
                <Header username={user} loggingout={logout}/>
                <Main reports={reports} handlereports={handleReports}/>
                <Footer reports={reports}/>
            </>

        ) : (
            <LoginForm/>
        )}
      </>

    );
}

