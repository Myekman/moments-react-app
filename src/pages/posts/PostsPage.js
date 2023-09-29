// HOMEPAGE
import React, { useEffect, useState  } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import NoResults from '../../assets/no-results.png';
import Asset from "../../components/Assets";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../../profiles/PopularProfiles";

function PostsPage({message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const currentUser = useCurrentUser();

    const [query, setQuery] = useState("");
    // const nodeRef = useRef(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
              setPosts(data);
              setHasLoaded(true);
            } catch (err) {
              console.log(err);
            }
        };

    //     setHasLoaded(false);
    //     fetchPosts();
    //   }, [filter, query, pathname]);

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
            <PopularProfiles mobile/>
            {/* ----------------------------------------------------------------------------------searchbar */}
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value = {query}
                    onChange ={(event) => setQuery(event.target.value)}
                    type="text"
                    className="me-sm-2"
                    placeholder="search post"
                />
            </Form>

            {hasLoaded ? (
                <>
                {/* // map over posts and render each one */}
                {posts.results.length ? (
                <InfiniteScroll
                    children={
                         posts.results.map((post) => (
                            <Post key={post.id} {...post} setPosts={setPosts} />
                        ))
                    }
                    dataLength={posts.results.length}
                    hasMore={!!posts.next}
                    loader={<Asset spinner />}
                    next={() => fetchMoreData(posts, setPosts)}
                    // nodeRef={nodeRef}
                
                />
                ) : (
                    // show no results
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults} message={message} />
                    </Container>
                )}
                </>
            ) : (
                // show spinner if not loaded yet
                <Container className={appStyles.Content}>
                <Asset spinner />
                </Container>
            )}
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <PopularProfiles />
        </Col>
        </Row>
    );
}

export default PostsPage;