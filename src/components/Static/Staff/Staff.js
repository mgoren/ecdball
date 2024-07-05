import { Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider, Header } from 'components/Layout/SharedStyles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Staff() {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash.replace('#', ''));
    if (element) element.scrollIntoView();
  }, [location]);

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>Performers</PageTitle>

      <Header id="caller">Calling by <em>Gaye Fifer</em></Header>
      <Box>
        <Box sx={{ mt: 2, pr: 3, float: { xs: 'none', sm: 'left' } }}>
          <img src={process.env.PUBLIC_URL + '/ecdball/GayeFifer.png'} alt="Gaye Fifer" style={{ width: 225 }} />
        </Box>
        <Paragraph sx={{ pt: 1, mb: 0 }}>
          Gaye Fifer is an accomplished caller from Pittsburgh, PA. 
          An active dancer herself, Gaye understands the subtleties of making dances particularly satisfying for dancers. 
          Her instructions are clear and concise, as she is a teacher by profession. 
          An easy smile and delightful sense of humor are part of Gaye's relaxed, pleasant style at the microphone. 
          Gaye calls contra and English dances throughout the U.S. and Canada. 
          She is also an enthusiastic advocate and instructor of contra-style waltz. 
          Gaye is the former President of the Board of CDSS.
        </Paragraph>
      </Box>
      <Box sx={{ clear: 'both' }} />

      <SectionDivider />

      <Box sx={{ mb: 4 }}>
        <Header id="music">Music by <em>Betsy Branch</em>, <em>Lisa Scott</em> and <em>Bill Tomczak</em></Header>
      </Box>

      <Box id="BetsyBranch">
        <Box sx={{ pr: 3, float: { xs: 'none', sm: 'left' } }}>
          <img src={process.env.PUBLIC_URL + '/ecdball/BetsyBranch.png'} alt="Betsy Branch" style={{ width: 170 }} />
        </Box>
        <Paragraph sx={{ mb: 0 }}>
          <StyledLink to="https://fiddlefrau.com/"><strong>Betsy Branch</strong></StyledLink> has 
          been a mainstay of the Portland, Oregon dance community for many years. Her exuberant 
          dance fiddling has delighted dancers on both coasts and her warmth and engaging smile 
          extend beyond the stage and draw in dancers and listeners alike. She 
          was the Associate Music Director of Portland's Revels theater company, 
          and their house fiddler. Betsy plays for English and Irish dancing, and 
          in several contra dance bands.  Her primary passion is teaching and 
          mentoring fiddlers and dance musicians. Betsy teaches privately out of 
          her home in SE Portland, and for workshops around the region. When not 
          playing or teaching, she works as a music editor, arranger, and 
          transcriber.
        </Paragraph>
      </Box>
      <Box sx={{ clear: 'both' }} />

      <SectionDivider />

      <Box id="LisaScott">
        <Box sx={{ pr: 3, float: { xs: 'none', sm: 'left' } }}>
          <img src={process.env.PUBLIC_URL + '/ecdball/LisaScott.png'} alt="Lisa Scott" style={{ width: 170 }} />
        </Box>
        <Paragraph sx={{ mb: 0 }}>
          <strong>Lisa Scott</strong>	is an accomplished pianist and 
          teacher. Coming from a musical heritage, she earned a Bachelor of 
          Music at Lewis and Clark College. She studied the art of accompaniment 
          at the University of Southern California and in New York. She began 
          Scottish dancing, soon earned her preliminary teaching certificate, 
          and then learned to play for Scottish dance. Lisa has played piano for 
          Scottish dance in the U.S., Canada, Japan, and Scotland. Many years 
          ago she fell in love with English country dance and music and has been 
          playing for workshops and balls ever since. Lisa's sensitivity to dance 
          rhythms and her lyrical style make her music a joy for dancers.
        </Paragraph>
      </Box>
      <Box sx={{ clear: 'both' }} />

      <SectionDivider />

      <Box id="BillTomczak">
        <Box sx={{ pr: 3, float: { xs: 'none', sm: 'left' } }}>
          <img src={process.env.PUBLIC_URL + '/ecdball/BillTomczak.png'} alt="Bill Tomczak" style={{ width: 170 }} />
        </Box>
        <Paragraph sx={{ mb: 0 }}>
          <StyledLink to="https://billtomczak.com/"><strong>Bill Tomczak</strong></StyledLink> started 
          playing clarinet at the age of 9. After a typical round of high school bands and concerts, 
          he entered Northwestern University as a music major and studied under several teachers from 
          the Chicago Symphony. In 1979, he discovered the world of International Folk Dancing and 
          has been playing for folk dance of one kind or another ever since. The International 
          repertoire provided a solid ground for all his subsequent work with Balkan, Klezmer, Greek, 
          contra dance and jazz. He developed a reputation as a tasteful and innovative improviser 
          who learned to blend seamlessly into a wide variety of fiddle styles, practically defining 
          a whole new tradition for contra dance clarinet and saxophone playing. Bill now plays for 
          contra dancing and English Country Dancing with The Latter Day Lizards, Campaign for Reel 
          Time and Fine Companions. He has recorded with The Latter Day Lizards, BLT, Wild Asparagus 
          and Yankee Ingenuity and appears on the recordings Cascade of Tears and Gypsy Wine with 
          Mary Lea and friends.
        </Paragraph>
      </Box>
      <Box sx={{ clear: 'both' }} />

      <SectionDivider />

      <Header id="JohnOorthuys">Sound by <em>John Oorthuys</em></Header>
      <Box>
        <Box sx={{ mt: 2, pl: { xs: 'none', sm: 3 }, float: { xs: 'none', sm: 'right' } }}>
          <img src={process.env.PUBLIC_URL + '/ecdball/JohnOorthuys.jpg'} alt="John Oorthuys" style={{ width: 225 }} />
        </Box>
        <Paragraph sx={{ pt: 1, mb: 0 }}>
        Highly regarded by dancers, musicians, and callers for his high-quality sound work, John 
        Oorthuys has handled the sound board for many dances, balls, camps, and special events for 
        PCDC and surrounding Pacific Northwest communities. He has been the Ball sound engineer 
        for years and years, and his wizardry makes the sound fantastic.
        </Paragraph>
      </Box>
      <Box sx={{ clear: 'both' }} />
    </StyledPaper>
  );
}
