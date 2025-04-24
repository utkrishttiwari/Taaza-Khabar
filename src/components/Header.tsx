const Header = () => {

  const date = new Date().toLocaleDateString("en-US", {
    // weekday : "long",
    month : "long",
    day : "numeric",
    year : "numeric",
  });
  return (
    <>
        <header className='mainHeader'>
            <h1>Taaza Khabar</h1>
            <div className="subhead">Chandigarh, IN | {date}</div>
        </header>
    </>
  )
}

export default Header;