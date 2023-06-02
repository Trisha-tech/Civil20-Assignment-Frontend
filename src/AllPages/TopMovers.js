import React, { useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

const TopMovers = () => {
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

    const [players, setPlayers] = useState([]);

    const fetchData = () => {
        axios
            .get("https://civil20-backend.onrender.com/players/all-players")
            .then(response => {
                setPlayers(response.data.players);
                console.log(response.data.players);
            })
            .catch(error => {
                console.log({ error });
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Box>
            <Typography variant="h3" style={{ margin: "60px", fontWeight: 700 }}>Top Movers</Typography>

            <Slider {...settings} style={{ margin: "2%" }}>
                {players.map(player => (
                    <div key={player.id}>
                        <Card sx={{ maxWidth: 375, marginRight: 2 }}>

                            <CardContent><br />
                                <Typography gutterBottom variant="h4" component="div" >
                                    {player.name}
                                </Typography><br />
                                <Typography variant="h5" color="text.secondary">
                                    | {player.country}
                                </Typography><br /><br />
                                <Typography variant="h5" style={{ fontWeight: 500 }}>
                                    {player.score} <span style={{ color: "green" }}>({player.percentage})</span>
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                ))}
            </Slider>

        </Box>
    );
}

export default TopMovers;