import React from 'react'
import Container from '@material-ui/core/Container'
import { Paper, Typography ,TextField, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme => ({
    
    paper : {
        marginTop: theme.spacing(4),
        padding: theme.spacing(1,2,4),
        
      },
    
}))
export default function ForgotPass() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm" >
                <Paper elevation={3} className={classes.paper } >
                        <Grid container spacing={2} >
                            <Grid item xs={12}>
                                <Typography variant="h6" component="h2" align="center">
                                    Forgot Your Password?
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                 <form >
                
                                    <TextField fullWidth="true"
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        color="primary"
                                    />
                                </form>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                </Paper>
            </Container>
        </div>
    )
}