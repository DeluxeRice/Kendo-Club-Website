import React from 'react';
import './Email.css'



const Email = () => {
	const [first, setFirst] = React.useState('');
	const [last, setLast] = React.useState('');
	const [email, setEmail] = React.useState('');
	/*
	const handleSubmit = (event) => {
		event.preventDefault();
	}
	*/
	return (
	<div className='kendo__email-container section__padding-email' id='email'>
		<h1 className='kendo__email-container-pretext'>Interested?</h1>
		<form rel='noopener' action='https://gmail.us5.list-manage.com/subscribe/post' method='POST' className='kendo__email'>
			<input type="hidden" name="u" value="6c527e28ed6552cd9393b399b"/>
    		<input type="hidden" name="id" value="2ec1799e8d"/>
			<h2 className='kendo__email-title'>Join our Newsletter!</h2>
			
			<label className='kendo__email-field'>
				First Name:
			</label>
				<input name='MERGE1'
				id='MERGE1' 
				type='text' 
				value={first} 
				onChange={event => setFirst(event.target.value)} 
				required/>
			<label className='kendo__email-field'>
				Last Name:
			</label>
				<input name='MERGE2'
				id='MERGE2' 
				type='text' 
				value={last} 
				onChange={event => setLast(event.target.value)} 
				required/>
			<label className='kendo__email-field'>
				Email:
			</label>
				<input name='MERGE0' 
				id='MERGE0'
				type='email' 
				value={email} 
				onChange={event => setEmail(event.target.value)} 
				required/>
			<button type='submit' value="Subscribe"  className='kendo__email-submit'>Submit</button>
		</form>
		<h1 className='kendo__email-container-endtext'>Or contact us via one of the methods below!</h1>
	</div>
	)
}	
export default Email;