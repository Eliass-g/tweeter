/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1697023496838
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1697109896838
    }
  ];

  const createTweetElement = function (tweet) {
    let $tweet = `
  <article class="tweet">
    <header>
      <div class="tweet-user" name="user">
        <div class="image" name="avatars">
          <img src="${tweet.user.avatars}">
        </div>
        <div class="username" style="padding-left: 10px" name="name">
          ${tweet.user.name}
        </div>
      </div>
      <div class="tweet-at" name="handle">
        ${tweet.user.handle}
      </div>
    </header>
    <div name="content">
    <p name="text">${tweet.content.text}</p>
    </div>
    <footer>
      <div class="tweet-time" name="created_at">
        ${tweet.created_at}
      </div>
      <div class="tweet-icons">
        <i class="fa-solid fa-flag fa-1xs"></i>
        <i class="fa-solid fa-retweet fa-1xs"></i>
        <i class="fa-solid fa-heart fa-1xs"></i>
      </div>
    </footer>
  </article>
`;
    return $tweet;
  }

  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  }

  renderTweets(data);
});