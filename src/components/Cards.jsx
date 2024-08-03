import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Container } from '@mui/material';
import userImg from './../assets/icons/user.png';


const Cards = () => {

    return (
        <Container>
            <Card sx={{
                maxWidth: 345,
                p: '16px',
                border: '1px solid rgba(0, 16, 102, 0.1)',
                borderRadius: '1rem',
                boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.04),0px 2px 4px -2px rgba(0, 0, 0, 0.08)',
                marginTop: '30px',
            }}>
                <CardContent>
                    <Typography component="div"
                        sx={{
                            backgroundColor: 'rgba(89, 117, 255, 0.05)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: '12px',

                        }}>

                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={userImg}
                            alt="Live from space album cover"
                        />
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div" color="primary"
                        sx={{
                            fontSize: '20px',
                            fontWeight: '800',
                            lineHeight: '28px',
                            pt: '16px',
                        }}>
                        Teams
                    </Typography>
                    <Typography variant="body2" color="secondary" sx={{
                        fontSize: '1rem',
                        fontWeight: '400',
                        lineHeight: '24px',
                    }}>
                        Manage access permissions for users across teams
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Cards;