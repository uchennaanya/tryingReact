import React from 'react'

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: null,
      age: null,
      phone: null,
      address: null
    }
}

  handleOnChange = (event) => {

    let user = event.target.name
    let ag = event.target.name
    let addr = event.target.name
    let phon = event.target.value


    this.setState({[user]: phon, addr, ag})
  }
    render() {
      let display = ''
      if (this.state.username) {
          display = <h3> Hello {this.state.username}, Age: {this.state.age}, Phone Number: {this.state.phone}, Address: {this.state.address},   </h3>
      } else {
        display = ''
      }
    return (
      <form>
      {display}
        <div>
          <label >Names:</label>
          <input name="username" type="text" placeholder="Your Name" required id="name" onChange= {this.handleOnChange} />
        </div>
        <div>
          <label >Age </label>
          <input name="age" id="age" type="number" placeholder="Your Age" required onChange= {this.handleOnChange} />
        </div>
        <div>
          <label >Phone </label>
          <input name="phone" id="phone" type="tel" placeholder="Your Phone" required onChange= {this.handleOnChange} />
        </div>
        <div>
          <label>Address </label>
          <input name="address" type="text" placeholder="Your Address" required onChange= {this.handleOnChange} />
        </div>
        <label></label>
        <button name="submit" type="submit">Send</button>
      </form>
    )
  }
}

export default Forms
