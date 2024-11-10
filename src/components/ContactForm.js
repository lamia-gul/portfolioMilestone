export default function ContactForm() {
    return(
        <form>
            <label>Name:</label>
            <input type="text" required/>

            <label>Email:</label>
            <input type="text" required/>

            <label>Message:</label>
            <textarea type="text" required></textarea>

            <button type="submit">Send Message</button>

        </form>

    );
}