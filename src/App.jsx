import React, { useState, useCallback } from 'react';
import './App.scss';
import './styles/general.scss';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';

const App = () => {
  const [userId, setUserId] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState(0);

  const handlePosts = useCallback(
    (event) => {
      const { value } = event.target;

      setUserId(value);
    }, [],
  );

  const handleSelectedPost = useCallback((id) => {
    setSelectedPostId(id);
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <label>
          Select a user: &nbsp;

          <select className="App__user-selector" onChange={handlePosts}>
            <option>All users</option>
            <option value="1">Leanne Graham</option>
            <option value="2">Ervin Howell</option>
            <option value="3">Clementine Bauch</option>
            <option value="4">Patricia Lebsack</option>
            <option value="5">Chelsey Dietrich</option>
            <option value="6">Mrs. Dennis Schulist</option>
            <option value="7">Kurtis Weissnat</option>
            <option value="8">Nicholas Runolfsdottir V</option>
            <option value="9">Glenna Reichert</option>
            <option value="10">Leanne Graham</option>
          </select>
        </label>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <PostsList
            userId={userId}
            handleSelectedPost={handleSelectedPost}
            selectedPostId={selectedPostId}
          />
        </div>

        <div className="App__content">
          {selectedPostId > 0
            && (
            <PostDetails
              selectedPostId={selectedPostId}
            />
            )
          }
        </div>
      </main>
    </div>
  );
};

export default App;