import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from 'react-icons/ri';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen">
      <section>
        <h1>Get in touch</h1>
        <h2>Contact Information</h2>

        <address>
          <span>27, Alare Street</span>
          <span>Yaba 100012</span>
          <span>Lagos State</span>
        </address>

        <p>Call Us : 07067981819</p>
        <p>We are open from Monday-Friday 08:00am - 05:00pm</p>

        <div>
          <p>Share on</p>
          <ul>
            <li>
              <a href="#">
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a href="#">
                <RiTwitterXLine />
              </a>
            </li>
            <li>
              <a href="#">
                <RiFacebookFill />
              </a>
            </li>
            <li>
              <a href="#">
                <RiLinkedinFill />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h2>Questions or need assistance?</h2>
          <p>Let us know about it!</p>
        </div>
        <div>Email us below to any question related to our event</div>
        <form>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
          <input type="text" name="mail" id="mail" placeholder="Mail" />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
