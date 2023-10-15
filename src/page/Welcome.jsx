import { useState } from 'react';
import ParticleBackground from "../components/ParticleBackground"
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import '../assets/style/welcome.css';

export default function Welcome() {
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [name, setNames] = useState('');

    const handleInputChange = (event) => {
        const newName = event.target.value;
        setNames(newName);
        localStorage.setItem('name', newName);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="text-center">
                <ParticleBackground />
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span class="name">Hello There, My Name is Ryan Ernanda</span>')
                            .pauseFor(800)
                            .changeDeleteSpeed(30)
                            .deleteChars(23)
                            .typeString('<span class="name"> Call Me Ryan</span>')
                            .pauseFor(400)
                            .typeString('<h1/>')
                            .typeString('<span class="message">Before we go. Can you insert your name?</span>')
                            .callFunction(() => {
                                setIsTypingDone(true);
                            })
                            .start();
                    }}
                    options={{
                        cursor: '_',
                        cursorClassName: 'cursorEffect',
                        autoStart: true,
                        delay:40
                    }}
                />
                {isTypingDone && (
                    <>
                        <input
                            type="text"
                            value={name}
                            onChange={handleInputChange}
                            placeholder="Insert your name here !"
                            className='input-group mt-3 mx-0'
                        />
                        
                        <Link to="/ryanporto/panel" className={`btn mt-3 btn-entrance ${name ? 'btn-outline-success' : 'btn-outline-primary disabled'}`}>Let&apos;s go</Link>                         
                    </>
                )}
            </div>
        </div>
    );
}
