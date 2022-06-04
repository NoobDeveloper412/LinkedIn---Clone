import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://th.bing.com/th/id/R.154f30208fe467bf274a16fbf3fd1f44?rik=Yj%2fnvxzB%2faJyqg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1616361980707-9d1a153fd6de%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI0NTc2MjAy%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=sdiAono5G8eP6bn94bAbzczqNxzNJd2fgXnZDr2vAJ4%3d&risl=&pid=ImgRaw&r=0"
          alt="#"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Muhammad Zuhair</h2>
        <h4>zuhair@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">8734</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2341</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
