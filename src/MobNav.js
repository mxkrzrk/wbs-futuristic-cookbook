import Navbar from 'react-bootstrap/Navbar';

const MobNav = () => {
    return(
        <div className="container-sm">
            <Navbar id="mob-nav" fixed="bottom">
                <ul className="navbar-nav">
                    <li className="nav-item col-6">
                        <a className="nav-link" href="#">Articles</a>
                    </li>
                    <li className="nav-item col-6">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default MobNav;

{/* <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Navbar>
</Container> */}