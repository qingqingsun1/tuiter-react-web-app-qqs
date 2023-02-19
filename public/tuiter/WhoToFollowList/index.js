import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return(`
     <ul class="list-group">
        <li class="list-group-item">
           <div class="fw-bolder">Who to follow</div>
        </li>
        ${
      who.map(item => {
        return(WhoToFollowListItem(item));
      }).join('')
  }
     </ul>
  `);
}
export default WhoToFollowList;