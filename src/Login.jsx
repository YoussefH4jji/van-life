import { loginUser}from './api'
import { useNavigate,useLocation } from 'react-router-dom';
import useState  from 'react'


export  default function Login(){
    const[loginFormData,setLoginFormData]=useState({email:"",password:""})
    const navigate = useNavigate();
    const location = useLocation();
    const [status,setStatus]=useState("idle")
    const [error,setError] = useState(null)
    
    function handleSubmit(e){
      e.preventDefault()
      setStatus("submitting")
      loginUser(loginFormData)
        .then(data=>{
          console.log(data)
          setError(null)
          navigate("/host",{replace:true})
        }).catch(err =>{
          setError(err)
        }).finally(()=>{
          setStatus("idle")
          
        })
      
      // console.log(loginUser)
    }
    function handleChange(e){
      const {name,value}= e.target
      setLoginFormData(prev =>({
        ...prev,
        [name]:value
      }))
    }
  
    return(
      <div className='login-container'>
        {location.state?.message&& <h3>{location.state.message}</h3>}
        <h1 className='login-txt'>Sign in to your account</h1>
        {error?.message&&<h3 className='user-error'>{error.message}</h3>}
  
        <form onSubmit={handleSubmit} className='login-form'>
          <input 
          name='email'
          type='email' 
          placeholder='Enter your email...'
          onChange={handleChange}
          value={loginFormData.email}
          className='email'
          />
          <input 
          name='password'
          type='password'
          placeholder='Enter your password'
          onChange={handleChange}
          value={loginFormData.password}
          className='pswrd'
          />
          <button className='login-btn'disabled={status==="submitting"} >{status==="submitting"?"Login in ...":"Login"}</button>
        </form>
      </div>
    )
  }