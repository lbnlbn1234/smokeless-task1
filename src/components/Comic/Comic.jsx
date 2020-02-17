import React from 'react'
import './Comic.css'
import {Get} from 'react-axios'
// import ReactJson from 'react-json-view'

class Comic extends React.Component{
  render(){
    /*
      xkcd.com does not allow CORS
      To get the data I used a proxy
      If you want direct access, pls use the following code instead and remove /src/setupProxy.js
      `<Get url={'https://xkcd.com/'+this.props.id+'/info.0.json?reload=false'} >`
    */
    return (
      <Get url={'/xkcd/'+this.props.id+'/info.0.json'} >
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (
                // <ReactJson src={response.data} />
                <div>
                <h1>{response.data.title}</h1>
                <img src={response.data.img} alt={response.data.alt}/>
                <div>{response.data.day}/{response.data.month}/{response.data.year}</div>
                <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button>
                </div>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
    )
  }
}
export default Comic
