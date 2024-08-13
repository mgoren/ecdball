import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { EVENT_TITLE, EVENT_LOCATION_2, EVENT_DATE } = config;

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, p: 2, backgroundColor: 'var(--color-error)' }}>
        <Typography variant="h6">
          The Ball is full but the waitlist is currently empty.<br />
          We typically get a few cancellations before the Ball, so sign up now!
        </Typography>
      </Box>

      <PageTitle>
        {EVENT_TITLE}<br />
        <StyledLink to='https://www.milwaukielodge.org'>Milwaukie-Waluga Masonic Lodge</StyledLink><br />
        {EVENT_LOCATION_2}<br />
        {EVENT_DATE}
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Dances led by <StyledLink internal={true} to="/staff#caller">Gaye Fifer</StyledLink><br />
        Gaye will be using positional calling
      </Typography>
      <Typography variant="h6">
        Music by <StyledLink internal={true} to="/staff#BetsyBranch">Betsy Branch</StyledLink>, <StyledLink internal={true} to="/staff#BillTomczak">Bill Tomczak</StyledLink>, and <StyledLink internal={true} to="/staff#LisaScott">Lisa Scott</StyledLink>
      </Typography>
      <Typography variant="h6">
        <p>Sound engineer <StyledLink internal={true} to="/staff#JohnOorthuys">John Oorthuys</StyledLink></p>
      </Typography>

      <Paragraph sx={{ my: 4 }}>
        This year's Ball will be mask optional.<br />
        See the <StyledLink internal={true} to="/welcome">Welcome</StyledLink> page for more information.
      </Paragraph>

      <Typography variant="h6">
        Registration: $50/person
      </Typography>
      <Paragraph sx={{ mt: 0 }}>
        Due to having to change to a smaller venue (for this year only),<br />
        we are limiting the total attendees for the Ball. Please register early.
      </Paragraph>
      <Paragraph>
        Friday night dance is open to all and is not included in this fee.
      </Paragraph>
      <Paragraph>
        Friday and Saturday events at<br />
        <StyledLink to='https://www.milwaukielodge.org'>Milwaukie-Waluga Masonic Lodge</StyledLink><br />
        {EVENT_LOCATION_2}<br />
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h6">
        Pre-Ball <StyledLink internal={true} to="/workshops">workshops</StyledLink>:
      </Typography>
      <Paragraph sx={{ mt: 1 }}>
        <strong>3-5pm on September 22, October 6 and 27</strong><br />
        <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
        <StyledLink to="https://goo.gl/maps/M2CBrKV3KKJkuTb8A">234 S Bancroft St, Portland, OR 97239</StyledLink>
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
        <StyledLink internal={true} to="/registration">Registration now open!</StyledLink>
      </Typography>

    </StyledPaper>
  );
}
