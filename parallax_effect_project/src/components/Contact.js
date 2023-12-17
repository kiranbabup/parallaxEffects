function Contact() {
  const socials = [
    {
      name: "github",
      link: "https://github.com/kiranbabup",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/panigrahi-kiran-babu-835378194/",
    },
    {
      name: "email",
      link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRdsCqJHgVdCxPSWWqCbSjQLCZzqcVdLtcRCVlZHZBqpWzMLmCjKQLvlwZcfMjfCvqZjNq",
    },
  ];

  return (
    <div className="text-start px-5 mt-5 vistingCard2">
      <h3 className="text-bold">
        <span className="title-text">contact me &#x1f4de;</span>
      </h3>
      <p>
        {socials.map((soc, index) => {
          return (
            <span key={index}>
              <a className="contact-link" href={soc.link} target="_blank" rel="noreferrer">
                {soc.name}
              </a>
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Contact;
