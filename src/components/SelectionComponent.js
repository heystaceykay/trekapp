import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Card, CardImg, CardSubtitle, CardTitle, Row } from 'reactstrap';

export function watchSelector() {

     const watchID = Math.floor(Math.random() * 2) + 1;
     console.log('Inside watchSelector()');
     switch(watchID) {
          case 1: 
               Movie();
               break;
          case 2: 
               Television();
               break;
          default: 
               watchSelector();
               break;
     };

};

function Movie() {
          let filmID = Math.floor(Math.random() * 13) + 1;
          let title = '';
          let poster = 'public/assets/logo-c.jpg';
          let year = 1900;
          console.log('Inside Movies()');

          switch(filmID) {
               case 1:
                    title = 'The Motion Picture';
                    year = 1979;
                    poster = 'https://i.imgur.com/zWbI9ee.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 2:
                    title = 'Star Trek: The Wrath of Khan';
                    year = 1982;
                    poster = 'https://i.imgur.com/20jSOIB.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 3:
                    title = 'Star Trek: The Search for Spock';
                    year = 1984;
                    poster = 'https://i.imgur.com/HhzWaun.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 4:
                    title = 'Star Trek: The Voyage Home';
                    year = 1986;
                    poster = 'https://i.imgur.com/SL2BlAe.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 5:
                    title = 'Star Trek: The Final Frontier';
                    year = 1989;
                    poster = 'https://i.imgur.com/933evdj.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 6:
                    title = 'Star Trek: The Undiscovered Country';
                    year = 1991;
                    poster = 'https://i.imgur.com/aTphKAS.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 7:
                    title = 'Star Trek: Generations';
                    year = 1994;
                    poster = 'https://i.imgur.com/JxEufdk.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 8:
                    title = 'Star Trek: First Contact';
                    year = 1996
                    poster = 'https://i.imgur.com/GFzs4lL.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 9:
                    title = 'Star Trek: Insurrection'                                                                                                                                                                                                                                            ;
                    year = 1998;
                    poster = 'https://i.imgur.com/7xC5z3H.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 10:
                    title = 'Star Trek: Nemesis';
                    year = 2002;
                    poster = 'https://i.imgur.com/kNqPuky.png';
                    // alert('You selected a film! ' + title + ' (' + year + ') ');
                    break;
               case 11:
                    title = 'Star Trek: The Movie';
                    year = 2009;
                    poster = 'https://i.imgur.com/A7iSBsh.png';
                    break;
               case 12:
                    title = 'Star Trek: Into Darkness';
                    year = 2013;
                    poster = 'https://i.imgur.com/lQ7PUZL.png';
                    break;
               case 13:
                    title = 'Star Trek: Beyond';
                    year = 2016;
                    poster = 'https://i.imgur.com/oe3EOsF.png';
                    break;
               default: 
                    Movie();
                    break;
          }

          let declare = (
               <div>
                    <Card width="30%"> 
                         <CardTitle tag="h5">{title}</CardTitle>
                         <CardSubtitle tag="h6" className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={title} />
                    </Card>
               </div>
                    );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: [Movie]:' + title + ': ' + year);
          
};

function Television() {

     const televisionID = Math.floor(Math.random() * 10) + 1;
     console.log('Inside Television()');
     switch (televisionID) {
          case 1: 
               TOSEpisode();
               break;
          case 2: 
               AnimEpisode();
               break;
          case 3: 
               TNGEpisode();
               break;
          case 4: 
               DS9Episode();
               break;
          case 5: 
               VOYEpisode();
               break;
          case 6: 
               ENTEpisode();
               break;
          case 7: 
               DISCOEpisode();
               break;
          case 8: 
               PicardEpisode();
               break;
          case 9: 
               LDEpisode();
               break;
          default: 
               Television();
               break;
     };

     function TOSEpisode() {
          let series = 'Star Trek: The Original Series';
          let season = Math.floor(Math.random() * 3) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/qe8CbB3.jpg';
          let year = "1966-1969";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

          switch(season) {
               case 1:
                    episode = Math.floor(Math.random() * 29) + 1; 
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2:
                    episode = Math.floor(Math.random() * 26) + 1; 
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 3:
                    episode = Math.floor(Math.random() * 24) + 1; 
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default:
                    TOSEpisode();
                    break;
          }

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function AnimEpisode() {
          let series = 'Star Trek: The Animated Series';
          const season = Math.floor(Math.random() * 2) + 1;
          let episode = 0;
          let poster = '';
          let year = "1973-1975";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 13) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2: 
                    episode = Math.floor(Math.random * 13) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default:
                    AnimEpisode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };
    
     function TNGEpisode() {
          let series = 'Star Trek: The Next Generation';
          let season = Math.floor(Math.random() * 7) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/2pfdXzO.jpg';
          let year = "1987-1984";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
                    episode = Math.floor(Math.random() * 26) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2: 
                    episode = Math.floor(Math.random() * 22) + 1; 
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default: 
                    TNGEpisode();
                    break;
          };
          
          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

          
     };

     function DS9Episode() {
          let series = 'Star Trek: Deep Space Nine';
          let season = Math.floor(Math.random() * 7) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/qWHe08D.jpg';
          let year = "1993-1999";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + '...');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 20) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
                    episode = Math.floor(Math.random() * 26) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default: 
                    DS9Episode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function VOYEpisode() {
          let series = 'Star Trek: Voyager';
          const season = Math.floor(Math.random() * 7) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/0KyEEU5.jpg';
          let year = "1995-2001";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 16) + 1; 
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
                    episode = Math.floor(Math.random() * 26) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default: 
                    VOYEpisode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function ENTEpisode() {
          let series = 'Star Trek: Enterprise';
          const season = Math.floor(Math.random() * 4) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/SIYMlQS.jpg';
          let year = "2001-2005";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 26) + 1;
                    // alert('You selected [' + series + '!]\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2:
                    episode = Math.floor(Math.random() * 26) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 3:
                    episode = Math.floor(Math.random() * 24) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 4:
                    episode = Math.floor(Math.random() * 22) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               default: 
                    ENTEpisode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function DISCOEpisode() {
          let series = 'Star Trek: Discovery';
          const season = Math.floor(Math.random() * 2) + 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/nRtVQ0T.jpg';
          let year = "2017-present";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 15) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               case 2:
                    episode = Math.floor(Math.random() * 14) + 1;
                    // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
                    break;
               // case 3:
               //      episode = Math.floor(Math.random() * 13) + 1;
               //      // alert('You selected ' + series + '.\nYou have selected season ' + season + ', ' + episode + '.');
               //      break;
               default: 
                    DISCOEpisode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function PicardEpisode() {
          let series = 'Star Trek: Enterprise';
          const season = 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/iB82rH3.jpg';
          let year = "2020-present";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 10) + 1;
                    // alert('You have selected season ' + season + ', episode ' + episode + '.');
                    break;
               default: 
                    PicardEpisode();
                    break;
          };
          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');

     };

     function LDEpisode() {
          let series = 'Star Trek: Enterprise';
          const season = 1;
          let episode = 0;
          let poster = 'https://i.imgur.com/GZHWcG9.jpg';
          let year = "2020-present";
          console.log('BEFORE SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');
          
          switch (season) {
               case 1:
                    episode = Math.floor(Math.random() * 10) + 1;
                    // alert('You have selected season ' + season + ', episode ' + episode + '.');
                    break;
               default: 
                    LDEpisode();
                    break;
          };

          let declare = (
               <div>
                    <Card width="30%">
                         <CardTitle>{series}</CardTitle>
                         <CardSubtitle className="mb-2 text-muted">{year}</CardSubtitle>
                         <CardImg src={poster} alt={series} />
                    </Card>
               </div>
           );

          ReactDOM.render(declare, document.getElementById('result'));
          console.log('AFTER SWITCH STATEMENT: SERIES: ' + series + '.\nYou have selected season ' + season + ', episode' + episode + '.');


};
};

class Remote extends Component {
     render() {
          return (
               <Row>
               <ButtonGroup size="lg">
                    <Button className="primary" onClick={Television}>TV Series</Button>
                    <Button className="primary" onClick={Movie}>Movie</Button>
                    <Button className="primary" onClick={watchSelector}>Anything!</Button>
               </ButtonGroup>
               </Row>
          );
     };
};

export default Remote;