// create footer component


function Footer({currentPage, handlePageChange}) {
    return (
        <footer className="footer text-center">
            <a href="https://github.com/LeopoldoGurgel" className="m-3 d-block ">GitHub</a>
            <a href="https://www.linkedin.com/in/leopoldo-pimentel-24a404284/" className="m-3 d-block">LinkedIn</a>
            <a href="https://stackoverflow.com/users/22740467/leopoldo-gurgel"  className="m-3 d-block">Stack Overflow</a>
        </footer>
    )
};

export default Footer;