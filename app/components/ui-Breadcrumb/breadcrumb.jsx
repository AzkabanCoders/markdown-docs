"use strict";

import React, {Component} from "react";
import { Router, Route, Link} from 'react-router';
import css from "./styles/_breadcrumb";

class Breadcrumb extends Component {
  render() {
    const depth = this.props.routes.length
    return (
      <ul id="breadcrumb" className='breadcrumb noselect'>
        {this.props.routes.map((item, index) =>
              <li key={index} id={`breadcrumb-item-${item.component.name}`}>
                <Link
                  onlyActiveOnIndex={true}
                  activeClassName="breadcrumb-active"
                  to={item.path || ''}>
                  {item.component.title}
                </Link>
                {(index + 1) < depth && '\u2192'}
              </li>
            )}
      </ul>
    );
  }
}

export default Breadcrumb;
