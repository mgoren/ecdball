import { StyledLink, StyledPaper, PageTitle, Paragraph, Header } from 'components/Layout/SharedStyles';

export default function Welcome() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Welcome!
      </PageTitle>

      <Header>
        New Location - this year only
      </Header>

      <Paragraph>
        Our regular location for the ball (Oaks Park Dance Pavilion) will be renovated starting in the fall of 2024 through May 2025. 
        We're looking forward to being back at Oaks Park for our 2025 Ball!
      </Paragraph>

      <Paragraph>
        This year's Ball will be held at the Milwaukie-Waluga Masonic Lodge, 10636 SE Main St, Milwaukie, OR 97222. 
        It has a wonderful wooden dance floor. It's a bit smaller than Oaks Park so a few minor things will change (for example we will not have tables setup for the break/snacks). 
        There are city parking lots across the street that will be free when we are in the building.
      </Paragraph>

      <Header>
        COVID Safety Policy
      </Header>

      <Paragraph>
        The Ball will be Mask optional this year.  We will not require vaccinations or testing.
      </Paragraph>

      <Header>
        Dancing
      </Header>

      <Paragraph>
        At the Ball, most dances will be walked through to remind dancers of the figures, and all dances will be prompted. 
        We encourage you to familiarize yourself with the <StyledLink internal={true} to="/dances">dances on the program</StyledLink> and 
        check out the information in our <StyledLink to="/ecdball/2024PortlandBall_DanceInstructions.pdf">Dance Instructions packet</StyledLink>.
      </Paragraph>

      <Header>
        Scholarships
      </Header>

      <Paragraph>
        We have a limited number of scholarships available. If you need a scholarship, please request it when you register.
      </Paragraph>

      <Header>
        Volunteering
      </Header>

      <Paragraph>
        We would love to have your help with the many small and easy tasks required to make this 
        Ball a success,  such as helping to set up and decorate the hall on Saturday morning or 
        packing things away after the ball.  You can sign up for volunteering on our registration 
        form, or email our <StyledLink to="mailto:volunteering@portlandecdball.info">volunteer coordinator</StyledLink> to 
        ask how you can help.
      </Paragraph>

      <Header>
        Hospitality
      </Header>

      <Paragraph>
        We will have limited opportunities for hosting traveling dancers. You can easily request 
        hospitality or offer hospitality on our registration form, or email 
        our <StyledLink to="mailto:hospitality@portlandecdball.info">hospitality coordinator</StyledLink>.
      </Paragraph>

      <Header>
        Portland Area Ball Workshops
      </Header>

      <Paragraph>
        In the Portland area, there will be three <StyledLink internal={true} to="/workshops">workshop sessions</StyledLink> in 
        September and October to prepare for the Ball.
      </Paragraph>
    </StyledPaper>
  );
}
