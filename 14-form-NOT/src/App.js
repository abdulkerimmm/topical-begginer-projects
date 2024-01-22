import { useState } from 'react';

function App() {
  const [formState, setFormState] = useState(
    [
      {
        field: 'userName',
        hasError: false,
        label: "kullanici adi",
        value: "",
        isRequired: true,

      },
      {
        field: 'userPasword',
        hasError: false,
        label: "password",
        value: "",
        isRequired: true,
        type: "password",

      }
    ]
  )
  const [formModel, setFormModel] = useState({
    userName: "",
    userPassword: ""
  })
  const [formErrorModel, setFormErrorModel] = useState({
    userName: false,
    userPassword: false
  })

  /// burasi karmasik ama anladim
  const whenChange = (value, field) => {                           /// şimdi dışardan userName yada password yani bir field ala ardından forma gireceğin değer yani value al
    // setFormModel({ ...formModel, [field]: value })
    const stateCopy = [...formState]                                /// ardından stateCopy diye bir formState  kopyası oluştur
    const findedIndex = formState.findIndex((item) => item.field === field)     // şimdi formState nin iki değerei var yukarda gözüktüğü gibi bunlardan birini alacazz peki hangisi bize gelen field formState içerisindeki hangi fielda eşitse onu al ya password yada useerName iki seçenekten biri olan objeyi al 
    stateCopy[findedIndex].value = value   //aldığımız bu objeyi stateCopy ye aktar
    setFormState(stateCopy)

  }

  const FormValidation = (e) => {
    e.preventDefault()
    // const obj = {
    //   userName: formModel.userName.trim() === "",
    //   userPassword: formModel.userPassword.trim() === ""
    // }
    // setFormErrorModel(obj)
    // if (Object.values(obj).includes(true)) {
    //   alert("lutfen dogru doldurun")
    //   return
    // }

    const stateCopy = [...formState]
    const newArr = stateCopy.map((item) => {
      if (item.isRequired && item.value.trim() === "") {
        return {
          ...item,   // bunun anlami item in o anki objesini dondur 2 tane objesi var zaten birini dondur ve onun hasError unuu true yap
          hasError: true
        }
      }
      return {
        ...item,
        hasError: false
      }

    })
    console.log(newArr)
    setFormState(newArr)
    const isExistError = newArr.filter((item) => item.hasError)
    if (isExistError.length) { 
      alert("Bir Hata Mevcut")
      return
    }

    sendFormRequest()
  }


  const sendFormRequest = () => {
    setTimeout(() => {
      alert("Kullanici girisi basarili");
    }, 2000)
  }



  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-400'>
      <div className="w-full max-w-xs">
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={FormValidation}>

          {formState.map((item) => {

            return (

              <div key={item.field} className='mb-4'>

                <label className='block text-gray-800 text-sm font-bold mb-4 ' htmlFor="userName" >{item.label} {item.isRequired && <span className='text-red-500'>*</span>}</label>

                <input

                  type={item.type ? item.type : "text"}
                  value={item.value}
                  name={item.field}
                  onChange={(e) => {
                    whenChange(e.target.value, item.field)
                  }}
                  className={
                    `shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600`
                  }
                />
                {item.hasError && <p className='text-red-500 text-xs italic mt-3'> {item.label} zorunludur</p>}

              </div>
            )
          })}

          {/* <div className='mb-4'>
            <label className='block text-gray-800 text-sm font-bold mb-4 ' htmlFor='userName' >Kullanici no <span className='text-red-500'>*</span></label>
            <input
            value={formModel.userName}
             name='userName'
             placeholder='merhaba@gmail.com'
             onChange={(e)=>{
              whenChange(e.target.value,'userName')
             }}
              className={
                `shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600`
              } ></input>
              {formErrorModel.userName && <p className='text-red-500 text-xs italic mt-3'>bu alan zorunludur</p>}
            
          </div>

          <div className='mb-6'>
            <label className='block text-gray-800 text-sm font-bold mb-4 '  htmlFor='password'>Password <span className='text-red-500'>*</span></label>
            <input placeholder='***************'
              value={formModel.userPassword}
              name='password'
              type="password"
              onChange={(e)=>{
                whenChange(e.target.value,'userPassword')
              }}
              className={
                `shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:shadow-violet-600`
              }></input>
               {formErrorModel.userPassword && <p className='text-red-500 text-xs italic mt-3'>bu alan zorunludur</p>}
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className={
              `bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm cursor-pointer focus:outline-none focus:shadow-blue-500 py-2 px-4 rounded w-full`
            }>Giriş Yap</button>
          </div> */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`
                        bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full
                        font-bold text-sm cursor-pointer focus:outline-none focus:shadow-blue-500
                        `}
            >Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;


