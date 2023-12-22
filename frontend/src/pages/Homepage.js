import React from "react";
import Layout from "../components/common/Layout";
import BackgroundImage from "../components/ui/BackgroundImage";
import Heading from "../components/ui/Heading";
import ActionButton from "../components/ui/ActionButton";
import SubHeading from "../components/ui/SubHeading";
import PageHeading from "../components/ui/PageHeading";
import Text from "../components/ui/Text";
import popularRoomData from "../data/PopularRoomData";
import CardItem from "../components/ui/CardItem";
import Grid from '@mui/material/Grid';

export default function Homepage() {
  return (
    <Layout>
      <BackgroundImage imageUrl="/images/slide-3.jpg">
        <div className="hero_txt">
          <SubHeading
            className="sub_heading"
            title="Globe-Trot. Collect. Cherish."
          />
          <Heading
            className="hero_h1"
            title="Travel, Make Memories Worldwide"
          />
          <ActionButton label="Book Now" className="btn" />
        </div>
      </BackgroundImage>
      <section className="popular_room">
        <div className="heading">
          <PageHeading
            className="section_title"
            title="Explore Most Popular Room"
          />
          <Text
            className="section_text"
            text="Explore the hotel's most popular rooms, where luxury and comfort seamlessly blend to create an unforgettable experience for guests."
          />
        </div>
        <div className="inPopular_room">
          <Grid container spacing={2}>
            {popularRoomData.map((room) => (
              <Grid item xs={4}>
                <CardItem imageUrl={room.images} title={room.title} price={room.price} buttonTxt="View more" />
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <BackgroundImage imageUrl="/images/slide-1.jpg" >
         <div className="offer_txt">
            
         </div>
      </BackgroundImage>
    </Layout>
  );
}
