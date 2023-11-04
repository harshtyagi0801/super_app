import React, { useState } from 'react';
import formstyle from './sign.module.css';
import { useNavigate } from 'react-router-dom';


function SignUpform() {
    const [name, setname] = useState('');
    const [uName, setUname] = useState('');
    const [mail, setMail] = useState('');
    const [num, setNum] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');

    const alpha = (e) => {
        const inputText = e.target.value;

        let letters = /^[a-zA-Z ]+$/;
        if (inputText.match(letters) || inputText === '') {
            setname(inputText);
        } else {
            return false;
        }
    }

    const numm = (e) => {
        let inputvalue = e.target.value;
        let num = /^[0-9]*$/;
        if (inputvalue.match(num) || inputvalue === '') {
            setNum(inputvalue);
        }
    }

    const navigate = useNavigate();

    const validationform = () => {
        let isError = false;

        if (uName.length === 0) {
            setError1('Field is required');
            isError = true;
        } else {
            setError1('');
        }

        if (name.length === 0) {
            setError('Field is required');
            isError = true;
        } else {
            setError('');
        }

        if (mail.length === 0) {
            setError2('Field is required');
            isError = true;
        } else {
            setError2('');
        }

        if (num.length === 0) {
            setError3('Field is required');
            isError = true;
        } else {
            setError3('');
        }

        if (!isCheckboxChecked) {
            setError4('Check this box if you want to proceed');
            isError = true;
        } else {
            setError4('');
        }

        if (isError) {
            document.querySelectorAll('input').forEach((input) => {
                input.style.border = '2px solid red';
            });
        } else {
            document.querySelectorAll('input').forEach((input) => {
                input.style.border = 'none';
            });
        }

        return isError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationform()) {
            return;
        }

        const userData = {
            name,
            uName,
            mail,
            num,
            isCheckboxChecked,
        };

        window.localStorage.setItem('userData', JSON.stringify(userData));
        console.log(userData);
        navigate('/Genre');
    };

    return (
        
            <div className={formstyle.container}>
                <h1>Super app</h1>
                <h5 style={{ color: "white", marginTop: '10px', fontSize: '20px', fontFamily: 'sans-serif' }}>Create your new account</h5>
                <form onSubmit={handleSubmit} className={formstyle.fom}>
                    <input
                        type='text'
                        value={name}
                        onChange={alpha}
                        placeholder='Name'
                    /><br />
                    <p style={{ color: 'red', marginBottom: '4px', marginRight: '47%',fontSize:'15px' }}>{error}</p>
                    <input
                        type='text'
                        value={uName}
                        onChange={(e) => setUname(e.target.value)}
                        placeholder='UserName'
                    /><br />
                    <p style={{ color: 'red', marginBottom: '4px', marginRight: '47%',fontSize:'15px' }}>{error1}</p>
                    <input
                        type='email'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder='Email'
                    /><br />
                    <p style={{ color: 'red', marginBottom: '4px', marginRight: '47%',fontSize:'15px' }}>{error2}</p>
                    <input
                        type='text'
                        value={num}
                        maxLength={10}
                        onChange={numm}
                        placeholder='Mobile'
                    /><br />
                    <p style={{ color: 'red', marginBottom: '4px', marginRight: '47%',fontSize:'15px' }}>{error3}</p>
                    <div className={formstyle.check}>
                        <input
                            checked={isCheckboxChecked}
                            onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                            type='checkbox'
                        />
                        <p>Share my registration data with Superapp</p><br />
                    </div>
                    <p style={{ color: 'red', marginBottom: '4px', marginRight: '24%',fontSize:'15px' }}>{error4}</p>
                    <button>SIGN UP</button>
                </form>
                <p className={formstyle.terms}>
                    By clicking on Sign up, you agree to Superapp
                    <span> Terms and Conditions of Use</span>
                </p>
                <p className={formstyle.term}>
                    To learn more about how Superapp collects, uses, shares, and protects your personal data, please read Superapp's
                    <span> Privacy Policy</span>
                </p>
            </div>
      
    );
}

export default SignUpform;
