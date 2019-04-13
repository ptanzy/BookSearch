import React, {Component} from 'react';
import { FaGoogle } from 'react-icons/fa';

// Import Materialize
import M from "materialize-css";


class NavBar extends Component {

    componentDidMount() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems);
    }
    
    render() {
        return(
          <React.Fragment>
            <nav className="nav-extended">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo"><FaGoogle /> Books</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/search">Search</a></li>
                  <li><a href="/saved">Saved</a></li>
                </ul>
              </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </React.Fragment>
        )
    }
}

export default NavBar;