// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstname: '', lastname: '', para: false, para1: false, go: true}

  First = event => {
    this.setState({firstname: event.target.value})
  }

  Second = event => {
    this.setState({lastname: event.target.value})
  }

  AnotherForm = () => {
    this.setState({
      go: true,
      para: false,
      para1: false,
      firstname: '',
      lastname: '',
    })
  }

  change1 = event => {
    this.setState({para: !event.target.value})
  }

  change2 = event => {
    this.setState({para1: !event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname === '' && lastname !== '') {
      this.setState({para: true})
    } else if (firstname !== '' && lastname === '') {
      this.setState({para1: true})
    } else if (firstname === '' && lastname === '') {
      this.setState({para: true, para1: true})
    } else {
      this.setState({go: false})
    }
  }

  render() {
    const {para, para1, go} = this.state
    return (
      <div className="cen">
        <h1 className="h">Registration</h1>
        <div className="form">
          {go ? (
            <form onSubmit={this.submitForm}>
              <div className="hlo">
                <label htmlFor="name" className="nn">
                  FIRST NAME
                </label>
                <input
                  onBlur={this.change1}
                  onChange={this.First}
                  id="name"
                  type="text"
                  className="nameInp"
                  placeholder="First Name"
                />
                {para && <p className="p">*Required</p>}
              </div>
              <div className="hlo">
                <label htmlFor="LastName">LAST NAME</label>
                <input
                  onBlur={this.change2}
                  id="LastName"
                  onChange={this.Second}
                  type="text"
                  className="nameInp"
                  placeholder="Last Name"
                />
                {para1 && <p className="p">*Required</p>}
              </div>
              <button className="but" type="submit">
                Submit
              </button>
            </form>
          ) : (
            <div className="mid">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="logo"
              />
              <p className="hh">Submitted Successfully</p>
              <button type="button" className="but" onClick={this.AnotherForm}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
