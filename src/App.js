import styles from './App.module.css';
// import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';


function App() {
  return (
        <div className={styles.App}>
        {/* <Button variant="primary">Primary</Button> */}
        <NavBar/>
        <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render = {() => <h1>Home page</h1>} />
              <Route exact path="/signin" render = {() => <SignInForm />} />
              <Route exact path="/signup" render = {() => <SignUpForm />} />
              <Route exact path="/posts/create" render = {() => <PostCreateForm />} />
              <Route render = {() => <p>Page not found!</p>} />
            </Switch>
        </Container>
        </div>
  );
}

export default App;