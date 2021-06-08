import React from 'react';
import Layout from '../../components/home/Layout';
import profile from '../../images/profile.jpg';
import { Button, TextField } from "@material-ui/core";
import './Experience.scss';

const Contact =() => {
    return (
        <Layout section ="contact" imgSrc={profile} >
<div className="Contact">
    <div className="contact-inner">
        <h1>Let's Connect !!!</h1>
        <h3>If you would like to get in touch with me feel free to full out this contact form.
             I ussualy reply within 2-5 business days. Thanks!</h3>
    </div>
    <div className="Contact-form">
    
    <form>
      <TextField id="standard-multiline-flexible"
          placeholder="Enter Name"
          variant="outlined"    
      label="Full Name"
      type= "text"
       fullWidth autocomplete="none"/>

      <TextField 
      label="Email" 
      multiline
      variant='outlined'
      fullWidth autocomplete="none"/>
      <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/>
      <Button type="submit" style={{backgroundColor:'grey'}}>Submit</Button>
    </form>
    </div>
</div>
        </Layout>
    )
}
export default Contact;
