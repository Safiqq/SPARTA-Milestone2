//import logo from './logo.svg';
import './styles.css';
import './background.css';

function App() {
  return (
    <div className="App">
      <header>
            <div class="background">
                <div class="circle1"></div>  
                <div class="circle2"></div>  
                <div class="circle3"></div>  
                <div class="circle4"></div> 
            </div>
            <div class="top">
                <div class="top_text">
                    <h1>Pagi, User!</h1>
                    <p>Mau ke mana hari ini?</p>
                </div>
                <div class="top_image">
                    <img class="user" src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt='user'/>
                </div>
            </div>
            <br />
            <div class="search">
                <input id="destInput" type="text" name="destInput" placeholder="Ketik destinasimu disini"/>
            </div>
        </header>

        <br />
        
        <article>
            <section id="weather" class="home_widgets">
                <p>
                    <img src="https://cdn-icons-png.flaticon.com/512/3781/3781624.png" alt="Weather Icon"/>
                    <strong id="temp_text">27&#8451;</strong>
                    <strong id="bandung_text">Bandung, Jawa Barat</strong>
                    <section id="line"></section>
                </p>
            </section>

            <section id="pedulilindungi" class="home_widgets">
                <img src="https://www.pedulilindungi.id/assets/logo-with-text.svg" alt="PeduliLindungi"/>
                <p>Terintegrasi dengan PeduliLindungi, kami berharap transportasi publik dapat terhindar dari paparan Covid19</p>
            </section>

        </article>

        <footer>
            <nav>
                <img class="left2" src="https://cdn-icons.flaticon.com/png/512/5249/premium/5249375.png?token=exp=1660456648~hmac=91d618064f8704e1b363b28844284627" alt="Settings"/>
                <img class="left1" src="https://cdn-icons-png.flaticon.com/512/189/189665.png" alt="Help"/>
                <img class="middle" src="https://cdn-icons.flaticon.com/png/512/4480/premium/4480405.png?token=exp=1660456745~hmac=62c88fc5cd2fbfcf795bab27a0077177" alt="Scan"/>
                <img class="right1" src="https://cdn-icons-png.flaticon.com/512/323/323372.png" alt="Language-ID"/>
                <img class="right2" src="https://cdn-icons-png.flaticon.com/512/323/323329.png" alt="Language-EN"/>
            </nav>
        </footer>
    </div>
  );
}

export default App;
