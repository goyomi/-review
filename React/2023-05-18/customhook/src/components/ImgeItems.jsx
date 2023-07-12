import React from "react";

export default function ImgItems() {
  const datas = [
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: "https://picsum.photos/id/10/2500/1667",
    },
    {
      id: "11",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/Cm7oKel-X2Q",
      download_url: "https://picsum.photos/id/11/2500/1667",
    },
    {
      id: "12",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/I_9ILwtsl_k",
      download_url: "https://picsum.photos/id/12/2500/1667",
    },
    {
      id: "13",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/3MtiSMdnoCo",
      download_url: "https://picsum.photos/id/13/2500/1667",
    },
    {
      id: "14",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
      download_url: "https://picsum.photos/id/14/2500/1667",
    },
  ];

  return (
    <>
      {datas.map((item) => {
        return (
          <img
            key={item.id}
            style={{ width: 300, verticalAlign: "top", margin: 10 }}
            src={item.download_url}
            alt=""
          />
        );
      })}
    </>
  );
}
