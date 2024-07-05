import { Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider, Header } from 'components/Layout/SharedStyles';

export default function Workshops() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Workshops
      </PageTitle>

      <Header>
        Pre-ball Workshops
      </Header>

      <Paragraph> 
        In the Portland area, there will be three Sunday pre-ball workshop sessions:
      </Paragraph>

      <Paragraph>
        TBD
      </Paragraph>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Paragraph>
          <strong>Time:</strong> 3:00p-5:00p
          </Paragraph>

          <Paragraph>
            <strong>Location:</strong><br />
            <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
            234 S Bancoft St<br />
            Portland, OR 97239<br />
          </Paragraph>

          <Paragraph>
            Suggested donation is $10 - $20
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11187.605253951842!2d-122.675108!3d45.491932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b6b14393093%3A0x166aad2b1a113960!2s234%20S%20Bancroft%20St%2C%20Portland%2C%20OR%2097239!5e0!3m2!1sen!2sus!4v1687468886079!5m2!1sen!2sus" 
          title="Google map embed for A Renaissance School"  
          style={{border: 0}} allowFullScreen="" loading="lazy" 
          width={230} height={230}
          referrerPolicy="no-referrer-when-downgrade" />
        </Box>
      </Box>

      <Paragraph align="justify">
        <strong>NOTE:</strong> We want to protect the floor, so please be sure to bring dancing shoes 
        or warm socks.
      </Paragraph>

      <Paragraph align="justify">
        The ball workshops are designed for learning the dances on the ball program and are not intended 
        to be an introduction to English country dance. Each of these workshops will focus on different 
        ball dances and styling tips. Familiarity with English figures and geography will be assumed at 
        the workshops.
      </Paragraph>

      <Paragraph align="justify">
        If you are new to English country dance, please attend the <StyledLink to="https://portlandcountrydance.org/english-country-dance">PCDC Friday Night English Dance</StyledLink> as 
        often as possible prior to participating in the workshops.
      </Paragraph>

      <SectionDivider />

      <Header sx={{ mb: 0 }}>
        "Day of" Ball Workshop
      </Header>

      <Paragraph variant="body2" sx={{ mt: 0 }}>
        <em>(Ball attendees only - included in the price of registration)</em>
      </Paragraph>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Paragraph>
            <strong>Date:</strong> November 2
          </Paragraph>

          <Paragraph>
            <strong>Time:</strong> 12:00 - 2:30
          </Paragraph>

          <Paragraph>
            <strong>Location:</strong><br />
            <StyledLink to="https://www.milwaukielodge.org">Milwaukie-Waluga Masonic Lodge</StyledLink><br />
            10636 SE Main St<br />
            Milwaukie, OR 97222<br />
          </Paragraph>

          <Paragraph>
            There are city parking lots across the street that offer 4-hour parking until 5:00, and then free after that.
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.1919339668716!2d-122.64390522291824!3d45.44578827107362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549575283e1feff1%3A0x4fe45bd3041fa327!2sMilwaukie%20Masonic%20Lodge!5e0!3m2!1sen!2sus!4v1720208161655!5m2!1sen!2sus"
            title="Google map embed for Milwaukie-Waluga Masonic Lodge"  
            style={{border: 0}} allowFullScreen="" loading="lazy" 
            width={230} height={230}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      <Paragraph align="justify">
        The afternoon workshop will include a review of most of the Ball dances and styling suggestions for 
        greater dancing pleasure. We will spend time on those dances that are a bit more challenging, so 
        that in the evening more time can be spent dancing rather than learning. We strongly advise 
        attendance at the workshop - plus it is fun!
      </Paragraph>
    </StyledPaper>
  );
}
