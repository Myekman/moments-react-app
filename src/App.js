import styles from './App.module.css';
// import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.App}>
     {/* <Button variant="primary">Primary</Button> */}
     <NavBar/>
    </div>
  );
}

export default App;