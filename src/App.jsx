import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
function App() {


const [CGPA, setCGPA] = useState(0);

const notify = () => toast.error('Please enter a valid CGPA', {
  style: {
    border: '1px solid #0000FF',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#FF0000',
    secondary: '#FFFAEE',
  },
});


const resultToast = (e) => toast.error(`Congrats !! Your CGPA is ${e}`, {
  icon: '👏',style: {
    border: '1px solid #0000FF',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#FF0000',
    secondary: '#FFFAEE',
  },
});


  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const first = from.first.value;
    const second = from.second.value;
    const third = from.third.value;
    const fourth = from.fourth.value;
    const fifth = from.fifth.value;
    const sixth = from.sixth.value;
    const seventh = from.seventh.value;
    const eighth = from.eighth.value;

    if(first>4.00 ||second>4.00 ||third>4.00||fourth>4.00||fifth>4.00||sixth>4.00||seventh>4.00||eighth>4.00 ){
      
       return notify();

    }

 const result=(first*5/100)+(second*5/100)+(third*5/100)+(fourth*10/100)+(fifth*15/100)+(sixth*20/100)+(seventh*25/100)+(eighth*15/100);
 const fixedText=result.toFixed(2);
 setCGPA(fixedText);
 resultToast(fixedText)
 
  };

  return (
    <>
 <div className=" py-6 lg:py-0 lg:hero min-h-screen bg-base-200 " 
style={{backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg)'}}>
  <div className="hero-content flex-col ">
    <div className=" text-center ">
      <h1 className="lg:text-3xl text-center font-bold">CGPA CALCULATOR-16 PROBIDHAN</h1>
      <p className="py-6 font-bold ">PROJECT BY @NILOY</p>
    </div>
    <div className="card p-6 lg:p-10 shadow-2xl bg-base-100 ">
      <form onSubmit={handleSubmit} className="">
        
     <div className="flex justify-center">
     <div className="mr-2">   <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">1st Semester</span>
          </label>
          <input name="first" type="text" placeholder="CGPA" className="input   w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">3rd Semester</span>
          </label>
          <input name="third"  type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">5th Semester</span>
          </label>
          <input name="fifth" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">7th Semester</span>
          </label>
          <input name="seventh" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div></div>
      <div className="ml-2">  
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">2nd Semester</span>
          </label>
          <input name="second" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">4th Semester</span>
          </label>
          <input name="fourth" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span   className="label-text text-blue-600 font-bold">6th Semester</span>
          </label>
          <input name="sixth" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-blue-600 font-bold">8th Semester</span>
          </label>
          <input name="eighth" type="text" placeholder="CGPA" className="input w-40 lg:w-auto input-bordered" required />
        </div></div>
     </div>
  <div className=" flex justify-between">
  <h1 className="text-xl my-2">Total CGPA: <span className="text-blue-600 font-bold">{CGPA}</span> </h1>
 
  </div>
    
        <div className="form-control mt-6">
          <button  className="btn btn-primary">CALCULATE TOTAL CGPA</button> 
        </div>
      </form>
    </div>
    <div><h1 className="text-center font-medium mt-10">Mymensingh Polytechnic Institute</h1></div>


    
  </div>

</div>

    </>
  )
}

export default App
