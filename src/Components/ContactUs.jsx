import React from 'react';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  return (
    <Container maxWidth='md'>
      <Paper elevation={3}>
        <Typography variant='h5' align='center' gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2} alignItems='center'>
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item xs>
            <Typography>Email: mohameddhimni311@gmail.com</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center'>
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item xs>
            <Typography>Phone: +212 642186606</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center'>
          <Grid item>
            <LocationOnIcon />
          </Grid>
          <Grid item xs>
            <Typography>Address: 123 Main Street, City, Country</Typography>
          </Grid>
        </Grid>
        <form noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            id='name'
            label='Name'
            name='name'
            autoComplete='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='message'
            label='Message'
            type='text'
            id='message'
            multiline
            rows={4}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactUs;
