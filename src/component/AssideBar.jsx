import styles from './assideBar.module.css';



export function AssideBar() {
  return ( 

  <aside className={styles.asside}>
    <div className='timeline'></div>
    <img  src='https://avatars.githubusercontent.com/u/72947608?v=4'/>
    <h1>Marlon Santana</h1>
    <p>Desenvolvedor</p>
    <section></section>
    <button>
      Editar perfil
      </button>
  
  </aside>

  );
  
}
