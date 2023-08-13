import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import News from './News.tsx';
import { IPost, IRootState } from '../redux/types/types.ts';
import { requestGetAllPosts } from '../redux/actions/actions.ts';
import Header from './Header.tsx';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAllPosts());
  }, [dispatch]);

  const postsArray: IPost[] = useSelector((state: IRootState) => state.news.data);

  const newsData: React.JSX.Element[] = postsArray?.map(
    (post) => <News key={post.id} post={post} />,
  );
  // console.log(newsData);
  return (
    <div>
      <h1> MAIN PAGE </h1>
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center' }}>
        {newsData}
      </div>
    </div>
  );
}

export default Main;
