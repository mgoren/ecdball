import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';
// import { mailtoLink} from 'utils';
import config from 'config';
const { EVENT_TITLE, EVENT_LOCATION, EVENT_LOCATION_2, EVENT_DATE } = config;

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        {EVENT_TITLE}<br />
        {EVENT_LOCATION}<br />
        {EVENT_LOCATION_2}<br />
        {EVENT_DATE}
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Dances led by <StyledLink internal={true} to="/staff#caller">Gaye Fifer</StyledLink>
      </Typography>
      <Typography variant="h6">
        Music by <StyledLink internal={true} to="/staff#musicians">Betsy Branch, Bill Tomczak, and Lisa Scott</StyledLink>
      </Typography>
      <Paragraph sx={{ mt: 0 }}>
        (<StyledLink internal={true} to="/staff#BetsyBranch">Betsy Branch</StyledLink>, <StyledLink internal={true} to="/staff#LisaScott">Lisa Scott</StyledLink>, <StyledLink internal={true} to="/staff#BillTomczak">Bill Tomczak</StyledLink>)
      </Paragraph>
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
        Due to a venue change for this year only, registration will be reduced from previous years.<br />
        Friday night dance is open to all and is not included in this fee.
      </Paragraph>
      <Paragraph>
        Friday and Saturday events at<br />
        {EVENT_LOCATION}<br />
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
        Registration opening soon
      </Typography>

    </StyledPaper>
  );
}
