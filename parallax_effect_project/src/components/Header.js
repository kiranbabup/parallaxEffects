function Header({ offset }) {
  return (
    <div className="text-start px-5 mt-5 vistingCard">
      <h4>my name is</h4>
      <h1 className="text-bold">
        <span className="highlight">Panigrahi Kiran Babu</span>
      </h1>
      <p>Full Stack Developer</p>
      <p className="mt-5">
        {offset ? (
          <></>
        ) : (
          <>
            <div>
              <p className="highlight px-2" >
                Experience: 1 year
              </p>
            </div>
            <div>
              <a className="highlight px-2" rel="noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRdsCqJHgVdCxPSWWqCbSjQLCZzqcVdLtcRCVlZHZBqpWzMLmCjKQLvlwZcfMjfCvqZjNq">
                E-Mail: kiran12146@gmail.com
              </a>
            </div>
            <div>
              <p className="highlight px-2">
                Contact: 7207486526
              </p>
            </div>
          </>
        )}
      </p>
    </div>
  );
}

export default Header;
