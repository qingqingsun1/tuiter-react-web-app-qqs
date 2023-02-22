const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
      <div class="row align-items-center">
      
        <div class="col col-2">
          <img src="${who.avatarIcon}" class="rounded-circle" height="50px">
        </div>
        
        <div class="col-6 col-xxl-7 col-xl-7 col-lg-6">
          <span class="fw-bolder">${who.userName}</span>
          <i class="fas fa-check-circle"></i>
          <div>@${who.handle}</div>
        </div>
        
        <div class="col-4 col-xxl-3 col-xl-3 col-lg-4">
          <button type="button" class="btn btn-primary rounded-pill align-items-center">Follow</button>
        </div>
        
      </div>
    </li>
  `)
}
export default WhoToFollowListItem;