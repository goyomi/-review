import React, { useEffect, useState } from 'react'
// import ImgItems from './components/ImgeItems'

// export default function App2() {

//   return (
//     <ul style={{ padding: 0 }}>
//       <li style={{ listStyle: 'none' }}><ImgItems /></li>
//     </ul>
//   )
// }

export default function App2() {
  const [imageList, setImageList] = useState([]);
  const [isBottom, setIsBotton] = useState(false);

  console.log(imageList);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.documentElement.scrollTop + window.innerHeight);
      console.log(document.documentElement.offsetHeight);

      setIsBotton(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight);
    })
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages({ id, download_url
  }) {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5")
      if (!response.ok) {
        throw new Error('네트워크에 문제가 있습니다.');
      }
      const data = await response.json();
      setImageList(data);

    } catch (error) {
      console.error('데이터를 가져오는데 문제가 생겼습니다', error);
    }

    return (
      <ul>
        <li>
          <fetchImages />
        </li>
      </ul>
    )
  }
}