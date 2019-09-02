import React,{Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Book extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:null,
      // email:null,
      // phoneNumber:null,
      // selectedDay:undefined,
      // isEmpty:true,
      // isDisabled:false,
      // time:null
      nameValue:'appointmentdate'
    }
  }
  handleDayChange = (selectedDay, modifiers, dayPickerInput) =>{
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled:modifiers.disabled === true,
    })
  }
  onDateChange = date =>{
    this.setState({
      date
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ddL3nb5VS0v_TMXTmGTELPdWHkG-yVWTG5YdcKhBByCk9-0/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {method:'POST', body:new FormData(form)})
        .then(response => console.log('Success!!!',response))
        .catch(error => console.log('Error!!!!',error.message));
    })

  }
  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
  render(){
    const { selectedDay} = this.state;
    return(
      <div>
        <h1>Book</h1>
        <form onSubmit={this.handleSubmit} name='submit-to-google-sheet'>
          <div className='col-md-10'>
            <div className='form-group'>
              <input className='form-control' name='name' type='text' placeholder='Name' required onChange={this.handleInputChange}/>
            </div>
            <div className='form-group'>
              <input className='form-control' name='email' type='email' placeholder='Email' required onChange={this.handleInputChange} />
            </div>
            <div className='form-group'>
              <input className='form-control' name='phonenumber' type='number' placeholder='Phone Number' required onChange={this.handleInputChange} />
            </div>
            <div className='form-group'>
              <input type='date' className='form-control' name='appointmentday' required></input>
            </div>
            <div className='form-group'>
              <select name='time' className='form-control' required onChange={this.handleInputChange}>
                <option value='selected'>Please Choose a Time</option>
                <option value='10:00am'>10:00am</option>
                <option value='10:30am'>10:30am</option>
                <option value='11:00am'>11:00am</option>
                <option value='11:30am'>11:30am</option>
                <option value='12:00pm'>12:00pm</option>
                <option value='12:30pm'>12:30pm</option>
                <option value='1:00pm'>1:00pm</option>
                <option value='1:30pm'>1:30pm</option>
                <option value='2:00pm'>2:00pm</option>
                <option value='2:30pm'>2:30pm</option>
                <option value='3:00pm'>3:00pm</option>
                <option value='3:30pm'>3:30pm</option>
                <option value='4:00pm'>4:00pm</option>
                <option value='4:30pm'>4:30pm</option>
                <option value='5:00pm'>5:00pm</option>
                <option value='5:30pm'>5:30pm</option>
                <option value='6:00pm'>6:00pm</option>
              </select>
            </div>
            <div className='form-group'>
              <button type='submit' className='form-control'>Book</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

//     <div className='form-group'>
//       <select name='time' className='form-control' required onChange={this.handleInputChange}>
//         <option value='selected'>Please Choose a Time</option>
//           <option value='10:00am'>10:00am</option>
//           <option value='10:30am'>10:30am</option>
//           <option value='11:00am'>11:00am</option>
//           <option value='11:30am'>11:30am</option>
//           <option value='12:00pm'>12:00pm</option>
//           <option value='12:30pm'>12:30pm</option>
//           <option value='1:00pm'>1:00pm</option>
//           <option value='1:30pm'>1:30pm</option>
//           <option value='2:00pm'>2:00pm</option>
//           <option vlaue='2:30pm'>2:30pm</option>
//           <option value='3:00pm'>3:00pm</option>
//           <option value='3:30pm'>3:30pm</option>
//           <option value='4:00pm'>4:00pm</option>
//           <option value='4:30pm'>4:30pm</option>
//           <option value='5:00pm'>5:00pm</option>
//           <option value='5:30pm'>5:30pm</option>
//           <option value='6:00pm'>6:00pm</option>
//       </select>
//     </div>
//     <div className='form-group'>
//       <button className='form-control' type='submit'>Book</button>
//     </div>
//   </div>
// </form>
export default Book;
