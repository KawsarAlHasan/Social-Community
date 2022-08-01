import React from 'react'
import footerImg from '../assets/images/full-stack-developer-mern-1024x1024.png'

function Footer() {
  return (
    <div className="mx-20">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            className="fill-current w-16"
            src={footerImg}
            alt="no internet"
          />
          <p className="font-bold">
            MERN Stack Squad
            <br />
            <span className="text-gray-400">EndGame, Programming Hero</span>
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
