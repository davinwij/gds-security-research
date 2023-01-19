import { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

type Props = {}

const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY


const GoogleApiAuth = (props: Props) => {    
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
            clientId: '320569219924-eejbutpsvpmea02s1o9fmabk73l2gfjj.apps.googleusercontent.com',
            scope: ''
          });
       };
        gapi.load('client:auth2', initClient);
    
        return () => {
            
        }
    }, [])

    const onSuccess = (res: unknown) => {
        console.log('success:', res);        
    };

    const onFailure = (err: unknown) => {
        console.log('failed:', err);
    };
    

  return (
    <GoogleLogin 
        clientId={'320569219924-eejbutpsvpmea02s1o9fmabk73l2gfjj.apps.googleusercontent.com'}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}        
    />  
  )
}

export default GoogleApiAuth