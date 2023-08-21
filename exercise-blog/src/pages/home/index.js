const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const render = async () => {
  const data = await fetchData('./data.json');
  let sectionPost = document.getElementsByClassName('section-post')[0];
  sectionPost.innerHTML = `<ul class="post-list">
    ${data
      .map((post) => {
        return `<li class="post-item">
        <div class="post row">
          <div class="col col-8">
            <a href="" class="post-link">
              <div class="post-header">
                <div class="post-info">
                  <div class="post-author-wrapper">
                    <img
                      class="post-author-image"
                      src="${post.authorImageUrl}"
                      alt="Author name" />
                    <span class="post-author-name">
                      ${post.authorName}
                    </span>
                  </div>
                  <span class="post-date">${post.postDate}</span>
                </div>
                <i class="icon icon-dots"></i>
              </div>
              <h3 class="post-title">
                ${post.title}
              </h3>
              <p class="post-desc">
                ${post.description}
              </p>
              <div class="post-left-footer">
                <ul class="post-reaction">
                  <li class="reaction-item">
                    <i class="icon icon-like"></i>
                    ${post.like}
                  </li>
                  <li class="reaction-item">
                    <i class="icon icon-comment"></i>
                    ${post.comment}
                  </li>
                </ul>
                <ul class="tag-list">
                  <li class="tag-item">
                    <span class="tag tag-gray">React</span>
                  </li>
                  <li class="tag-item">
                    <span class="tag tag-gray">React</span>
                  </li>
                  <li class="tag-item">
                    <span class="tag tag-gray">React</span>
                  </li>
                </ul>
              </div>
          </a>
          </div>
          <div class="col col-4">
            <div class="post-image-wrapper">
              <img
                src="${post.postImage}"
                alt="post-image"
                class="post-image"/>
            </div>
        </div>
      </li>`;
      })
      .join('')}
  </ul>`;
};

render();
