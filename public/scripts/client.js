/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  // Test / driver code (temporary). Eventually will get this from the server.
    
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createErrorElement = function (error) {
    let $error = `
    <div class="error-content">
    ${error}
    </div>
    `;
    $('#error-container').empty();
    $('#error-container').prepend($error);
    $('.error-content').hide();
    $('.error-content').slideDown();
  }

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
    <p name="text">${escape(tweet.content.text)}</p>
    </div>
    <footer>
      <div class="tweet-time" name="created_at">
        ${timeago.format(tweet.created_at)}
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
      $('#tweets-container').prepend($tweet);
    }
  }

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (data) {
        renderTweets(data);
      });
  }

  loadTweets();

  $("form").on("submit", function (event) {
    event.preventDefault();
    const lengthOfText = $(this)[0].text.value.length;
    $('.error-content').slideUp();
    if (lengthOfText > 140) {
      createErrorElement("Exceeds 140 charater limit");
      return;
    }
    if (lengthOfText === 0) {
      createErrorElement("Empty submission");
      return;
    }
    $('#tweets-container').empty();
    $.ajax({
      url: '/tweets', method: 'POST', data: $("form").serialize()
    })
      .then(function() {
        loadTweets();
      });
  });

});

//<script>('uh oh!');</script>