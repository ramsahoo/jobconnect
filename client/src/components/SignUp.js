import './SignUp.css';

const InputContainer = ({children}) => {
  return  <div className="signup flex flex-col items-start w-80 p-2">
    {children}
    </div>
}

const SignUp = () => {
  return (
    <form className="flex flex-col items-center" id="signup">
     <InputContainer>
        <label for="fullName" className="text-orange-600 text-sm font-bold mb-2">Full Name:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="fullName" type="text" required />
      </InputContainer>
      <InputContainer>
        <label for="email" className="text-orange-600 text-sm font-bold mb-2">Email: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" required name="email"/>
      </InputContainer>
      <InputContainer>
        <label for="phone" className="text-orange-600 text-sm font-bold mb-2">Phone: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
      </InputContainer>
      <InputContainer >
        <label for="resume" className="text-orange-600 text-sm font-bold mb-2">Resume: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="resume" type="file" required />
      </InputContainer>
      <InputContainer >
        <label for="voice" className="text-orange-600 text-sm font-bold mb-2">Voice Recording: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="voice" type="file"  />
      </InputContainer>
      <input className="m-4 w-40 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;
