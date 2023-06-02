import React from 'react';
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function BannerCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings} style={{ margin: "2%" }}>
      <div >
        <Card sx={{ margin: "4%", backgroundImage: `linear-gradient(90deg, #A50383, #440336)`, borderRadius: "35px" }}>
          <CardContent><br />
            <Typography gutterBottom variant="h4" component="div" style={{ color: "white", paddingLeft: "50px", fontWeight: 700, fontSize: "57px" }}>
              Win BIG with Fantasy Stocks
            </Typography><br /><br />
            <Box style={{ display: "flex" }}>
              <Box style={{ width: "80%", paddingLeft: "50px" }}>
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" />&nbsp;&nbsp; <span>Analyze and buy players</span>
                </Typography><br />
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" />&nbsp;&nbsp; <span> Build a portfolio of 4 players</span>
                </Typography><br />
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" /> &nbsp;&nbsp;<span>Sell high and cash in!</span>
                </Typography><br />
              </Box>
              <Box style={{ float: "right" }}>
                <img width="198" height="198" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-coin-bag-cryptocurrency-sbts2018-flat-sbts2018.png" alt="external-coin-bag-cryptocurrency-sbts2018-flat-sbts2018" />
              </Box>
            </Box>
            <br />
          </CardContent>
        </Card>
      </div>
      <div >
        <Card sx={{ margin: "4%", backgroundImage: `linear-gradient(90deg, #A50383, #440336)`, borderRadius: "35px" }}>
          <CardContent><br />
            <Typography gutterBottom variant="h4" component="div" style={{ color: "white", paddingLeft: "50px", fontWeight: 700, fontSize: "57px" }}>
              Win BIG with Fantasy Stocks
            </Typography><br /><br />
            <Box style={{ display: "flex" }}>
              <Box style={{ width: "80%", paddingLeft: "50px" }}>
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" />&nbsp;&nbsp; <span>Analyze and buy players</span>
                </Typography><br />
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" />&nbsp;&nbsp; <span> Build a portfolio of 4 players</span>
                </Typography><br />
                <Typography gutterBottom variant="h4" component="div" style={{ color: "white", display: "flex" }}>
                  <img width="38" height="38" src="https://img.icons8.com/fluency/48/cheap-2.png" alt="cheap-2" /> &nbsp;&nbsp;<span>Sell high and cash in!</span>
                </Typography><br />
              </Box>
              <Box style={{ float: "right" }}>
                <img width="178" height="178" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-coin-bag-cryptocurrency-sbts2018-flat-sbts2018.png" alt="external-coin-bag-cryptocurrency-sbts2018-flat-sbts2018" />
              </Box>
            </Box>
            <br />
          </CardContent>
        </Card>
      </div>
    </Slider>
  );
}

export default BannerCarousel;
