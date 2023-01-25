import React,{useState} from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = () => {

    const handleSubmit = () => {
      window.open(
        `mailto:vivekmaddeshiyaiet@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
          email
        )}): ${encodeURIComponent(message)}`
      );
    };
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" value={name} name="name" id="name" onChange={(e)=>setName(e.target.value)} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email" value={email} name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              name="subject"
              value={subject}
              type="text"
              className="materialize-textarea"
              id="subject"
              onChange={(e)=>setSubject(e.target.value)}
              required
            ></input>
            <label htmlFor="subject">subject</label>
          </div>
          <div className="input-field">
            <textarea
              name="message"
              value={message}
              className="materialize-textarea"
              id="message"
              
              onChange={(e)=>setMessage(e.target.value)}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button
            type="submit"
            className="btn-large white black-text waves-effect waves-light"
          >
            <i className="material-icons left">send</i>Send
          </button>
        </form>
      </>
    );
  };

  return (
    <div id="contact" className="section">
      <div className="row center">
        <div className="col s12">
          <div className="heading-primary">Contact Me</div>
          <div className="subtitle-container">
            <p className="subtitle">Would love to talk with you.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div id="contact-card" className="card black white-text">
            <div className="card-content">
              <div className="row">
                <div id="contact-aside" className="col s12 l5">
                  <div>
                    Have something to say?
                    <br />
                    <div className="small">
                      Drops some words by filling the form
                    </div>
                  </div>
                </div>
                <div
                  id="contact-form-container"
                  className="col s12 l6 offset-l1"
                >
                  {form()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
