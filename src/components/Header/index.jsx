import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import  styles from './Header.module.scss'
import clsx from 'clsx';

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs="auto">
                        <a
                        className={clsx(styles.link, styles.title)}
                        href="https://www.facebook.com/vu.annh.3154/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            My Facebook
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                        exact="true"
                        className={clsx(styles.link, styles.active)}
                        to="/photos"
                        >   
                        Home
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;