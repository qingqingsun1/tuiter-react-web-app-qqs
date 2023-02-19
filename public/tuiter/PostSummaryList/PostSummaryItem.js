const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row justify-content-center align-items-center">
        <div class="col-9 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
          <div class="text-secondary">${post.topic}</div>
          <span class="fw-bolder">${post.userName}</span>
          <i class="fas fa-check-circle"></i>
          <span class="text-secondary">- ${post.time}</span>
          <div class="fw-bolder">${post.title}</div>
        </div>
        <div class="col-3 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
          <img src="${post.image}" class="float-end rounded-3 img-fluid">
        </div>
      </div>
    </li>
  `)
}
export default PostSummaryItem;