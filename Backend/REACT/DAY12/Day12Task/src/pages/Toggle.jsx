import { useState } from "react"

const Toggle = () => {

  const [password,setPassword] = useState(false)

  const ShowPassword = () => {

    setPassword(!password)

  }
  return (
    <>
      <div className="bg-amber-200 h-165">
        <div className="p-20 flex justify-center gap-10">
          <h1>{password ? "react123" : ""}</h1>
          <button
            className="p-2 mx-auto block bg-amber-300 rounded-4xl"
            onClick={ShowPassword}
          >
            Show
          </button>
        </div>
      </div>
    </>
  );
}

export default Toggle
