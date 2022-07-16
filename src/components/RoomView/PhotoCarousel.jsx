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
    // case '101':
    //   content = importAll(require.context(`../../images/room101`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '102':
    //   content = importAll(require.context(`../../images/room102`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '103':
    //   content = importAll(require.context(`../../images/room103`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '104':
    //   content = importAll(require.context(`../../images/room104`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '105':
    //   content = importAll(require.context(`../../images/room105`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '106':
    //   content = importAll(require.context(`../../images/room106`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '107':
    //   content = importAll(require.context(`../../images/room107`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '108':
    //   content = importAll(require.context(`../../images/room108`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '109':
    //   content = importAll(require.context(`../../images/room109`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '110':
    //   content = importAll(require.context(`../../images/room110`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '111':
    //   content = importAll(require.context(`../../images/room111`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '112':
    //   content = importAll(require.context(`../../images/room112`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '113':
    //   content = importAll(require.context(`../../images/room113`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '114':
    //   content = importAll(require.context(`../../images/room114`, false, /\.(png|jpe?g|svg|mp4)$/));
    // case '115':
    //   content = importAll(require.context(`../../images/room115`, false, /\.(png|jpe?g|svg|mp4)$/));


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