import * as React from 'react';
import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import Header from "../../components/header";
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardContent, CardMedia, CssBaseline, Grid } from '@mui/material';
import newsIcon from "../../assets/images/newsicon.png";
import bestway from "../../assets/images/bestway.png";
import joinNow from "../../assets/images/joinnow.png";
import servicesIcon from "../../assets/images/247service.png";
import ticket from "../../assets/images/ticket.png";
import message from "../../assets/images/message.png";
import faq from "../../assets/images/faq.png";
// 
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import {data} from "./data";
const Index = () => {
  const [flexBasis, setFlexBasis] = React.useState(200);
  return (
    <Box
    sx={{width:"100vw"}}
    >
       <CssBaseline/>
        <Appbar/>
       
        <Header/>
        <Grid container alignContent={'center'} xs={12}>
         
  <Grid container item xs={12}   pt={2} margin={2} justifyContent={'center'} > 
  {data.map((item) => (
    //  <CardActionArea>
    <Button style={{textTransform: 'none'}}>
<Card
    row
   elevation={0}
    key={item.title}
    sx={{
      // maxWidth: 100,
      // width:{xs:60,sm:100,md:110,lg:110},
      // height:{xs:100,sm:100,md:120,lg:120},
      width:{xs:90,sm:110},
      height:{xs:110,sm:130},
      // borderRadius:5,
      margin:{xs:"0 auto 0px",sm:"0 0 0px"},
      padding: {xs:"0.8em",sm:"1.8em"},
  }}
  >
    <CardMedia
       image={item.src}
       alt="alt"
       title={item.title}
       sx={{ 
         padding: "0em 0em  0em", 
         objectFit: "contain",
         width:{xs:40,sm:50},
        height:{xs:40,sm:50}}}
     />
     <Typography     fontWeight="md" fontSize={14} textAlign={"center"}  >
       {item.title}
       </Typography>
    </Card>
    </Button>
 
    // </CardActionArea>
  ))}
  </Grid>
</Grid>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<Sheet
        variant="outlined"
        sx={{
          display: {xs:"block",sm:"flex"},
          gap: 9,
          p: 2,
          width: "400",
          borderRadius: 'sm',
          padding:"2px"
        }}
      >
        <CardActionArea component="a" href="#">
        <Card 
        sx={{ display: 'flex',  maxWidth: {xs:345,sm:"xl"},
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
      }} 
        elevation={0}
        >
        <CardMedia
            component="img"
           height={50}
           sx={{ width: {xs:180,sm:200}, display: "flex" ,objectFit:"contain"}}
            image={bestway}
            alt="image"
          />
          <CardContent >
          <Typography fontWeight="md">RRA,RSSB,EJOHEZA,RNIT,<br/>AIRTIME,ELECTRICITY,etc...</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      </Sheet>
      <Sheet
        variant="outlined"
        sx={{
          display: {xs:"block",sm:"flex"},
          gap: 9,
          p: 2,
          width: "400",
          borderRadius: 'sm',
          padding:"2px"
        }}
      >
        <CardActionArea component="a" href="#">
        <Card 
        sx={{ display: 'flex',  maxWidth: {xs:345,sm:"xl"},
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
      }} 
        elevation={0}
        >
        <CardMedia
            component="img"
           height={50}
           sx={{ width: {xs:200,sm:200}, display: "flex" ,objectFit:"contain"}}
            image={joinNow}
            alt="image"
          />
          <CardContent >
          <Typography fontWeight="md">Are you ready to jump on the wagon <br/>and join the Fintech revolution?</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      </Sheet>
      <Sheet
        variant="outlined"
        sx={{
          display: {xs:"block",sm:"flex"},
          gap: 9,
          p: 2,
          width: "400",
          borderRadius: 'sm',
          padding:"2px"
        }}
      >
        <CardActionArea component="a" href="#">
        <Card 
        sx={{ display: 'flex',  maxWidth: {xs:345,sm:"xl"},
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
      }} 
        elevation={0}
        >
        <CardMedia
            component="img"
           height={50}
           sx={{ width: {xs:200,sm:220}, display: "flex" ,objectFit:"contain"}}
            image={newsIcon}
            alt="image"
          />
          <CardContent >
          <Typography sx={{}} fontWeight="md">Stay tuned on based on latest news & photo <br/>
           on fraud alerts, servce interruption and <br/> overall paymentindustry coverage.</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      </Sheet>
      <Sheet
        variant="outlined"
        sx={{
          display: {xs:"block",sm:"flex"},
          gap: 9,
          p: 1,
          width: "400",
          borderRadius: 'sm',
          padding:"1px"
        }}
      >
    
        <Card 
        sx={{ display: 'flex',  maxWidth: {xs:345,sm:"xl"},
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
      }} 
        elevation={0}
        >
        <CardMedia
            component="img"
           height={50}
           sx={{ width: {xs:240,sm:100},height:100, display: "flex" ,objectFit:"cover"}}
            image={servicesIcon}
            alt="image"
          />
          <Grid container alignContent={'center'} xs={12}>
         <Grid container item xs={12}   pt={1} margin={2} justifyContent={'center'} > 
           <Button style={{textTransform: 'none'}}>
       <Card
           row
          elevation={0}
           sx={{
             // maxWidth: 100,
             // width:{xs:60,sm:100,md:110,lg:110},
             // height:{xs:100,sm:100,md:120,lg:120},
             width:{xs:90,sm:110},
             height:{xs:110,sm:130},
             // borderRadius:5,
             margin:{xs:"0 auto 0px",sm:"0 0 0px"},
             padding: {xs:"0.8em",sm:"1.8em"},
         }}
         >
           <CardMedia
              image={ticket}
              alt="alt"
              title="Ticket"
              sx={{ 
                padding: "0em 0em  0em", 
                objectFit: "contain",
                width:{xs:40,sm:50},
               height:{xs:40,sm:50}}}
            />
            <Typography     fontWeight="md" fontSize={14} textAlign={"center"}  >
              Ticket
              </Typography>
           </Card>
           </Button>
           <Button style={{textTransform: 'none'}}>
       <Card
           row
          elevation={0}
           sx={{
             // maxWidth: 100,
             // width:{xs:60,sm:100,md:110,lg:110},
             // height:{xs:100,sm:100,md:120,lg:120},
             width:{xs:90,sm:110},
             height:{xs:110,sm:130},
             // borderRadius:5,
             margin:{xs:"0 auto 0px",sm:"0 0 0px"},
             padding: {xs:"0.8em",sm:"1.8em"},
         }}
         >
           <CardMedia
              image={message}
              alt="alt"
              title="Ticket"
              sx={{ 
                padding: "0em 0em  0em", 
                objectFit: "contain",
                width:{xs:40,sm:50},
               height:{xs:40,sm:50}}}
            />
            <Typography     fontWeight="md" fontSize={14} textAlign={"center"}  >
            Message
              </Typography>
           </Card>
           </Button>
           <Button style={{textTransform: 'none'}}>
       <Card
           row
          elevation={0}
           sx={{
             // maxWidth: 100,
             // width:{xs:60,sm:100,md:110,lg:110},
             // height:{xs:100,sm:100,md:120,lg:120},
             width:{xs:90,sm:110},
             height:{xs:110,sm:130},
             // borderRadius:5,
             margin:{xs:"0 auto 0px",sm:"0 0 0px"},
             padding: {xs:"0.8em",sm:"1.8em"},
         }}
         >
           <CardMedia
              image={faq}
              alt="alt"
              title="Ticket"
              sx={{ 
                padding: "0em 0em  0em", 
                objectFit: "contain",
                width:{xs:40,sm:50},
               height:{xs:40,sm:50}}}
            />
            <Typography     fontWeight="md" fontSize={14} textAlign={"center"}  >
              FAQ
              </Typography>
           </Card>
           </Button>
   
         </Grid>
       </Grid>
        </Card>
      </Sheet>
    </Box>

  <Footer/>
        </Box>
  )
}

export default Index