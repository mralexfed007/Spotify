import React from "react";
import { AlbumInfo } from "./album-info";
import { AlbumsTracks } from "./albums-tracks";

export const AlbumsSection: React.FunctionComponent = () : JSX.Element => {
  const list: Array<Array<string>> = [
    ['Intro', '1:11'], ['Random', '3:00'], ['Me, Myself & I', 'Bebe Rexha', '4:11'],
    ['One Of Them', 'Big Sean', '3:20'], ['Drifting', ' Chris Brown Tory Lanez', '4:33'], ['Of All Things', 'Too $hort', '3:34'],
    ['Order More', 'Starrah', '3:29'], ['Calm Down', '2:07'], ['Don`t Let Me Go', 'Grace', '3:11'],
    ['You Got Me', '3:28'], ['What If', 'Gizzle', '4:13'], ['Sad Boy', '3:28'],
    ['Some Kind Of Drug', 'Marc E. Bassy', '2:41'], ['Think About You', 'Quin', '2:54'], ['Everything Will Be OK', 'Kehlani', '3:34'],
    ['For This', '2:21'], ['Nothing to Me', 'E-40', '5:30']
  ];

  return (
    <div className="tab-overview__albums">
      <div className="tab-overview__albums__head">
        <div className="title">
          Albums
        </div>
        <div className="view-style">
          <i className="fas fa-list is-active"/>
          <i className="fas fa-th-large"/>
        </div>
      </div>
      <div className="album">
        <AlbumInfo />
        <AlbumsTracks tracks={list}/>
      </div>
      
    </div>
  )
}