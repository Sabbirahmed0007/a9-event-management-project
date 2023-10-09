import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <footer className="footer p-10 bg-base-200  text-base-content flex flex-col items-center lg:items-start lg:flex-row justify-evenly gap-9">
        <aside className="text-center">
            <p className="text-2xl font-bold text-center">DreamyDaysPlanner</p>
            <p className="text-center font-semibold">Your dream our plan</p>
            <p>
              Providing reliable event service since 2020
            </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
