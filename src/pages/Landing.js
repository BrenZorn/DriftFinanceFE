import React from 'react'
import Nav from '../components/nav'

function Landing() {
  return (
    <div>
        <Nav />
        <h1>Drift Finance</h1>
        <div>
            <div>
                <img src='#'></img>
            </div>
            <div>
                <p>Take Control of Your Finances Today</p>
                <p>Track spending, set budgets, and achieve your financial goals — all in one powerful app.</p>
            </div>
        </div>
        <div>
            <p>Why Choose Drift Finance?</p>
            <img src='#'></img><p>Track Spending in Real-TimeAutomatically sync your bank accounts and credit cards to categorize and analyze your transactions instantly.</p>
            <img src='#'></img><p>Personalized Budgeting ToolsCreate customized budgets tailored to your needs and lifestyle.</p>
            <img src='#'></img><p>Smart Savings GoalsSet achievable savings goals and monitor your progress with clear, actionable insights.</p>
            <img src='#'></img><p>Insights & AlertsReceive smart notifications, spending alerts, and budgeting tips to help you stay on track.</p>
        </div>
        <div>
            <p>Getting Started is Simple</p>
            <p>Step 1: Create an account with just a few click.</p>
            <p>Step 2: Set up budgets and savings goals in minutes.</p>
            <p>Step 3: Get real-time insights to manage your money effortlessly.</p>
        </div>
        <div>
            <button>Creat Account</button>
            <a href='/accounts/login'>Login</a>
        </div>
    </div>
  )
}

export default Landing