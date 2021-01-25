import errorImage from './Error.png'

export default function ImageErrorView({ message }) {

   return (
      <div role="alert">
         <img src={errorImage} alt="error" width="240" />
         <p>{message}</p>
      </ div>
   )

}
