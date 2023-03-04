import '../styles/Contact.scss';
const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label htmlFor="name">Name:-</label>
              <input type="text" placeholder="Enter your name..." id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:-</label>
              <input type="email" placeholder="Enter your email ID..." id="email" />
            </div>
            <div>
              <label htmlFor="message">Message:-</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Tell us about your query"></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
