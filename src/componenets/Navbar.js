import React, { useState } from 'react'
import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav>
            <div className="nav-wrapper #4db6ac teal lighten-2">
                <Link href="/" className={`brand-logo left ${style.logo}`}>NEXT-ECOM</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                    <li><Link href="/create">Create</Link></li>
                </ul>
            </div>
        </nav>
    )
}
