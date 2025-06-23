import React from 'react'
import {openingHours, socials} from "../../costants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", {type: "words"});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center"
            },
            ease: "power1.inOut"
        });

        timeline
            .from(titleSplit.words, {opacity: 0, yPercent: 100, stagger: 0.02})
            .from("#contact h3, #contact p", {opacity: 0, yPercent: 100, stagger: 0.02})
            .to("#f-right-leaf", {y: "-50",duration: 1, ease: "power1.inOut"})
            .to("#f-left-leaf", {y: "-50",duration: 1, ease: "power1.inOut"}, "<");

    });



    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf"/>
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf"/>

            <div className="content">
                <h2>Where to find us</h2>


                <div>
                    <h3>Vist Our Bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(123) 456-7890</p>
                    <p>q1rZo@example.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.time}>{time.day} :  {time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>

                        ))}

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Contact
