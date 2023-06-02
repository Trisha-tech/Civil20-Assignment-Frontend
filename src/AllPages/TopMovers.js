import React from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

export default function TopMovers() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]    
    };
    return (
        <Box>
            <Typography variant="h3" style={{margin:"60px",fontWeight:700}}>Top Movers</Typography>
        <Slider {...settings} style={{margin:"2%"}}>
            <div>
                <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                    <CardContent><br/>
                        <Typography gutterBottom variant="h4" component="div" >
                            Rishabh Pant
                        </Typography><br/>
                        <Typography variant="h5" color="text.secondary">
                           | IND
                        </Typography><br/><br/>
                        <Typography variant="h5"  style={{fontWeight:500}}>
                           43.04 <span style={{color:"green"}}>(+72.64%)</span>
                        </Typography>
                    </CardContent>
                   
                </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                  <CardContent><br/>
                      <Typography gutterBottom variant="h4" component="div" >
                          Rishabh Pant
                      </Typography><br/>
                      <Typography variant="h5" color="text.secondary">
                         | IND
                      </Typography><br/><br/>
                      <Typography variant="h5"  style={{fontWeight:500}}>
                         43.04 <span style={{color:"green"}}>(+72.64%)</span>
                      </Typography>
                  </CardContent>
                 
              </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                  <CardContent><br/>
                      <Typography gutterBottom variant="h4" component="div" >
                          Rishabh Pant
                      </Typography><br/>
                      <Typography variant="h5" color="text.secondary">
                         | IND
                      </Typography><br/><br/>
                      <Typography variant="h5"  style={{fontWeight:500}}>
                         43.04 <span style={{color:"green"}}>(+72.64%)</span>
                      </Typography>
                  </CardContent>
                 
              </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                  <CardContent><br/>
                      <Typography gutterBottom variant="h4" component="div" >
                          Rishabh Pant
                      </Typography><br/>
                      <Typography variant="h5" color="text.secondary">
                         | IND
                      </Typography><br/><br/>
                      <Typography variant="h5"  style={{fontWeight:500}}>
                         43.04 <span style={{color:"green"}}>(+72.64%)</span>
                      </Typography>
                  </CardContent>
                 
              </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                  <CardContent><br/>
                      <Typography gutterBottom variant="h4" component="div" >
                          Rishabh Pant
                      </Typography><br/>
                      <Typography variant="h5" color="text.secondary">
                         | IND
                      </Typography><br/><br/>
                      <Typography variant="h5"  style={{fontWeight:500}}>
                         43.04 <span style={{color:"green"}}>(+72.64%)</span>
                      </Typography>
                  </CardContent>
                 
              </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 375,marginRight:2 }}>
                  
                  <CardContent><br/>
                      <Typography gutterBottom variant="h4" component="div" >
                          Rishabh Pant
                      </Typography><br/>
                      <Typography variant="h5" color="text.secondary">
                         | IND
                      </Typography><br/><br/>
                      <Typography variant="h5"  style={{fontWeight:500}}>
                         43.04 <span style={{color:"green"}}>(+72.64%)</span>
                      </Typography>
                  </CardContent>
                 
              </Card>
            </div>
        </Slider>
        </Box>
    );
}
