import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Cards = () => {

    return (
        <Container>
            <Card sx={{ maxWidth: 345, padding: '20px', border: '1px solid rgba(0, 16, 102, 0.1)', borderRadius: '1rem', boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.04),0px 2px 4px -2px rgba(0, 0, 0, 0.08)', marginTop: '30px' }}>
                <CardActionArea>
                    <CardContent>


                        <Typography component="div"
                            sx={{backgroundColor: '#EBF4FE',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}>
                            <PeopleOutlineIcon sx={{
                                color: '#6D80DF',
                                fontSize: '35px',

                            }} />
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div" sx={{ paddingTop: '20px', fontWeight: '600' }}>
                            Teams
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                            Manage access permissions for users across teams
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export default Cards;