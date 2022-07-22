import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImage } from './styled';
// import 'bootstrap/dist/css/bootstrap.css';

const PhotoCarousel = ({ roomId }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function importAll(r) {
    return r.keys().map(r);
  }

  var content
  switch (roomId) {
    case '100':
      content = importAll(require.context(`../../images/room100`, false, /\.(png|jpe?g|svg)$/));
      break;
    case '101':
      content = importAll(require.context(`../../images/room101`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '102':
      content = importAll(require.context(`../../images/room102`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '103':
      content = importAll(require.context(`../../images/room103`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '104':
      content = importAll(require.context(`../../images/room104`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '105':
      content = importAll(require.context(`../../images/room105`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '106':
      content = importAll(require.context(`../../images/room106`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '201':
      content = importAll(require.context(`../../images/room201`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '202':
      content = importAll(require.context(`../../images/room202`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '203':
      content = importAll(require.context(`../../images/room203`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '204':
      content = importAll(require.context(`../../images/room204`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '205':
      content = importAll(require.context(`../../images/room205`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '301':
      content = importAll(require.context(`../../images/room301`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '302':
      content = importAll(require.context(`../../images/room302`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '303':
      content = importAll(require.context(`../../images/room303`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;
    case '304':
      content = importAll(require.context(`../../images/room304`, false, /\.(png|jpe?g|svg|mp4)$/));
      break;


  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls style={{ width: '50%', display: 'inline-block' }}>
      {
        content.map((_, i) => {
          return (
            <Carousel.Item style={{ backgroundColor: 'black' }} key={`item${i}`}>
              <CarouselImage
                src={content[i]}
              />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default PhotoCarousel;