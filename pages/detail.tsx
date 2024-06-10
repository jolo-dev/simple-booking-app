import type { NextPage } from 'next';
import { Box, Container, Grid } from '@mui/material';

const Detail: NextPage = ({ children }) => {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" height="100vh">
        <Box
          component="section"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {children}
        </Box>
      </Grid>
    </Container>
  );
};

export default Detail;
