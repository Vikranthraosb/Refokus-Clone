import React, { useEffect } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const revealTospan = () => {
      document.querySelectorAll(".reveal").forEach(function (elem) {
        let parent = document.createElement("span");
        let child = document.createElement("span");
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = "";
        elem.appendChild(parent);
      });
    };

    revealTospan();

    const t1 = gsap.timeline({
      onComplete: () => {
        onComplete(); // Call the onComplete callback passed from parent
      },
    });

    document.body.style.overflow = "hidden";
    t1.from(".blr", {
      scale: 0.3,
      opacity: 1,
      y: 1000,
      stagger: 0.15,
      duration: 0.45,
      borderRadius: "50",
      ease: "power3.inOut",
    })
      .to(".blr", {
        opacity: 0.55,
        stagger: 0.1,
        duration: 0.2,
        borderRadius: "55",
        scale: 1.1,
      })
      .from(".topheading h5", {
        x: 150,
        opacity: 0,
        stagger: 0.3,
        duration: 0.7,
        color: "green",
        letterSpacing: "12px",
        ease: "power3.inOut",
      })
      .from(".child span", {
        x: 150,
        opacity: 0,
        stagger: 0.19,
        duration: 1,
        color: "green",
        ease: "power3.inOut",
      })
      .to(".parent .child", {
        y: "-100%",
        duration: 0.9,
        stagger: 0.19,
        ease: "power3.inOut",
      })
      .to(".blr", {
        opacity: 1,
        stagger: 0.12,
        duration: 0.2,
        borderRadius: "55%",
        scale: 1.2,
      })
      .to(".blr", {
        opacity: 0.6,
        y: -1000,
        stagger: 0.18,
        duration: 0.3,
        ease: "power3.inOut",
      })
      .to(".loader", {
        height: 0,
        duration: 0.7,
        ease: "power3.inOut",
      })
      .to(".green", {
        height: "100%",
        width: "100%",
        opacity: 1,
        zIndex: 999,
        top: 0,
        left: 0,
        delay: -0.78,
        duration: 1.2,
        ease: "power3.inOut",
      })
      .to(".green", {
        height: "0%",
        delay: -0.28,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .eventCallback("onComplete", function () {
        document.body.style.overflow = "";
      })
      .from(".nav a", {
        opacity: 0,
        y: -20,
        duration: 0.35,
        delay: 0.15,
      });

    // Rest of your animations...
    // Ensure you're animating the loader out before hiding it

    return () => {
      // Cleanup GSAP animations
      t1.kill();
    };
  }, [onComplete]);

  return (
    <div className="main">
      <div className="loader">
        {/* Loader content */}
        <div>
          <div className="topheading">
            <h5 className="reveal">Personal Portfolio</h5>
            <h5 className="reveal">&copy; 2024</h5>
          </div>
          <h1 className="reveal">
            <span>HELLO </span>
            <span> THERE ! 👋🏻 </span>
          </h1>
          <div className="blr" id="blrone"></div>
          <div className="blr" id="blrtwo"></div>
          <div className="blr" id="blrthree"></div>
          <div className="blr" id="blrfour"></div>
        </div>
      </div>
      <div className="green"></div>
    </div>
  );
};

export default Preloader;
