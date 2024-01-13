import './App.css';

import Card from './components/Card'

let myObj = {
  name : 'Kalyani',
  age: 25,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India'
  }
}

let newArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];




function App() {
  return (
    <>
    <h1 className="text-3xl text-center text-slate-200 bg-green-500 p-3 rounded-md">React With Tailwind</h1>
     <Card username="kalyani" post='Senior Web Engineer' img='https://www.forbes.com/advisor/wp-content/uploads/2022/08/web_developer.jpeg.jpg'/>
     <Card username='nagi' post='Staff Engineer' img='https://media.fourdayweek.io/files/the-reality-of-being-a-staff-software-engineer-salary-workload-and-how-to-get-started-2022-pybfU.jpeg'/>
     <Card username='nagamma' post='CEO' img='https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
     {/* <Card {myArr=[1,2,3]}/> */}
      <Card myArr = {newArray}/> {/* pass array in this approach instead of above approach */}
    </>
  
  );
}

export default App;
