import { Typography, Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider } from 'components/Layout/SharedStyles';

export default function Schedule() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Weekend Schedule
      </PageTitle>

      <Paragraph variant="body2" align="center">
        (This page is our Weekend schedule &mdash; for our pre-Ball workshops, go <StyledLink internal={true} to="/workshops">here)</StyledLink>
      </Paragraph>

      <SectionDivider />

      <Typography variant="h5" sx={{ textAlign: { xs: "left", sm: "center"} }} gutterBottom>
        Friday November 1, 2024
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box>
          <Paragraph>
            <strong>Pre-Ball Dance</strong><br />
            7:30pm &mdash; 10:30pm
          </Paragraph>
          <Paragraph>
            <StyledLink to="https://www.milwaukielodge.org">Milwaukie-Waluga Masonic Lodge</StyledLink><br />
            10636 SE Main St<br />
            Milwaukie, OR 97222<br />
            There are city parking lots across the street that offer 4-hour parking until 5:00, and then free after that.
          </Paragraph>
          <Paragraph>
            Sliding Scale $10 - $15 admission fee (not included in the Ball registration)<br />
            Cynthia Stenger calling with music by Laura Kuhlman, Brooke Bubna, Jenny Peterson
          </Paragraph>
        </Box>
        <Box sx={{ mt: { xs: 0, sm: 2.5 }, pl: { xs: 0, sm: 4 } }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.1919339668716!2d-122.64390522291824!3d45.44578827107362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549575283e1feff1%3A0x4fe45bd3041fa327!2sMilwaukie%20Masonic%20Lodge!5e0!3m2!1sen!2sus!4v1720208161655!5m2!1sen!2sus"
            title="Google map embed for Milwaukie-Waluga Masonic Lodge"  
            style={{border: 0}} allowFullScreen="" loading="lazy" 
            width={230} height={230}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      <Paragraph align="justify">
        Our regular Friday night English dance will be held at the Milwaukie-Waluga Masonic Lodge. 
        The program will include some of the Ball dances plus many other delightful dances. 
        Let new friends know who you are - bring your own button (or use one of our paper ones) for this dance.
      </Paragraph>

      <SectionDivider />

      <Typography variant="h5" sx={{ textAlign: { xs: "left", sm: "center"} }} gutterBottom>
        Saturday November 2, 2024
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box>
          <Paragraph>
            <strong>Ball Workshop</strong><br />
            12:00 noon &mdash; 2:30pm
          </Paragraph>
          <Paragraph>
            <strong>The Ball</strong><br />
            Waltzing at 7:00pm<br />
            Dancing 7:30pm &mdash; 11:00pm
          </Paragraph>
          <Paragraph>
            <StyledLink to="https://www.milwaukielodge.org">Milwaukie-Waluga Masonic Lodge</StyledLink><br />
            10636 SE Main St<br />
            Milwaukie, OR 97222<br />
            There are city parking lots across the street that offer 4-hour parking until 5:00, and then free after that.
          </Paragraph>
          <Paragraph variant="body2">
            <strong>Note:</strong> The Ball venue will be locked between the afternoon workshop and the Ball.
          </Paragraph>
        </Box>
        <Box sx={{ mt: { xs: 0, sm: 2.5 }, pl: { xs: 0, sm: 4 } }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.1919339668716!2d-122.64390522291824!3d45.44578827107362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549575283e1feff1%3A0x4fe45bd3041fa327!2sMilwaukie%20Masonic%20Lodge!5e0!3m2!1sen!2sus!4v1720208161655!5m2!1sen!2sus"
            title="Google map embed for Milwaukie-Waluga Masonic Lodge"  
            style={{border: 0}} allowFullScreen="" loading="lazy" 
            width={230} height={230}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      <Paragraph align="justify">
        <strong>The afternoon workshop</strong> will include a review of most 
        of the Ball dances and styling suggestions for greater dancing pleasure. 
        We will spend time on those dances that are a bit more challenging, so 
        that in the evening more time can be spent dancing rather than learning. 
        We strongly advise attendance at the workshop - plus it is fun!  
      </Paragraph>

      <Paragraph align="justify">
        <strong>At the Ball</strong>, the band will play waltzes from 7:00pm 
        to 7:30pm as a prelude for the evening. The Ball will begin promptly 
        at 7:30pm. Note that there is very limited room for changing clothing 
        at the Oaks Park Pavilion, so please plan accordingly. We will dance 
        until about 11:00pm with an intermission to socialize with new and 
        old friends and to refresh ourselves with a little food and drink.
      </Paragraph>

      <SectionDivider />

      <Typography variant="h5" sx={{ textAlign: { xs: "left", sm: "center"} }} gutterBottom>
        Sunday November 4, 2024
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between" }}>
        <Box>
          <Paragraph>
            <strong>Potluck Brunch and Dance Party</strong><br />
            10:30am &mdash; 2:00pm
          </Paragraph>
          <Paragraph>
            Burlingame Water Tower Hall<br />
            (aka: Capitol Hill Community Center)<br />
            8936 SW 17th Ave<br />
            Portland, OR 97219<br />
          </Paragraph>
        </Box>

        <Box sx={{ mt: { xs: 0, sm: 2.5 }, pl: { xs: 0, sm: 4 } }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.4569422495774!2d-122.69491339999998!3d45.4605984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b150fb27023%3A0x91b7ea2e34b56030!2s8936%20SW%2017th%20Ave%2C%20Portland%2C%20OR%2097219!5e0!3m2!1sen!2sus!4v1687465816734!5m2!1sen!2sus"
            title="Google map embed for Burlingame Water Tower Hall"
            style={{border: 0}} allowFullScreen="" loading="lazy"
            width={230} height={230}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      <Paragraph>
        We'll gather at the Burlingame Water Tower Hall where our weekly English dance happens.<br />
        Our local dancers will provide potluck, coffee, tea, and juice.
      </Paragraph>
      <Paragraph>
        Please change into your dance shoes when entering the hall.
      </Paragraph>
      <Paragraph>
        The Open caller / Open Band dancing will start 12:00ish.
      </Paragraph>
      <Paragraph>
        Musicians, please bring music stands and copies of Barnes books.<br/>
        Callers bring easy dances that will accomodate the open band and that are in Barnes.
      </Paragraph>
    </StyledPaper>
  )  
}
