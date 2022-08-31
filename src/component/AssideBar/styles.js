import Img from '../../assets/fundo-folha.jpg';

const useTimeLineStyle = {
    width: 256,
    height: 72,
    backgroundImage: `url(${Img})`,
    borderRadius: '5px 5px 0px 0px',
  
  Typography: {
    fontSize:'1rem',
    fontWeight:'44rem',
    marginTop:'1rem',
    LineHeight: '22rem',
  },
  p: {
    fontSize: 14,
    fontWeight: 400,
    LineHeight: 22,
    color:'#8D8D99',
  },
  section: {
    width:256,
    height:0,
    border:'1px solid #323238',
    marginTop: 24,
  },
  button: {
    width: 192,
    height: 50,
    backgroundColor:'transparent',
    marginTop: 24,
    border:'2px solid #00B37E',
    borderRadius: 8,
    color:'#00B37E',

    '&:hover': {
      backgroundColor: '#00875F',// não está funcionando o hover
      color:'white',
    },
  },
  image: {
    boxSizing:'initial',
    width: 55,
    height: 55,
    border:'4px solid  #202024',
    marginTop: -30,
    backgroundColor:'white',
    borderRadius: 5,
    outline:'2px solid #00B37E',
  },
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#202024',
    borderRadius: 8,
    width:256,
    height:294,
    borderRadius: 8,

    '& img': {
      boxSizing:'initial',
      width: 55,
      height: 55,
      border:'4px solid var(--gray-800)',
      marginTop: -30,
      backgroundColor:'white',
      borderRadius: 5,
    }
  },
}


export default {
useTimeLineStyle,
};