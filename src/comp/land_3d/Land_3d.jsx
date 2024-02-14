import Spline from '@splinetool/react-spline';
import '../../assets/bg.css'
import Resume_review from '../Resume_review/Resume_review';
import TimeLine from '../Timeline/Timeline';
import About from '../About/About';
import Fotter from '../Fotter/Fotter';

export default function Land_3d() {
  return (
    <div className='landingpage'>
      <div className='render_3d' id='home-top' >
      <div id='stars'></div>
      <Spline scene="https://prod.spline.design/sqefH0tO5t7porj6/scene.splinecode" />
    </div>
    <Resume_review />
      <TimeLine />
      <About />
      <Fotter />
    </div>
  );
}
