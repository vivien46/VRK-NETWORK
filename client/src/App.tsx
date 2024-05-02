import Button from './components/Button';
import Input from './components/Input';

const App = () => {
 
  return (
    <>
      <Button content='Ma phrase' />
      
      <form action=""> 
        <Input label= "username"
                type="text"
                field='username'
                isRequired= {true}
                />
        <input type="submit" />
      </form>

    </>
  );
};

export default App;
