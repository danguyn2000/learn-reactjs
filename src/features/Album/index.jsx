import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Trẻ Gây Nghiện",
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/0/5/c/f05c599832086a0a60f1105db362619f.jpg",
    },

    {
      id: 2,
      name: "Chill Cùng Rap Việt",
      thumbnail:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/2/f/5/82f55da7d8e87167d6edcf66013455aa.jpg",
    },
  ];
  return (
    <div>
      <h2
        style={{
          color: "red",
        }}
      >
        Có thể bạn sẽ thích đấy
      </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
