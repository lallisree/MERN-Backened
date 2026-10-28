import Datacontext from '../context/Datacontext'

const Dataprovider = ({children}) => {
    const name = "Lalli";
    const role = "Developer"
  return (
    <div>
      <Datacontext.Provider value={{name , role}}>
        {children}
        </Datacontext.Provider>
    </div>
  );
}

export default Dataprovider
