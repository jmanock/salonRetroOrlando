import React,{Component} from 'react';
import DatePicker from 'react-date-picker';

class Book extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:null,
      email:null,
      phoneNumber:null,
      date:new Date(),
      time:null
    }
  }
  onDateChange = date =>{
    this.setState({
      date
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    const data = this.state;
    console.log(data);
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyYc6U2BcmWssKCfAH6emQovnWTrfUIpn8o1a9mGrZ5XAPAav4/exec';
    // fetch(scriptURL, {method:'POST', data})
    // .then(response => console.log('Success!', response))
    // .catch(error => console.log('Error', error.message))
  }
  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
  render(){
    return(
      <div>
        <h1>Book</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='col-md-10'>
            <div className='form-group'>
              <input className='form-control' name='name' type='text' placeholder='Name' autoComplete='off' required onChange={this.handleInputChange}></input>
            </div>
            <div className='form-group'>
              <input className='form-control' name='email' type='email' placeholder='Email' autoComplete='off' required onChange={this.handleInputChange}></input>
            </div>
            <div className='form-group'>
              <input type='number' placeholder='Phone Number' name='phoneNumber' className='form-control' required onChange={this.handleInputChange}></input>
            </div>
            <div className='form-group'>
              <DatePicker onChange={this.onDateChange} value={this.state.date} required className='form-control'></DatePicker>
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
                  <option vlaue='2:30pm'>2:30pm</option>
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
              <button className='form-control' type='submit'>Book</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
// const Book = () =>{
//   return(
//     <div id='Book' style={{marginTop:130}}>
//       <h3>Book</h3>
//       <form name='submit-to-google-sheet'className='container'>
//         <div className='col-md-11'>
//           <div className='form-group'>
//             <input className='form-control' name='name' type='text' placeholder='Name' autoComplete='off' required></input>
//           </div>
//           <div className='form-group'>
//             <input type='number' name='phoneNumber' placeholder='Phone Number' className='form-control'></input>
//           </div>
//           <div className='form-group'>
//             <input type='text' name='date' className='form-control' required placeholder='Date' id='datepicker'></input>
//           </div>
//           <div className='form-group'>
//             <select name='time' className='form-control' required>
//               <option value='selected'>Please Choose a Time</option>
//               <option value='10:00am'>10:00am</option>
//               <option value='10:30am'>10:30am</option>
//               <option value='11:00am'>11:00am</option>
//               <option value='11:30am'>11:30am</option>
//               <option value='12:00pm'>12:00pm</option>
//               <option value='12:30pm'>12:30pm</option>
//               <option value='1:00pm'>1:00pm</option>
//               <option value='1:30pm'>1:30pm</option>
//               <option value='2:00pm'>2:00pm</option>
//               <option vlaue='2:30pm'>2:30pm</option>
//               <option value='3:00pm'>3:00pm</option>
//               <option value='3:30pm'>3:30pm</option>
//               <option value='4:00pm'>4:00pm</option>
//               <option value='4:30pm'>4:30pm</option>
//               <option value='5:00pm'>5:00pm</option>
//               <option value='5:30pm'>5:30pm</option>
//               <option value='6:00pm'>6:00pm</option>
//             </select>
//           </div>
//           <div className='form-group'>
//             <button type='submit' className='form-control'>Book</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

export default Book;
