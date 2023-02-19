const PostItem = (post, index) => {
  return (`
    <li class="list-group-item pb-3 pt-3 border-bottom border-secondary">
      <div class="row">
        <div class="col-2 col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <img src="${post.avatarIcon}" class="rounded-circle" height="50px">
        </div>
        <div class="col-10 col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
          <span class="fw-bolder" style="color: white">${post.userName}</span>
          <i class="fas fa-check-circle" style="color: white"></i>
          <span>@${post.handle}</span>
          <span> · ${post.time}</span>
          <i class="fas fa-ellipsis-h float-end" style="color: gray"></i>
          <div style="color: white">${post.comment}</div>
          <img src="${post.image}" class="mt-2 border border-secondary wd-rounded-top-frame img-fluid" id="image-${index}">
          
          <div class="p-3 border border-secondary wd-rounded-bottom-frame" height="100px" id="content-box-${index}">
            <div style="color: white" id="post-title-${index}">${post.title}</div>
            <div id="post-content-${index}">${post.content}</div>
            <i class="fas fa-link"></i>
            <span id="post-link-${index}"> ${post.link}</span>
          </div>
          
          <script>
            if($.trim($("#post-title-${index}").html())=='' 
              && $.trim($("#post-content-${index}").html())=='' 
              && $.trim($("#post-link-${index}").html())=='') {
              $('#content-box-${index}').addClass("d-none");
              $('#image-${index}').addClass("wd-rounded-bottom-frame");
            }
          </script>
          
          <div class="row mt-2">
            <div class="col col-3">
              <i class="far fa-comment"></i>
              <span class="ms-2">${post.reply}</span>
            </div>
            <div class="col col-3">
              <i class="fas fa-retweet"></i>
              <span class="ms-2">${post.retweet}</span>
            </div>
            <div class="col col-3">
              <i class="far fa-heart"></i>
              <span class="ms-2">${post.like}</span>
            </div>
            <div class="col col-3">
              <i class="fas fa-external-link-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  `)
}
export default PostItem;