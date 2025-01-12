import React from 'react'
import Nav from '../components/nav'
import image1 from '../images/rb_3896.png'
import image3 from '../images/PiggyBank.png'
import image4 from '../images/3d-render-hand-with-coins-bills-isolated-set.png'

function Landing() {
  return (
    <div>
        <Nav />
        <div className='MainContainer'>
            <h1>Drift Finance</h1>
            <div className='MainCard'>
                <div className='Content'>
                    <p className='Header'>Take Control of Your Finances Today</p>
                    <div className='ImageContainer'>
                        <img src={image1}></img>
                    </div>
                    <p>Track spending, set budgets, and achieve your financial goals — all in one powerful app.</p>
                </div>
                
            </div>
            <div className='SecoundaryCard'>
                <div className='Content'>
                    <p className='Header'>Why Choose Drift Finance?</p>
                    <p>Track Spending in Real-Time.</p>
                    <p>Personalized Budgeting Tools to create customized budgets that are tailored to your needs and lifestyle.</p>
                    <p>Smart Savings Goals to help achievable savings goals and monitor your progress with clear, actionable insights.</p>
                    <p>Insights smart notifications, spending alerts, and budgeting tips to help you stay on track.</p>
                </div>
                <div className='ImageContainer'>
                    <img src={image4}></img>
                </div>
            </div>
            <div className='GettingStartedCard'>
                <div className='ImageContainer'>
                    <img src={image3}></img>
                </div>
                <div className='Content'>
                    <p className='Header'>Getting Started is Simple</p>
                    <p>Create an account with just a few click.</p>
                    <p>Set up budgets and savings goals in minutes.</p>
                    <p>Get real-time insights to manage your budgets effortlessly.</p>
                </div>
            </div>
            <div className='AccountCard'>
                <div className='Container'>
                    <a href='/accounts?section=create' className='Create'>Creat Account</a>
                    <a href='/accounts?section=login' className='Login'>Login</a> 
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Landing