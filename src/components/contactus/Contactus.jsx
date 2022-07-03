import "./contactus.scss";

import StoreIcon from "@mui/icons-material/Store";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7pl3nrh",
        "template_jmds86t",
        form.current,
        "VM9x5CufUB2MLxG1C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contactus">
      <div className="bg-pattern02">
        <div className="contactus">
          <div className="contactus-header">
            <h5>Contact Us</h5>
          </div>

          <div className="contactus-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="DS Dining" required />
              <input
                type="email"
                name="email"
                placeholder="dsdining@gmail.com"
                required
              />
              <input type="text" name="phone" placeholder="080 - 1234 - 4567" />
              <textarea
                name="message"
                placeholder="メッセージ"
                rows="5"
                required
              ></textarea>
              <button type="submit"> Send Message </button>
            </form>
            <div className="google-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.940316123505!2d139.9157828!3d35.899477399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601899abb166b11d%3A0x7756a2448be40a12!2z5Y2w5bqm44Os44K544OI44Op44OzRFMgRGluaW5n!5e0!3m2!1sen!2sjp!4v1656776803600!5m2!1sen!2sjp"></iframe>
            </div>
          </div>
        </div>
        <div className="contact-element">
          <div className="element">
            <a
              href="https://www.google.com/maps/place/%E5%8D%B0%E5%BA%A6%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3DS+Dining/@35.8994774,139.9157828,17z/data=!3m1!4b1!4m5!3m4!1s0x601899abb166b11d:0x7756a2448be40a12!8m2!3d35.8994774!4d139.9157828?hl=en-JP"
              target="_blank"
              rel="noreferrer"
              className="icon-container"
            >
              <StoreIcon className="icon" />
            </a>
            <h1>住所</h1>
            <a
              href="https://www.google.com/maps/place/%E5%8D%B0%E5%BA%A6%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3DS+Dining/@35.8994774,139.9157828,17z/data=!3m1!4b1!4m5!3m4!1s0x601899abb166b11d:0x7756a2448be40a12!8m2!3d35.8994774!4d139.9157828?hl=en-JP"
              target="_blank"
              rel="noreferrer"
            >
              〒270-0111 千葉県流山市江戸川台東３丁目158-19
            </a>
          </div>
          <div className="element">
            <a
              href="tel:+81-04-7128-9966"
              target="_blank"
              rel="noreferrer"
              className="icon-container"
            >
              <PhoneIcon className="icon" />
            </a>
            <h1>電話</h1>
            <a href="tel:+81-04-7128-9966" target="_blank" rel="noreferrer">
              +81-04-7128-9966
            </a>
          </div>
          <div className="element">
            <a
              href="mailto:dsdining2022@gmail.com"
              className="icon-container"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon className="icon" />
            </a>
            <h1>メイル</h1>
            <a
              href="mailto:dsdining2022@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              dsdining2022@gmail.com
            </a>
          </div>
          <div className="element">
            <a
              href="https://www.facebook.com/DsDinning"
              className="icon-container"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlinedIcon className="icon" />
            </a>
            <h1>フェイスブック</h1>
            <a
              href="https://www.facebook.com/DsDinning"
              target="_blank"
              rel="noreferrer"
            >
              DsDinning
            </a>
          </div>
        </div>

        <div class="footer">
          <p>Copyright © DS Dining 2022. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
