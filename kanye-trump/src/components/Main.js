import React from 'react'
import PropTypes from 'prop-types'
import homies from '../images/kanyetrump.jpg'
import Axios from 'axios';

class Main extends React.Component {
  state = {
    kanye: '',
    trump: '',
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://api.kanye.rest/`
      )
      const response2 = await Axios.get(
        `http://tronalddump.io/random/quote`
      )
      this.setState({
        kanye: response.data,
        trump: response2.data
      })
    } catch(error){
      console.log(error)
    }
  }




  // async componentDidUpdate() {
  //   this.setState({
  //     kanye: response.data,
  //     trump: response2.data
  //   })
  // }



  render() {
    const {kanye, trump, loading} = this.state
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="kanye"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <p className="major">Kanye Says:</p>
          <h2>"{kanye.quote}"</h2>
          {close}
        </article>

        <article
          id="trump"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <p className="major">Trump Tweets:</p>
          <h2>"{trump.value}"</h2>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">This is America</h2>
          <span className="image main">
            <img src={homies} alt="" />
          </span>
          <p>
          This has become the height of political discourse in this country. Think about that.
          <br />
          <br />
          Further reading:<br />
          <a href="https://pitchfork.com/thepitch/kanye-west-and-why-the-myth-of-genius-must-die/">Kanye West and Why the Myth of “Genius” Must Die</a>
          <br />
          <a href="https://www.cheatsheet.com/entertainment/trumps-worst-tweets-so-far.html/">20 of Trump's Worst Tweets (So Far)</a>
          </p>
          <p>Special thanks to the creators of:<br />
          <a href="https://kanye.rest/">Kanye Rest.API</a>
          <br />
          <a href="https://www.tronalddump.io/">Tronald Dump API</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4">Disclaimer: I have nothing to do with either Mr. West or President Trump.
              If you are a legal representative from either estate, or simply sending an angry email as is your right to do so under the First Amendment, please keep this in mind.</textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
