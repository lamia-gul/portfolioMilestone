import '../globals.css';

export default function Contact () {
    return (
        <div className="contact-page">
            {/* <nav className='navbar'></nav> */}
            <main>
                <h1>Contact Me</h1>
                <p>
                <strong>Karachi, Pakistan</strong>
                <strong>Phone:</strong> +92 3233268515<br/>
                <strong>Email:</strong>lamiagul56@gmail.com
                </p>
                <h2>Let's get in touch, Send a message</h2>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send Message</button>

                </form>
            </main>
        </div>
    );
}
