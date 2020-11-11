/*
import React, { Component, useState } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardTitle, Carousel, CarouselItem, CarouselControl,
     CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import TNGEpisode from './SelectionComponent';
import VOYEpisode from './SelectionComponent';
import watchSelector from './SelectionComponent';

const items = [
  {
    src: 'public/assets/1motionpicture.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'public/assets/2wratchofkhan.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
     src: 'public/assets/3searchforspock.png',
     altText: 'Slide 3',
     caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;



class Picard extends Component {
     render() {
          return (
               <div>
                    <Card>
                         <CardImg top width="100%" src={'public/assets/tng.png'} alt="Star Trek: The Next Generation" />
                         <CardBody>
                              <CardTitle>Star Trek: The Next Generation</CardTitle>
                              <CardText>Which series would you rather watch?</CardText>
                              <Button color="primary" onClick={TNGEpisode()}>The Next Generation</Button>
                              <Button color="primary" onClick={VOYEpisode()}>Voyager</Button>
                              <Button color="primary" onClick={watchSelector()}>Either one!</Button>
                         </CardBody>
                    </Card>
               </div>
          )
     }
};

export default Picard;



--arrow: 15px;
--mprArrow: 9px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
text-align: center;
background-color: white;
height: 500px;
width: 400px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;


*/