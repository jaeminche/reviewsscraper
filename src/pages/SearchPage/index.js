import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchPost, postSelector } from "../../slices/post";
import { fetchComments, commentsSelector } from "../../slices/comments";
import { companiesSelector, reviewsSelector } from "../../slices/jobplanet";

import { Post } from "../../components/Post/Post";
import { Comment } from "../../components/Comment/Comment";

import RequestContainer from "../../components/common/Request";
import { TableContainer } from "../../components";

const SearchPage = ({ match }) => {
  const dispatch = useDispatch();
  const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
    postSelector
  );
  const {
    comments,
    loading: commentsLoading,
    hasErrors: commentsHasErrors
  } = useSelector(commentsSelector);
  const { form } = useSelector(companiesSelector);
  const companyname = form.search;
  const rating = form.rating;

  useEffect(() => {
    console.log(companyname, rating);
  }, [companyname, rating]);

  useEffect(() => {
    const { id } = match.params;
    // dispatch(fetchCompanies("비비리퍼블리카"));
    // dispatch(fetchComments(id));
    // dispatch(fetchPost(id));
  }, [dispatch, match]);

  // const renderPost = () => {
  //   if (postLoading) return <p>Loading post...</p>;
  //   if (postHasErrors) return <p>Unable to display post.</p>;

  //   return <Post post={post} />;
  // };

  // const renderComments = () => {
  //   if (commentsLoading) return <p>Loading comments...</p>;
  //   if (commentsHasErrors) return <p>Unable to display comments.</p>;

  //   return comments.map(comment => (
  //     <Comment key={comment.id} comment={comment} />
  //   ));
  // };

  return (
    <section>
      {/* {renderPost()} */}
      {/* <h2>Comments</h2> */}
      {/* {renderComments()} */}
      <RequestContainer />
      <TableContainer
        columns={React.useMemo(
          () => [
            {
              Header: "Company Name",
              accessor: "companyname" // accessor is the "key" in the data
            },
            {
              Header: "Rating",
              accessor: "rating"
            },
            {
              Header: "Source",
              accessor: "source"
            }
          ],
          []
        )}
        data={React.useMemo(
          () => [
            {
              companyname: form.search,
              rating: form.rating,
              source: "Jobplanet"
            }
          ],
          [rating, companyname]
        )}
      />
    </section>
  );
};

export default withRouter(SearchPage);
