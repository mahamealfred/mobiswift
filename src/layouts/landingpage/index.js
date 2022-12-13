import * as React from 'react';
import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import Header from "../../components/header";
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardContent, CardMedia, CssBaseline, Grid } from '@mui/material';
import newsIcon from "../../assets/images/newsicon.png"
// 
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import {data} from "./data";
const Index = () => {
  const [flexBasis, setFlexBasis] = React.useState(200);
  return (
    <>
        <Appbar/>
        <Header/>
        <Grid container alignContent={'center'} xs={12}>
          <CssBaseline/>
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
      width:{xs:80,sm:100},
      height:{xs:110,sm:120},
      // borderRadius:5,
      margin:{xs:"0 auto 5px",sm:"0 0 5px"},
      padding: {xs:"0.9em",sm:"1.5em"},
  }}
  >
    <CardMedia
       image={item.src}
       alt="alt"
       title={item.title}
       sx={{ 
         padding: "0em 1em 0 0em", 
         objectFit: "contain",
        height:{xs:50,sm:50}}}
     />
     <Typography  fontWeight="md" textAlign={"center"}  >
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
          padding:2
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
            image={newsIcon}
            alt="image"
          />
          <CardContent >
          <Typography sx={{}} fontWeight="md">RRA,RSSB,EJOHEZA,RNIT,AIRTIME,ELECTRICITY,etc...</Typography>
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
          padding:2
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
            image={newsIcon}
            alt="image"
          />
          <CardContent >
          <Typography fontWeight="md">Are you ready to jump on the wagon and join the Fintech revolution?</Typography>
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
          padding:2
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
            image={newsIcon}
            alt="image"
          />
          <CardContent >
          <Typography sx={{}} fontWeight="md">Stay tuned on based on latest news & photo on fraud alerts, servce interruption and overall paymentindustry coverage.</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      </Sheet>
    </Box>

  <Footer/>
        </>
  )
}

export default Index