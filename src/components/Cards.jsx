import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Container } from '@mui/material';
import userImg from './../assets/icons/user.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        '&.css-bhp9pd-MuiPaper-root-MuiCard-root': {
            maxWidth: '345px',
            padding: theme.spacing(2),
            border: '1px solid rgba(0, 16, 102, 0.1)',
            borderRadius: '1rem',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.04),0px 2px 4px -2px rgba(0, 0, 0, 0.08)',
            marginTop: '30px',
        }
    },
    title: {
        '&.css-wculyb-MuiTypography-root': {
            fontSize: '20px',
            color: theme.palette.primary.main,
            fontWeight: '800',
            lineHeight: '28px',
            paddingTop: theme.spacing(2),
        },
    },

    description: {
        '&.css-bh6dz8-MuiTypography-root': {
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '24px',
        }
    },
    userIconContainer: {
        '&.css-1mwrwxm-MuiTypography-root': {
            backgroundColor: theme.palette.fillBrandWeak.main,
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px',
        }
    },
    userIcon: {
        '&.css-vf01qm-MuiCardMedia-root': {
            width: '50px'
        }
    }
}));


const Cards = () => {

    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.userIconContainer} component="div">

                        <CardMedia
                        className={classes.userIcon}
                            component="img"
                            image={userImg}
                            alt="Live from space album cover"
                        />
                    </Typography>
                    <Typography className={classes.title} gutterBottom variant="h3" component="div">
                        Teams
                    </Typography>
                    <Typography variant="body2" color="secondary" className={classes.description}>
                        Manage access permissions for users across teams
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Cards;