import React from 'react'
import ReactDOM from 'react-dom'

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state={userName: '', address: ''}
}
handleOnChangeName = (event) => {
  this.setState({userName: event.target.value})
}
handleOnChangeAddress = (event) => {
  this.setState({address: event.target.value})
}
  render() {
    let name = ''
    let address = ''

    if (this.state.userName ) {
      name = <h1>
      Your {this.state.userName}
      </h1>
    }else {
      name = ''
    }
      if (this.state.address) {
      address = <h2>
        you live at no. {this.state.address}
      </h2>
    } else {
      address =''
    }
    return (
      <form>
        {name}
        {address}
        <div>
          <label for="name">Names:</label>
          <input name="name" type="text" placeholder="Your Name" required id="name" onChange= {this.handleOnChangeName} />
        </div>
        <div>
          <label for="age">Age </label>
          <input name="age" id="age" type="number" placeholder="Your Age" required />
        </div>
        <div>
          <label for="phone">Phone </label>
          <input name="phone" id="phone" type="tel" placeholder="Your Phone" required />
        </div>
        <div>
          <label for="address">Address </label>
          <input name="address" type="text" placeholder="Your Address" required onChange= {this.handleOnChangeAddress} />
        </div>
        <label></label>
        <input name="submit" type="submit" value="Send Form" />
      </form>
    )
  }
}

export default Forms
