import React from "react";
import Parser from 'html-react-parser';
import {
  BsCheckCircleFill,
  BsHeart,
  BsLink45Deg,
  BsThreeDots
} from "react-icons/bs";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {RiShareBoxFill} from "react-icons/ri";

const PostItem = (
    {post}
) => {
  return(
      <li className="list-group-item pb-3 pt-3 border-bottom border-secondary bg-white">
        <div className="row">
          <div className="col-2 col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <img alt="" className="rounded-circle" height={50} src={`/images/${post.avatarIcon}`}></img>
          </div>
          <div className="col-10 col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
            <span className="fw-bolder me-1" style={{color:'black'}}>{post.userName}</span>
            <span style={{color:'black'}}><BsCheckCircleFill /></span>
            <span className="ms-1">@{post.handle}</span>
            <span> · {post.time}</span>
            <span className="float-end"><BsThreeDots /></span>
            <div style={{color:'black'}}>{Parser(post.comment)}</div>
            <img alt="" className="mt-2 border border-secondary wd-rounded-top-frame img-fluid" src={`/images/${post.image}`}>
            </img>
            <div className="p-3 border border-secondary wd-rounded-bottom-frame" height={100}>
              <div className="fw-bolder" style={{color:'black'}}>{post.title}</div>
              <div>{post.content}</div>
              <div>
                <BsLink45Deg />
                <span>{post.link}</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col col-3">
                <FaRegComment />
                <span className="ms-2">{post.reply}</span>
              </div>
              <div className="col col-3">
                <FaRetweet />
                <span className="ms-2">{post.retweet}</span>
              </div>
              <div className="col col-3">
                <BsHeart />
                <span className="ms-2">{post.like}</span>
              </div>
              <div className="col col-3">
                <RiShareBoxFill />
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};

export default PostItem;