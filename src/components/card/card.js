import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.scss';
import Matt from '../../assets/matt.jpg';
import John from '../../assets/john.jpg';
import Marv from '../../assets/marv.jpg';

function GroupExample() {
  return (
    <CardGroup id="who">
      <div className='whoHeader'>
        <h1>Who is FREAKY SOCIAL?</h1>
        <div className='flexHolder'>
          <p>Freaky Social is a DJ collective from South Manchester founded by good friends Marvin Jay and Matt Hassall who met while presenting shows on local radio. Other members of Freaky Social include good friend John Crompton.</p>
          <p>Marv, Matt and John have been DJing for 30+ years and have played both locally in Manchester at various clubs (most notably The Hacienda, Sankeys Soap, The Music Box, Joshua Brooks, Prague V, Berlin, Manto's and Club CODE amongst others) as well as playing gigs across the UK and Internationally</p>
          <p>Beginning in the early 90's, they all cut their teeth playing mainly house and garage sets although now you can hear them dropping everything from Balearic, Downtempo, Electronica to Disco, Soul, Indie Dance, Acid House and all manner of cosmic wonky weirdness at their monthly Freaky Social pub raves.</p>
        </div>
      </div>
      <Card>
        <div className='dj_image_holder'>
          <img src={Matt} className="dj_image" alt="Matt Hassall" />
        </div>
        <Card.Body>
          <Card.Title>Matt Hassall</Card.Title>
          <Card.Text>
            Blah blah blah
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <div className='dj_image_holder'>
          <img src={John} className="dj_image" alt="John Crompton" />
        </div>
        <Card.Body>
          <Card.Title>John Crompton</Card.Title>
          <Card.Text>
            blah blah blah
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <div className='dj_image_holder'>
          <img src={Marv} className="dj_image" alt="Marvin Jay" />
        </div>
        <Card.Body>
          <Card.Title>Marvin Jay</Card.Title>
          <Card.Text>
          blah blah blah
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;