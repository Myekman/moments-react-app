import React from 'react';
import NoResults from '../assets/no-found2.jpg';
import styles from "../../src/styles/NotFound.module.css";
import Asset from './Assets';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className={styles.NotFound}>
        <Link to="/">
                <Asset src={NoResults} message={`Sorry, the page you're looking for doesn't exist. Click the cactus to go back home!`} />
        </Link>
      </div>
    );
  };

export default NotFound