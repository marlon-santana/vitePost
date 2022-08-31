import { Button, Grid,Typography } from '@material-ui/core';
import Styles from './styles';






export function AssideBar() {
  const timeLineStyle = Styles.useTimeLineStyle;
  return ( 

  <Grid  style={timeLineStyle.container}>
    <Grid style={timeLineStyle}></Grid>
      <img style={timeLineStyle.image} src='https://avatars.githubusercontent.com/u/72947608?v=4'/>
    <Typography style={timeLineStyle.Typography}>Marlon Santana</Typography>
    <Typography style={timeLineStyle.p}>Desenvolvedor</Typography>
    <section style={timeLineStyle.section}></section>
    <Button style={timeLineStyle.button}>
      Editar perfil
      </Button>
  </Grid>

  );
  
}
