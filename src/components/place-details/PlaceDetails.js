import React from 'react'
import { Rate } from 'antd';
import {
  Container, Image, Media, SubTitle, Hr, LocationPin,
  Content, Title, Paragraph, Cont, Cuisine, Mobile,
  Website, Button, ParagraphRight
} from './places.style'


function PlaceDetails({place, index}) {
  
  return (
    <Container>
      <Media>
      {place?.photo ? <Image src={place?.photo.images.large.url} alt={place?.name} /> : <Image src='https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' alt=''/>}
    </Media>

      <Content>
        <Title>{place?.name}</Title>
        <Cont>
        <Paragraph>Rating ({isNaN(Number(place?.rating)) ? '0' : Number(place?.rating)})</Paragraph>
          <Rate allowHalf defaultValue={Number(place?.rating)}  style={{ fontSize:14, color:'#8F5C5C'}}/> 
        </Cont>
        <Cont>
         <Paragraph>Review</Paragraph> 
          <ParagraphRight>{place?.num_reviews} review{place?.num_reviews > 1 && 's'}</ParagraphRight>
        </Cont>
        {place?.price_level && <Cont>
          <Paragraph>Price level</Paragraph>
          <ParagraphRight>{place?.price_level}</ParagraphRight>
        </Cont>}

        {place?.ranking && <Cont>
          <Paragraph>Ranking</Paragraph>
          <ParagraphRight> {place?.ranking}</ParagraphRight>
        </Cont>}

       {(place?.cuisine && place?.cuisine?.length !== 0) && <SubTitle>Cuisine</SubTitle>}
        {(place?.cuisine && place?.cuisine?.length  !== 0 )&& <Cuisine>
        {place?.cuisine?.map(({ name }) => (
          <span key={name}>
            {name}
          </span>
        ))}
        </Cuisine>}
        <Hr />
        {place?.address && <Cont>
          <LocationPin />
          <ParagraphRight>{place?.address}</ParagraphRight>
        </Cont>}
        {place?.phone && <Cont>
          <Mobile />
          <ParagraphRight>{place?.phone}</ParagraphRight>
        </Cont>}
        {place?.web_url && <Cont>
          <Website />
          <Button  onClick={() => window.open(place?.web_url, '_blank')}>
          {place?.name} Website
          </Button>
        </Cont>}
        
      </Content>
    </Container>
    
  )
}

export default PlaceDetails